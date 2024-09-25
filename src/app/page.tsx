"use client";

import { useState, useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import KOL from "@/types/ct";
import { Header } from "../components/Header";
import { KOLCard } from "../components/KolCard";
import { Footer } from "../components/Footer";
import { updateEloRating } from "./utils/updateEloRating";
import Rankings from "./rankings/page";
import { main } from "framer-motion/client";

export default function Home() {
  const queryClient = useQueryClient();

  const [kolOne, setKolOne] = useState<KOL>();
  const [kolTwo, setKolTwo] = useState<KOL>();
  const [rankLeft, setRankLeft] = useState<number>();
  const [rankRight, setRankRight] = useState<number>();
  const [winner, setWinner] = useState<KOL>();
  const [diff, setDiff] = useState<number>(0);
  const [totalWins, setTotalWins] = useState<number>(0);

  let streak = useRef(0);

  // Fetch and randomize KOLs
  const fetchKOLs = async () => {
    console.log("Fetching KOLs");
    const res = await fetch("/api/getKols");
    const data = await res.json();

    const shuffled = data.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);

    setKolOne(selected[0]);
    setKolTwo(selected[1]);
    updateTotalWins();
    fetchRanks(selected[0], selected[1]);

    return data;
  };

  const updateTotalWins = async () => {
    const res = await fetch("/api/getKols");
    const data = await res.json();

    const total = data.reduce((acc: number, kol: KOL) => acc + kol.wins, 0);
    setTotalWins(total);
  };

  const fetchRanks = async (left: KOL, right: KOL) => {
    const res = await fetch("/api/getRanks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ left, right }),
    });
    const data = await res.json();

    setRankLeft(data.left);
    setRankRight(data.right);
  };

  const updateWinner = async (winner: KOL, loser: KOL) => {
    const res = await fetch("/api/updateRank", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ winner, loser }),
    });
    const data = await res.json();

    setKolOne(data.kolOne);
    setKolTwo(data.kolTwo);
    setRankLeft(data.kolOne.aurarank);
    setRankRight(data.kolTwo.aurarank);
  };

  const winnerMutation = useMutation(
    ({ winner, loser }: { winner: KOL; loser: KOL }) =>
      updateWinner(winner, loser),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getWinner"]);
      },
    },
  );

  useEffect(() => {
    if (!kolOne || !kolTwo || kolOne.id === kolTwo.id) fetchKOLs();
    if (streak.current === 10) {
      streak.current = 0;
      fetchKOLs();
    }
  }, [kolOne, kolTwo]);

  const handleLeftClick = () => {
    const { winnerRating } = updateEloRating(
      kolOne?.aurarank!,
      kolTwo?.aurarank!,
      32,
    );
    setDiff(Math.abs(winnerRating - rankLeft!));

    if (winner?.id === kolOne?.id) streak.current++;
    else {
      setWinner(kolOne);
      streak.current = 1;
    }

    if (streak.current === 10) fetchKOLs();
    else winnerMutation.mutate({ winner: kolOne!, loser: kolTwo! });
  };

  const handleRightClick = () => {
    const { winnerRating } = updateEloRating(
      kolTwo?.aurarank!,
      kolOne?.aurarank!,
      32,
    );
    setDiff(Math.abs(winnerRating - rankRight!));

    if (winner?.id === kolTwo?.id) streak.current++;
    else {
      setWinner(kolTwo);
      streak.current = 1;
    }

    if (streak.current === 10) fetchKOLs();
    else winnerMutation.mutate({ winner: kolTwo!, loser: kolOne! });
  };

  return (
    <main>
      <section className="flex min-h-screen text-white font-extrabold bg-gradient-radial from-bg-100 to-70% to-bg-200 flex-col items-center justify-between p-6">
        <Header />

        <h2 className="text-2xl text-center tracking-wide py-4">
          Who has more aura? Click to Choose.
        </h2>

        <div className="flex min-h-[456px] justify-center items-center py-6">
          <KOLCard
            kol={kolOne}
            handleClick={handleLeftClick}
            diff={diff}
            winner={winner}
          />

          <h3 className="px-6 text-3xl">OR</h3>

          <KOLCard
            kol={kolTwo}
            handleClick={handleRightClick}
            diff={diff}
            winner={winner}
          />
        </div>

        <Footer totalWins={totalWins} />
      </section>
      <section className="flex min-h-screen text-white font-extrabold bg-gradient-radial-b from-bg-100 to-50% to-bg-200 flex-col items-center justify-between p-6">
        <Rankings />
      </section>
    </main>
  );
}

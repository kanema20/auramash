import { useState, useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import Navbar from "@/components/Navbar";
import KOL from "@/types/ct";
import { Header } from "../components/Header";
import { KOLCard } from "../components/KolCard";
import { Footer } from "../components/Footer";
import { updateEloRating } from "@/app/utils/updateEloRating";
import Rankings from "@/components/Rankings";

interface HomeProps {
  getKolsEndpoint: string;
  getRanksEndpoint: string;
  updateRankEndpoint: string;
  getSortedRanksEndpoint: string;
  type: string;
}

export const HomeComponent = ({
  getKolsEndpoint,
  getRanksEndpoint,
  updateRankEndpoint,
  getSortedRanksEndpoint,
  type,
}: HomeProps) => {
  const queryClient = useQueryClient();

  const [kolOne, setKolOne] = useState<KOL>();
  const [kolTwo, setKolTwo] = useState<KOL>();
  const [rankLeft, setRankLeft] = useState<number>();
  const [rankRight, setRankRight] = useState<number>();
  const [winner, setWinner] = useState<KOL>();
  const [diff, setDiff] = useState<number>(0);
  const [totalWins, setTotalWins] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false); // New state for disabling buttons

  let streak = useRef(0);

  // Fetch and randomize KOLs
  const fetchKOLs = async () => {
    console.log("Fetching KOLs");
    const res = await fetch(getKolsEndpoint);
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
    const res = await fetch(getKolsEndpoint);
    const data = await res.json();

    const total = data.reduce((acc: number, kol: KOL) => acc + kol.wins, 0);
    setTotalWins(total);
  };

  const fetchRanks = async (left: KOL, right: KOL) => {
    const res = await fetch(getRanksEndpoint, {
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
    const res = await fetch(updateRankEndpoint, {
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
        setDisabled(false); // Re-enable buttons after mutation success
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
    if (disabled) return; // Prevent multiple clicks
    setDisabled(true); // Disable buttons during operation
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
    if (disabled) return; // Prevent multiple clicks
    setDisabled(true); // Disable buttons during operation
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
      <Navbar type={type} />
      <section className="relative flex pt-24 min-h-screen text-white font-extrabold bg-gradient-radial from-bg-100 to-70% to-bg-200 flex-col items-center justify-between p-6">
        <Header type={type} />

        <h2 className="text-2xl fadeIn duration-150 delay-75 text-center tracking-wide py-4">
          Who has more aura? Click to Choose.
        </h2>

        <div className="flex fadeIn duration-150 delay-150 h-[45vw] max-h-[460px] max-w-5xl justify-center items-center py-6 mx-12 w-full">
          <KOLCard
            kol={kolOne}
            handleClick={handleLeftClick}
            diff={diff}
            winner={winner}
            disable={disabled} // Pass the disabled state
          />

          <h3 className="text-[48px] lg:text-[72px] px-6">OR</h3>

          <KOLCard
            kol={kolTwo}
            handleClick={handleRightClick}
            diff={diff}
            winner={winner}
            disable={disabled} // Pass the disabled state
          />
        </div>

        <Footer totalWins={totalWins} />
        <div className="absolute bottom-4 right-8 flex flex-col items-center justify-center gap-2 opacity-65">
          <p>Rankings</p>
          {/* you dont need to use Image component for this so im diabling the warning*/}
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="/arrow.svg"
            className="size-6 animate-bounce-short"
            alt="arrow icon"
          />
        </div>
      </section>
      <section className="flex min-h-screen text-white font-extrabold bg-gradient-radial-b from-bg-100 to-50% to-bg-200 flex-col items-center justify-between p-6">
        <Rankings endpoint={getSortedRanksEndpoint} type={type} />
      </section>
    </main>
  );
};

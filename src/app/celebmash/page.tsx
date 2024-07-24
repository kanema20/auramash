'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import KOL from "@/types/ct";
import { useQuery, useMutation, useQueryClient } from "react-query";

export default function Home() {
  const [kolOne, setKolOne] = useState<KOL|undefined>();
  const [kolTwo, setKolTwo] = useState<KOL|undefined>();
  const [rankLeft, setRankLeft] = useState<KOL|undefined>();
  const [rankRight, setRankRight] = useState<KOL|undefined>();
  const [winner, setWinner] = useState<KOL|undefined>();
  const [totalWins, setTotalWins] = useState<number>(0);
  const queryClient = useQueryClient();

  let streak = useRef(0);

  const getCelebs = async () => {
    const res = await fetch("/api/getCelebs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // randomize KOL's
    const shuffled = data.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 2);  

    setKolOne(selected[0]);
    setKolTwo(selected[1]);
    getTotalWins();
    getRanks(selected[0], selected[1]);
    return data;
  }

  const getTotalWins = async () => {
    const res = await fetch("/api/getCelebs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    let winAccum = 0;
    data.forEach((kol: KOL) => {
      winAccum = winAccum + kol.wins;
      setTotalWins(winAccum)
    });
  }

  const getRanks = async (left: KOL, right: KOL) => {
    const res = await fetch("/api/getRanks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({left, right}),
    });
    const data = await res.json();
    // console.log(data);
    setRankLeft(data.left);
    setRankRight(data.right);
  }


  const getWinner = async (winner: KOL, loser: KOL) => {
    const res = await fetch("/api/updateRank", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({winner, loser}),
    });
    const data = await res.json();
    // console.log(data);
    setKolOne(data.kolOne);
    setKolTwo(data.kolTwo);
    return
  }

  const winnerMutation = useMutation(
    ({ winner, loser }: { winner: KOL, loser: KOL }) => getWinner(winner, loser),
    {
        onSuccess: () => {
            // Invalidate and refetch queries that might be affected by the mutation
            queryClient.invalidateQueries(['getWinner']);
        },
    }
);
    // console.log(data);

  useEffect(() => {
    if (!kolOne && !kolTwo) {
        getCelebs()
    }
    if (kolOne?.id === kolTwo?.id) {
        getCelebs()
    }
    if (streak.current == 10) {
      console.log("win streak maxxed! randomizing CELEBs")
      streak.current = 0;
      getCelebs()
    }
  })

  // left wins, right loses
  function clickLeft() {
      if (winner?.id === kolOne?.id) {
        streak.current++;
      }
      else {
        setWinner(kolOne);
        streak.current = 1;
      }
      if (streak.current == 10) {
        console.log("win streak maxxed! randomizing CELEBs")
        streak.current = 0;
        getCelebs()
      } else {
        winnerMutation.mutate({winner: kolOne!, loser: kolTwo!});
      }
      // getWinner(kolOne!, kolTwo!);
  }
  
  // right wins, left loses
  function clickRight() { 
    // if (!isLoading) {
      if (winner?.id === kolTwo?.id) {
        streak.current++;
      }
      else {
        setWinner(kolTwo);
        streak.current = 1;
      }
      if (streak.current == 10) {
        console.log("win streak maxxed! randomizing CELEBs")
        streak.current = 0;
        getCelebs()
      }
      // getWinner(kolTwo!, kolOne!);
      else {
        winnerMutation.mutate({winner: kolTwo!, loser: kolOne!});
      }
    // }
  }

  // console.log(kolOne);
  // console.log(kolTwo);
  // console.log("winner: ", winner?.id);
  console.log("win streak: ", streak.current);
  // console.log("kol 1 id: ", kolOne?.id);
  // console.log("kol 2 id: ", kolTwo?.id);
  console.log("left rank: ", rankLeft);
  // getTotalWins();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div>
    <div className="wrapper">
      <div className="title">
      <h1>CELEBMASH</h1><small className="aura-color">[auramaxxing edition]</small>
      </div>
      <div className="container">
        <h3>
          Were we let in for our <span className="aura-color">aura</span>? No. Will we be judged by it? Yes.
        </h3>
        <h2>Who has more aura? Click to Choose.</h2>

                <div className="img-wrapper">
                <div className="flex flex-col">

                  {winnerMutation.isLoading ? 
                    <div className="justify-center items-center">
                      <p>Loading...</p>
                    </div>                   
                    :
                    <Image src={kolOne?.pfp!} width={400} height={400} alt="Left Image" id="leftImg" onClick={() => clickLeft()}/>
                  }
                  <p>
                  <a className="x-color" href={`https://x.com/${kolOne?.handle}`} target="_blank">{kolOne?.handle}</a>
                  </p>
                </div>
                <h3 className="or-char">OR</h3>
                <div className="flex flex-col">
                {winnerMutation.isLoading ? 
                  <div className="justify-center items-center">
                    <p>Loading...</p>
                  </div>
                   :
                    <Image src={kolTwo?.pfp!} width={400} height={400} alt="Right Image" id="rightImg" onClick={() => clickRight()} />
                }
                  <p>
                    <a className="x-color" href={`https://x.com/${kolTwo?.handle}`} target="_blank">{kolTwo?.handle}</a>
                  </p>
                </div>        
              </div>
              <div className="stats">
                <p>total celeb mashes: {totalWins}</p>
              </div>
        
        <ul className="house-list">
          <li><a href="#">POWERED BY $aura</a></li>
        </ul>
        
        <ul className="footer-list">
          <li><a href="/about">About</a></li>
          <li><a href="/celeb-rankings" target="_blank">Rankings</a></li>
        </ul>
      </div>
    </div>
  </div>

    </main>
  );
}

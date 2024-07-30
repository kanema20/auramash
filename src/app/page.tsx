'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import KOL from "@/types/ct";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { gsap } from 'gsap';
import { cult1 } from "./utils/assets";

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const [kolOne, setKolOne] = useState<KOL|undefined>();
  const [kolTwo, setKolTwo] = useState<KOL|undefined>();
  const [rankLeft, setRankLeft] = useState<number|undefined>();
  const [rankRight, setRankRight] = useState<number|undefined>();
  const [winner, setWinner] = useState<KOL|undefined>();
  const [diff, setDiff] = useState<number>(0);
  const [totalWins, setTotalWins] = useState<number>(0);
  const queryClient = useQueryClient();

  let streak = useRef(0);

  const getKOLs = async () => {
    const res = await fetch("/api/getKols", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // randomize KOL's
    const shuffled = data.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 2);  
    // console.log(data);

    // console.log(shuffled)
    setKolOne(selected[0]);
    setKolTwo(selected[1]);
    getTotalWins();
    getRanks(selected[0], selected[1]);

    return data;
  }

  function probability(leftRating: number, rightRating: number){
    return 1.0*1.0/(1+1.0*Math.pow(10, 1.0*(leftRating-rightRating)/400));
  }
  
  function eloRating(winnerRating : number, loserRating : number, k: number, win: any){
    let winnerProb = probability(loserRating, winnerRating); // left win probability
    let loserProb = probability(winnerRating, loserRating); // right win probability

    winnerRating = winnerRating + k * (1 - winnerProb); // add left rating
    loserRating = loserRating + k * (0 - loserProb); // minus right rating

    return { winnerRating, loserRating };
  }

  const getTotalWins = async () => {
    const res = await fetch("/api/getKols", {
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
    setRankLeft(data.kolOne.aurarank);
    setRankRight(data.kolTwo.aurarank);
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
      getKOLs()
    }
    if (kolOne?.id === kolTwo?.id) {
      getKOLs()
    }
    if (streak.current == 10) {
      console.log("win streak maxxed! randomizing KOLs")
      streak.current = 0;
      getKOLs()
    }
  })
  useEffect(() => {
    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0, y: -185 });
      gsap.set(textRef.current, { y: -185 });
    }
    if (textRef2.current) {
      // gsap.set([textRef.current, textRef2.current], { opacity: 0, y: -185 });
      gsap.set(textRef2.current, { opacity: 0, y: -185 });
      gsap.set(textRef2.current, { y: -185 });
    }
  }, [getKOLs]);

  // left wins, right loses
  function clickLeft() {
    const { winnerRating, loserRating} = eloRating(kolOne?.aurarank!, kolTwo?.aurarank!, 32, true);
    setDiff(Math.abs((winnerRating - rankLeft!)));

      if (winner?.id === kolOne?.id) {
        streak.current++;
      }
      else {
        setWinner(kolOne);
        streak.current = 1;
      }
      if (streak.current == 10) {
        console.log("win streak maxxed! randomizing KOLs")
        streak.current = 0;
        getKOLs()
      } else {
        winnerMutation.mutate({winner: kolOne!, loser: kolTwo!});
      }
      // getWinner(kolOne!, kolTwo!);
      moveTextUp();

  }
  
  // right wins, left loses
  function clickRight() { 
    const { winnerRating, loserRating} = eloRating(kolTwo?.aurarank!, kolOne?.aurarank!, 32, true);
    // console.log("right rank after: ", winnerRating);
    // console.log("left rank after: ", loserRating);
    setDiff(Math.abs(winnerRating - rankRight!));
    // if (!isLoading) {
      if (winner?.id === kolTwo?.id) {
        streak.current++;
      }
      else {
        setWinner(kolTwo);
        streak.current = 1;
      }
      if (streak.current == 10) {
        console.log("win streak maxxed! randomizing KOLs")
        streak.current = 0;
        getKOLs()
      }
      // getWinner(kolTwo!, kolOne!);
      else {
        winnerMutation.mutate({winner: kolTwo!, loser: kolOne!});
      }
    // }
    moveTextUp();

  }

  const moveTextUp = () => {
    if (textRef.current) {
      gsap.to(textRef.current, { duration: 1.25, y: -225, ease: "power2.out" });
      gsap.to(textRef.current, { duration: 0.7, opacity: 1, ease: "power2.out" });
    }
    if (textRef2.current) {
      gsap.to(textRef2.current, { duration: 1.25, y: -235, ease: "power2.out" });
      gsap.to(textRef2.current, { duration: 0.7, opacity: 1, ease: "power2.out"});
    }
  };


  // console.log(kolOne);
  // console.log(kolTwo);
  // console.log("winner: ", winner?.id);
  console.log("win streak: ", streak.current);
  // console.log("kol 1 id: ", kolOne?.id);
  // console.log("kol 2 id: ", kolTwo?.id);
  // getTotalWins();
  const currKol1 = kolOne
  const currKol2 = kolTwo

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div>
    <div className="wrapper">
      <div className="title">
      <h1>FACEMASH</h1><small className="aura-color">[auramaxxing edition]</small>
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
                     <Image src={currKol1?.pfp!} width={400} height={400} alt="Left celeb" id="staleLeftImg" />
                    </div>                   
                    :
                    <Image src={kolOne?.pfp!} width={400} height={400} alt="Left Image" id="leftImg" onClick={() => clickLeft()}/>
                  }
                  <p>
                  <a className="x-color" href={`https://x.com/${kolOne?.handle}`} target="_blank">{kolOne?.handle}</a>
                  </p>
                  { winner?.id === kolOne?.id ? <p ref={textRef} className="rank-update aura-color">+{" "}{diff.toFixed(2)} aura</p> : 
                    <p ref={textRef} className="rank-update negative-aura-color">-{" "}{diff.toFixed(2)} aura</p> }
                </div>
                <h3 className="or-char">OR</h3>
                <div className="flex flex-col">
                {winnerMutation.isLoading ? 
                    <div className="justify-center items-center">
                     <Image src={currKol2?.pfp!} width={400} height={400} alt="Left celeb" id="staleLeftImg" />
                    </div>                   
                    :
                    <Image src={kolTwo?.pfp!} width={400} height={400} alt="right Image" id="rightImg" onClick={() => clickRight()}/>
                  }                  
                  <p>
                    <a className="x-color" href={`https://x.com/${kolTwo?.handle}`} target="_blank">{kolTwo?.handle}</a>
                  </p>
                  { winner?.id === kolTwo?.id ? <p ref={textRef2} className="rank-update aura-color">+{" "}{diff.toFixed(2)} aura</p> : 
                    <p ref={textRef2} className="rank-update negative-aura-color">-{" "}{diff.toFixed(2)} aura</p> }
                </div>        
              </div>
              <div className="stats">
                <p>total mashes: {totalWins}</p>
              </div>
        
        <ul className="footer-list">
          <li><a href="/about">About</a></li>
          <li><a href="/rankings" target="_blank">Rankings</a></li>
        </ul>
        <ul className="house-list">
          <li><a href="/celebmash">PLAY CELEB VERSION</a></li>
        </ul>
        <ul className="house-list">
          <li><a href="#">POWERED BY <a href="https://dexscreener.com/solana/9vix1vducteoc2wertsp2tudxxpwaf69aeet8enpjpsn?maker=AJUUQHndVntX3QwLpqB8ByfaZbAVS3pjuKjWkEqHSnPj" target="_blank">$aura</a> on Solana</a></li>
        </ul>
      </div>
      <div className="aura-image">
        <Image
            className="auracat"
            src={cult1}
            alt="image"
            height={100}
            width={100}
          />
      </div>
    </div>
  </div>

    </main>
  );
}

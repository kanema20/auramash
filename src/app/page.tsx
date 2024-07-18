'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import KOL from "@/types/ct";
import { useQuery, useMutation, useQueryClient } from "react-query";

export default function Home() {
  const [kolOne, setKolOne] = useState<KOL|undefined>();
  const [kolTwo, setKolTwo] = useState<KOL|undefined>();
  const [winner, setWinner] = useState<KOL|undefined>();
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
    return data;
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
      getKOLs()
    }
    if (kolOne?.id === kolTwo?.id) {
      getKOLs()
    }
    if (streak.current == 10) {
      streak.current = 0;
      getKOLs()
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
      winnerMutation.mutate({winner: kolOne!, loser: kolTwo!});
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
      // getWinner(kolTwo!, kolOne!);
      winnerMutation.mutate({winner: kolTwo!, loser: kolOne!});
    // }
  }

  // console.log(kolOne);
  // console.log(kolTwo);
  // console.log("winner: ", winner?.id);
  console.log("win streak: ", streak.current);
  // console.log("kol 1 id: ", kolOne?.id);
  // console.log("kol 2 id: ", kolTwo?.id);

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
                    <div className="mt-20">
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
                  <div className="mt-20">
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


        <ul className="house-list">
          <li><a href="#">MOVIES</a></li>
          <li><a href="#">SPORTS</a></li>
          <li><a href="#">GAMERS</a></li>
          <li><a href="#">CRYPTO</a></li>
          <li><a href="#">TIKTOK</a></li>
          <li><a href="#">ACTORS</a></li>
          <li><a href="#">ARTISTS</a></li>
          <li><a href="#">ALBUMS</a></li>
          <li><a href="#">COMING SOON...</a></li>
          <li><a href="#">RANDOM</a></li>
        </ul>
        
        <ul className="footer-list">
          <li><a href="/about">About</a></li>
          <li><a href="#">Submit</a></li>
          <li><a href="/rankings" target="_blank">Rankings</a></li>
          <li><a href="#">Previous</a></li>
        </ul>
      </div>
    </div>
  </div>

    </main>
  );
}

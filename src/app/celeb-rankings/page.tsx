'use client'
import { useState, useEffect } from "react";
import KOL from "@/types/ct";
import Image from "next/image";

export default function Rankings() {
const [celebs, setCelebs] = useState<any[]>();
const getKOLs = async () => {
    const res = await fetch("/api/getSortedCelebs", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    // console.log(data);
    setCelebs(data);
    return data;
    }
    useEffect(() => {
        if (!celebs) {
            getKOLs()
        }
    })
    // kols?.map(kol => {
    //     console.log(kol)
    // })
    return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-between p-24">
        <h3 className="sub-page-title">Celeb<span className="aura-color">aura</span> Elo Rating</h3>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>X Handle</th>
                    <th>PFP</th>
                    <th>aura Rating</th>
                    <th>Total Wins</th>
                </tr>
            </thead>
            <tbody id="eloTableBody">
            {celebs?.map((kol, index) => (
                <tr key={kol.id}>
                    <td>{index+1}</td>
                    <td>
                    <a className="x-color ct-name" href={`https://x.com/${kol?.handle}`} target="_blank">{kol.handle}</a></td>
                    <td><Image className="pfp" src={kol.pfp} alt="kol pfp" width={400} height={400} />
                    </td>
                    <td>{parseFloat(kol.aurarank).toFixed(2)}</td>
                    <td>{kol.wins}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <div className="back-footer">
            <button><a href="/">Back</a></button>
        </div>
    </div>
        
    // </main>
  );
}

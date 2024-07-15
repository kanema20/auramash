'use client'
import { useState, useEffect } from "react";
import KOL from "@/types/ct";

export default function Rankings() {
const [kols, setKols] = useState<any[]>();
const getKOLs = async () => {
    const res = await fetch("/api/getSortedKols", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log(data);
    setKols(data);
    return data;
    }
    useEffect(() => {
        if (!kols) {
            getKOLs()
        }
    })
    kols?.map(kol => {
        console.log(kol)
    })
    return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
    <h3 className="sub-page-title">CT aura Elo Rating</h3>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>PFP</th>
                    <th>aura Elo Rating</th>
                </tr>
            </thead>
            <tbody id="eloTableBody">
            {kols?.map(kol => (
                <tr key={name}>
                    <td>
                    <a className="x-color" href={`https://x.com/${kol?.handle}`} target="_blank">{kol.handle}</a></td>
                    <td><img src={kol.pfp} /></td>
                    <td>{kol.aurarank}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <div className="back-footer">
            <button><a href="/">Back</a></button>
        </div>
    </>
        
    // </main>
  );
}

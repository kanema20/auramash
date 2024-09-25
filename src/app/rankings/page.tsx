"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface KOL {
  id: string;
  pfp: string;
  handle: string;
  aurarank: number;
  wins: number;
}

interface RankingsProps {
  endpoint?: string;
  type?: string;
}

export default function Rankings({
  endpoint = "/api/getSortedKols",
  type = "kol",
}: RankingsProps) {
  const [kols, setKols] = useState<KOL[] | null>(null);

  const getKOLs = async () => {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: KOL[] = await res.json();
    setKols(data);
    return data;
  };

  useEffect(() => {
    if (!kols) {
      getKOLs();
    }
  }, [kols]);

  // Define the headers for reuse
  const headers = ["Rank", "PFP", "X Handle", "Aura Rating", "Total Wins"];

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-[2000px] w-full p-6">
      <h3 className="text-left uppercase w-full text-[32px] lg:text-[64px] my-16 ml-8">
        {type == "kol" ? "CT " : "Celebs "}
        <span className="text-green-500">aura</span> Elo Rating
      </h3>

      {/* Container for table with overflow handling */}
      <div className="w-full overflow-auto">
        <table className="relative bg-black/40 backdrop-blur-md rounded-3xl w-full table-auto border-collapse text-center lg:text-2xl min-w-[800px]">
          <thead className="sticky top-0 z-20 bg-gradient-to-r from-bg-200 via-bg-200 to-bg-200 ">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="uppercase border-b border-slate-600 p-4 pb-3 pt-0 text-center font-bold text-slate-200"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-bold ">
            {kols?.map((kol, index) => (
              <tr
                key={kol.id}
                className="border-b even:bg-black/40 border-slate-700"
              >
                <td className="p-4 pl-8">{index + 1}</td>
                <td className="p-4">
                  <div className="relative rounded-2xl overflow-hidden mx-auto size-28 lg:size-56 aspect-square">
                    <Image
                      src={kol.pfp}
                      alt="kol pfp"
                      className="object-cover"
                      fill={true}
                      sizes="200px"
                    />
                  </div>
                </td>
                <td className="p-4">
                  <a
                    className="underline"
                    href={`https://x.com/${kol.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{kol.handle}
                  </a>
                </td>
                <td className="p-4">{parseFloat(kol.aurarank.toFixed(2))}</td>
                <td className="p-4">{kol.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

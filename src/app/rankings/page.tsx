"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    setKols(data);
    return data;
  };

  useEffect(() => {
    if (!kols) {
      getKOLs();
    }
  }, [kols]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-6">
      <h3 className="text-lg font-bold py-4">
        CT <span className="text-green-500">aura</span> Elo Rating
      </h3>

      {/* Container for table with overflow handling */}
      <div className="w-full max-w-5xl overflow-auto">
        <table className="relative w-full table-auto border-collapse text-center text-sm min-w-[800px]">
          <thead className="sticky top-0 z-20 bg-gradient-to-r from-bg-100 via-black to-bg-200 outline outline-1 outline-slate-600">
            <tr>
              <th className="border-b border-slate-600 p-4 pb-3 pl-8 pt-0 text-center font-medium text-slate-200">
                Rank
              </th>
              <th className="border-b border-slate-600 p-4 pb-3 pt-0 text-center font-medium text-slate-200">
                X Handle
              </th>
              <th className="border-b border-slate-600 p-4 pb-3 pt-0 text-center font-medium text-slate-200">
                PFP
              </th>
              <th className="border-b border-slate-600 p-4 pb-3 pt-0 text-center font-medium text-slate-200">
                Aura Rating
              </th>
              <th className="border-b border-slate-600 p-4 pb-3 pt-0 text-center font-medium text-slate-200">
                Total Wins
              </th>
            </tr>
          </thead>
          <tbody>
            {kols?.map((kol, index) => (
              <tr key={kol.id} className="border-b border-slate-700">
                <td className="p-4 pl-8">{index + 1}</td>
                <td className="p-4">
                  <a
                    className="text-blue-500 underline"
                    href={`https://x.com/${kol.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {kol.handle}
                  </a>
                </td>
                <td className="p-4">
                  <Image
                    className="rounded-full"
                    src={kol.pfp}
                    alt="kol pfp"
                    width={50}
                    height={50}
                  />
                </td>
                <td className="p-4">{parseFloat(kol.aurarank).toFixed(2)}</td>
                <td className="p-4">{kol.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="py-8">
        <button className="bg-red-600 text-white py-2 px-4 rounded">
          <a href="/">Back</a>
        </button>
      </div>
    </div>
  );
}

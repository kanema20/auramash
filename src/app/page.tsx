"use client";
import { HomeComponent } from "@/components/HomeComponent";

export default function HomePage() {
  return (
    <HomeComponent
      getKolsEndpoint="/api/getKols"
      getRanksEndpoint="/api/getRanks"
      updateRankEndpoint="/api/updateRank"
      getSortedRanksEndpoint="/api/getSortedKols"
      type="kol"
    />
  );
}

"use client";
import { HomeComponent } from "@/components/HomeComponent";

export default function HomePage() {
  return (
    <HomeComponent
      getKolsEndpoint="/api/getAthletes"
      getRanksEndpoint="/api/getRanks"
      updateRankEndpoint="/api/updateAthleteRank"
      getSortedRanksEndpoint="/api/getSortedAthletes"
      type="athlete"
    />
  );
}

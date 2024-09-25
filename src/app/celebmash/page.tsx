"use client";
import { HomeComponent } from "@/components/HomeComponent";

export default function HomePage() {
  return (
    <HomeComponent
      getKolsEndpoint="/api/getCelebs"
      getRanksEndpoint="/api/getRanks"
      updateRankEndpoint="/api/updateCelebRank"
      getSortedRanksEndpoint="/api/getSortedCelebs"
      type="celeb"
    />
  );
}

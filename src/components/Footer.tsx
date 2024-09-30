import Image from "next/image";
import { cult1 } from "@/app/utils/assets";

export const Footer = ({ totalWins }: { totalWins: number }) => (
  <div className="pb-8 fadeIn delay-200 duration-150">
    <div className="flex text-2xl flex-col items-center ">
      <p className={" text-gray-400"}>Total Mashes</p>
      <p className={""}>{totalWins}</p>
    </div>

    <div className="pt-8">
      <Image
        src={cult1}
        alt="image"
        height={100}
        width={100}
        className="mx-auto"
      />
    </div>
    <ul className="list-none space-x-2 inline-flex pt-4">
      <li>
        <a
          href="https://dexscreener.com/solana/9vix1vducteoc2wertsp2tudxxpwaf69aeet8enpjpsn?maker=AJUUQHndVntX3QwLpqB8ByfaZbAVS3pjuKjWkEqHSnPj"
          target="_blank"
          className="text-blue-500"
        >
          POWERED BY $aura on Solana
        </a>
      </li>
    </ul>
  </div>
);

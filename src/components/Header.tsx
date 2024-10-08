import { smashconfig } from "../components/smashconfig";


export const Header = ({ type = "kol" }) => (
  <div className="tracking-widest duration-150 fadeIn py-8 text-center leading-none">
    <p className="text-brand-primary text-lg">[auramaxxing edition]</p>
    <h1 className="text-[48px] lg:text-[72px] uppercase">
      {smashconfig[type].title}
    </h1>
    <h3 className="font-medium tracking-wide">
      Were we let in for our <span className="text-brand-primary">aura</span>?
      No. Will we be judged by it? Yes.
    </h3>
  </div>
);

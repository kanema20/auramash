
interface SmashConfig {
  [key: string]: {
    title: string;
    navbarId: number;
    rankingTitle: string;
  };
}
export const smashconfig: SmashConfig = {
  kol: {
    title: "Facemash",
    navbarId: 1,
    rankingTitle: "CT",
  },
  celeb: {
    title: "Celebmash",
    navbarId: 2,
    rankingTitle: "Celeb",
  },
  athlete: {
    title: "Sportsmash",
    navbarId: 3,
    rankingTitle: "Athlete",
  },
};

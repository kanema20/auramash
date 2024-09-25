const probability = (leftRating: number, rightRating: number) =>
  1 / (1 + Math.pow(10, (leftRating - rightRating) / 400));

export const updateEloRating = (
  winnerRating: number,
  loserRating: number,
  k: number,
) => {
  const winnerProb = probability(loserRating, winnerRating);
  const loserProb = probability(winnerRating, loserRating);

  winnerRating += k * (1 - winnerProb);
  loserRating += k * (0 - loserProb);

  return { winnerRating, loserRating };
};

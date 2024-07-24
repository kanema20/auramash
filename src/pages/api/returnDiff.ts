// import type {NextApiRequest, NextApiResponse} from 'next'
// import Elo from '@studimax/elo';
// import prisma from '../../lib/prisma'

// type Data = {
//     message?: string
//     kolOne?: any
//     kolTwo?: any
// }

// // elo rating formula in chess
// function probability(leftRating: number, rightRating: number){
//     return 1.0*1.0/(1+1.0*Math.pow(10, 1.0*(leftRating-rightRating)/400));
//   }
  
//   function eloRating(winnerRating : number, loserRating : number, k: number, win: any){
//     let winnerProb = probability(loserRating, winnerRating); // left win probability
//     let loserProb = probability(winnerRating, loserRating); // right win probability

//     winnerRating = winnerRating + k * (1 - winnerProb); // add left rating
//     loserRating = loserRating + k * (0 - loserProb); // minus right rating

//     return { winnerRating, loserRating };
//   }

// export default async function handle(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     if (req.method != 'POST') {
//         res.status(405).json({message: 'POST method only'})
//     }
//     // const elo = new Elo();
//     // calculate elo score    
//     console.log('body', req.body)

//     const winner = req.body.left
//     const loser = req.body.right

//     console.log('winner before', winner.aurarank)
//     console.log('loser before', loser.aurarank)

//     // const {Ra, Rb} = elo.calculateRating(winner.aurarank, loser.aurarank, 1);
//     const { winnerRating, loserRating} = eloRating(winner.aurarank, loser.aurarank, 32, true);

//     console.log('Ra', winnerRating)
//     console.log('Rb', loserRating)

//     // update elo rankings
//     const winnerResult = await prisma.kOL.update({
//         where: { 
//             id: winner.id,
//         },
//         data: {
//             aurarank: winnerRating,
//             wins: winner.wins + 1
//         },
//       })

//       const loserResult = await prisma.kOL.update({
//         where: { 
//             id: loser.id,
//         },
//         data: {
//             aurarank: loserRating
//         },
//       })

//       const kols = await prisma.kOL.findMany({
//         where: {
//             aurarank: {
//                 gte: 1
//             }
//         }
//     })

//     const winnerKOL = await prisma.kOL.findUnique({
//         where: {
//             id: winner.id
//         }
//     })
//     console.log('winnerResult', winnerResult)
//     console.log('loserResult', loserResult)

//     const shuffled = kols.sort(() => 0.5 - Math.random());
//     let randomlySelected = shuffled.slice(0, 1);
//     res.status(200).json({kolOne: winnerKOL, kolTwo: randomlySelected[0]})

//     // db.find({},  (err: any, docs: KOL[]) => {
//     //     const shuffled = docs.sort(() => 0.5 - Math.random());
//     //     let selected = shuffled.slice(0, 2);
//     // })
// }
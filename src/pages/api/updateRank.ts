import type {NextApiRequest, NextApiResponse} from 'next'
import Elo from '@studimax/elo';
import prisma from '../../lib/prisma'

type Data = {
    message?: string
    kolOne?: any
    kolTwo?: any
}

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method != 'POST') {
        res.status(405).json({message: 'POST method only'})
    }
    const elo = new Elo();
    // calculate elo score    
    console.log('body', req.body)

    const winner = req.body.winner
    const loser = req.body.loser

    const {Ra, Rb} = elo.calculateRating(winner.aurarank, loser.aurarank, 1);

    console.log('Ra', Ra)
    console.log('Rb', Rb)

    // update elo rankings
    const winnerResult = await prisma.kOL.update({
        where: { 
            id: winner.id,
        },
        data: {
            aurarank: Ra
        },
      })

      const loserResult = await prisma.kOL.update({
        where: { 
            id: loser.id,
        },
        data: {
            aurarank: Rb
        },
      })

      const kols = await prisma.kOL.findMany({
        where: {
            aurarank: {
                gte: 1
            }
        }
    })
    console.log('winnerResult', winnerResult)
    console.log('loserResult', loserResult)

    const shuffled = kols.sort(() => 0.5 - Math.random());
    let randomlySelected = shuffled.slice(0, 1);  
    res.status(200).json({kolOne: winner, kolTwo: randomlySelected[0]})

    // db.find({},  (err: any, docs: KOL[]) => {
    //     const shuffled = docs.sort(() => 0.5 - Math.random());
    //     let selected = shuffled.slice(0, 2);
    // })
}
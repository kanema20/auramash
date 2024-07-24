import type {NextApiRequest, NextApiResponse} from 'next'
import Elo from '@studimax/elo';
import prisma from '../../lib/prisma'

type Data = {
    message?: string
    left?: any
    right?: any
}


export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method != 'POST') {
        res.status(405).json({message: 'POST method only'})
    }
    // const elo = new Elo();
    // calculate elo score    
    console.log('body', req.body)

    const left = req.body.left
    const right = req.body.right

    console.log('left rank', left.aurarank)
    console.log('right rank', right.aurarank)

    res.status(200).json({left: left.aurarank, right: right.aurarank})

    // db.find({},  (err: any, docs: KOL[]) => {
    //     const shuffled = docs.sort(() => 0.5 - Math.random());
    //     let selected = shuffled.slice(0, 2);
    // })
}
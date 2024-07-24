import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const kols = await prisma.kOL.findMany({
        where: {
            category: "CELEB"
        }
    })
    return res.json(kols)
}
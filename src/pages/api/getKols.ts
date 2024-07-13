import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const kols = await prisma.kolCollection.findMany({
        where: {
            aurarank: {
                gte: 1
            }
        }
    })
    return res.json(kols)
}
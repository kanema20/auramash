import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/updateLeaderboard
// Required fields in body: handle, aurarank

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result = await prisma.kolCollection.update({
    data: {
      ...req.body,
    },
  })
  return res.status(201).json(result)
}
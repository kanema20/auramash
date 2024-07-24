import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    console.log(`deleting rows schema ...`)

    await prisma.kOL.deleteMany({
        where: {
            aurarank: 1000
        },
        // data: {
        //     wins: 0,
        // }
    })

    console.log(`update finished.`)
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
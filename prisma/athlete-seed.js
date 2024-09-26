import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Celeb JSON array to seed
const athleteData = []
async function main() {
    console.log(`Start seeding ...`)
    for (const u of athleteData) {
      const duplicate = await prisma.kOL.findFirst({
          where: { pfp: u.pfp },
        });
  
      if (!duplicate) {
          const kol = await prisma.kOL.create({
              data: u,
              })
              console.log(`Created kol with id: ${kol.id}`)
      } else {
          console.log("Duplicate found - skipping")
      }
    }
    console.log(`Seeding finished.`)
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
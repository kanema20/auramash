import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const seedCounter = [
    {
        "address": "Fch7Yxjuf25TgSjKcY6JQcgKquP2bjRzNzJAf3J3iYcW",
        "count": 1903,
    },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of seedCounter) {
    const duplicate = await prisma.counter.findFirst({
        where: { handle: u.handle },
      });

    if (!duplicate) {
        const _counter = await prisma.counter.create({
            data: u,
            })
            console.log(`Created counter entry with id: ${_counter.id}`)
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
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

enum Category {
    CELEB,
    ATHLETE,
    ACTOR,
    CRYPTO,
    MOVIES,
}

const kolData: Prisma.KOLCreateInput[] = 
[
    {
        handle: "SexyyRed314_",
        aurarank: 1000,
        pfp: "@SexyyRed314_.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "aeyakovenko",
        aurarank: 1000,
        pfp: "@aeyakovenko.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "blknoiz06 ",
        aurarank: 1000,
        pfp: "@blknoiz06 .jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "IcedKnife",
        aurarank: 1000,
        pfp: "@IcedKnife.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "JoeBiden",
        aurarank: 1000,
        pfp: "@JoeBiden.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "frankdegods",
        aurarank: 1000,
        pfp: "@frankdegods.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "SCHIZO_FREQ",
        aurarank: 1000,
        pfp: "@SCHIZO_FREQ.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "brian_armstrong",
        aurarank: 1000,
        pfp: "@brian_armstrong.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "digitalartchick",
        aurarank: 1000,
        pfp: "@digitalartchick.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "weremeow",
        aurarank: 1000,
        pfp: "@weremeow.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "VitalikButerin",
        aurarank: 1000,
        pfp: "@VitalikButerin.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "blknoiz06",
        aurarank: 1000,
        pfp: "@blknoiz06.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "AJ__912",
        aurarank: 1000,
        pfp: "@AJ__912.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "kmoney_69",
        aurarank: 1000,
        pfp: "@kmoney_69.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "jasonderulo",
        aurarank: 1000,
        pfp: "@jasonderulo.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "BARRONTRUMP",
        aurarank: 1000,
        pfp: "@BARRONTRUMP.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "muzzyvermillion",
        aurarank: 1000,
        pfp: "@muzzyvermillion.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Dior100x",
        aurarank: 1000,
        pfp: "@Dior100x.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "artsch00lreject",
        aurarank: 1000,
        pfp: "@artsch00lreject.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "DeeZe",
        aurarank: 1000,
        pfp: "@DeeZe.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "SBF_FTX",
        aurarank: 1000,
        pfp: "@SBF_FTX.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "sherlock_hodles",
        aurarank: 1000,
        pfp: "@sherlock_hodles.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "DanBilzerian",
        aurarank: 1000,
        pfp: "@DanBilzerian.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "elonmusk",
        aurarank: 1000,
        pfp: "@elonmusk.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "IGGYAZALEA",
        aurarank: 1000,
        pfp: "@IGGYAZALEA.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "realDonaldTrump",
        aurarank: 1000,
        pfp: "@realDonaldTrump.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "MartinShkreli",
        aurarank: 1000,
        pfp: "@MartinShkreli.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "CharlotteFang77",
        aurarank: 1000,
        pfp: "@CharlotteFang77.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "inversebrah",
        aurarank: 1000,
        pfp: "@inversebrah.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "a1lon9",
        aurarank: 1000,
        pfp: "@a1lon9.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "StevenAscher",
        aurarank: 1000,
        pfp: "@StevenAscher.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "shahh",
        aurarank: 1000,
        pfp: "@shahh.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "richthekid",
        aurarank: 1000,
        pfp: "@richthekid.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "tier10k",
        aurarank: 1000,
        pfp: "@tier10k.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "patty_fi",
        aurarank: 1000,
        pfp: "@patty_fi.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "rasmr_eth",
        aurarank: 1000,
        pfp: "@rasmr_eth.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Caitlyn_Jenner",
        aurarank: 1000,
        pfp: "@Caitlyn_Jenner.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Matt_Furie ",
        aurarank: 1000,
        pfp: "@Matt_Furie .jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "zhusu",
        aurarank: 1000,
        pfp: "@zhusu.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "davido",
        aurarank: 1000,
        pfp: "@davido.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "justinsuntron",
        aurarank: 1000,
        pfp: "@justinsuntron.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "crypto_bitlord7",
        aurarank: 1000,
        pfp: "@crypto_bitlord7.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "LucaNetz",
        aurarank: 1000,
        pfp: "@LucaNetz.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "mikadontlouz",
        aurarank: 1000,
        pfp: "@mikadontlouz.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "0xgaut",
        aurarank: 1000,
        pfp: "@0xgaut.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Evan_ss6",
        aurarank: 1000,
        pfp: "@Evan_ss6.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "3orovik",
        aurarank: 1000,
        pfp: "@3orovik.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "xbtGBH ",
        aurarank: 1000,
        pfp: "@xbtGBH .jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "RyanGarcia",
        aurarank: 1000,
        pfp: "@RyanGarcia.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "souljaboy",
        aurarank: 1000,
        pfp: "@souljaboy.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Banks",
        aurarank: 1000,
        pfp: "@Banks.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "greg16676935420",
        aurarank: 1000,
        pfp: "@greg16676935420.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "The__Solstice",
        aurarank: 1000,
        pfp: "@The__Solstice.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "0xMert_",
        aurarank: 1000,
        pfp: "@0xMert_.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "wallstreetbets",
        aurarank: 1000,
        pfp: "@wallstreetbets.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Catolicc",
        aurarank: 1000,
        pfp: "@Catolicc.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "vydamo_",
        aurarank: 1000,
        pfp: "@vydamo_.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "lilpump",
        aurarank: 1000,
        pfp: "@lilpump.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "saylor",
        aurarank: 1000,
        pfp: "@saylor.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "degenharambe",
        aurarank: 1000,
        pfp: "@degenharambe.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "underc0verwhale",
        aurarank: 1000,
        pfp: "@underc0verwhale.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Palgrani2 ",
        aurarank: 1000,
        pfp: "@Palgrani2 .jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "notthreadguy ",
        aurarank: 1000,
        pfp: "@notthreadguy .jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "jenndefer",
        aurarank: 1000,
        pfp: "@jenndefer.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "MaisonGhost",
        aurarank: 1000,
        pfp: "@MaisonGhost.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "basedkarbon",
        aurarank: 1000,
        pfp: "@basedkarbon.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Cobratate",
        aurarank: 1000,
        pfp: "@Cobratate.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "trading_axe",
        aurarank: 1000,
        pfp: "@trading_axe.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Pauly0x",
        aurarank: 1000,
        pfp: "@Pauly0x.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "TheMisterFrog",
        aurarank: 1000,
        pfp: "@TheMisterFrog.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "boldleonidas",
        aurarank: 1000,
        pfp: "@boldleonidas.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "baalazamon",
        aurarank: 1000,
        pfp: "@baalazamon.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "blockgraze",
        aurarank: 1000,
        pfp: "@blockgraze.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "0xprerich",
        aurarank: 1000,
        pfp: "@0xprerich.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "knveth",
        aurarank: 1000,
        pfp: "@knveth.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "LoganPaul",
        aurarank: 1000,
        pfp: "@LoganPaul.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "stablekwon",
        aurarank: 1000,
        pfp: "@stablekwon.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "wizardofsoho",
        aurarank: 1000,
        pfp: "@wizardofsoho.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "FreeWillyAlpha",
        aurarank: 1000,
        pfp: "@FreeWillyAlpha.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "sydney_sweeney",
        aurarank: 1000,
        pfp: "@sydney_sweeney.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "wrld_sol ",
        aurarank: 1000,
        pfp: "@wrld_sol .jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "DonaldJTrumpJr",
        aurarank: 1000,
        pfp: "@DonaldJTrumpJr.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "TateTheTalisman",
        aurarank: 1000,
        pfp: "@TateTheTalisman.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "GiganticRebirth",
        aurarank: 1000,
        pfp: "@GiganticRebirth.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "cz_binance",
        aurarank: 1000,
        pfp: "@cz_binance.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "KookCapitalLLC",
        aurarank: 1000,
        pfp: "@KookCapitalLLC.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "cobie",
        aurarank: 1000,
        pfp: "@cobie.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "Hustletiips",
        aurarank: 1000,
        pfp: "@Hustletiips.jpeg",
        category: Category.CRYPTO
    },
    {
        handle: "based16z",
        aurarank: 1000,
        pfp: "@based16z.jpeg",
        category: Category.CRYPTO
    }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of kolData) {
    const kol = await prisma.kolCollection.create({
      data: u,
    })
    console.log(`Created kol with id: ${kol.id}`)
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
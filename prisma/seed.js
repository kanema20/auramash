import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

// enum Category {
//     CELEB,
//     ATHLETE,
//     ACTOR,
//     CRYPTO,
//     MOVIES,
// }

const kolData = 
[
    {
        handle: "SexyyRed314_",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40SexyyRed314_.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "aeyakovenko",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40aeyakovenko.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "blknoiz06 ",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40blknoiz06 .jpeg",
        category: "CRYPTO"
    },
    {
        handle: "IcedKnife",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40IcedKnife.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "JoeBiden",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40JoeBiden.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "frankdegods",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40frankdegods.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "SCHIZO_FREQ",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40SCHIZO_FREQ.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "brian_armstrong",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40brian_armstrong.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "digitalartchick",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40digitalartchick.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "weremeow",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40weremeow.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "VitalikButerin",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40VitalikButerin.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "blknoiz06",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40blknoiz06.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "AJ__912",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40AJ__912.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "kmoney_69",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40kmoney_69.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "jasonderulo",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40jasonderulo.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "BARRONTRUMP",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40BARRONTRUMP.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "muzzyvermillion",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40muzzyvermillion.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Dior100x",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Dior100x.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "artsch00lreject",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40artsch00lreject.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "DeeZe",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40DeeZe.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "SBF_FTX",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40SBF_FTX.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "sherlock_hodles",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40sherlock_hodles.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "DanBilzerian",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40DanBilzerian.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "elonmusk",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40elonmusk.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "IGGYAZALEA",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40IGGYAZALEA.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "realDonaldTrump",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40realDonaldTrump.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "MartinShkreli",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40MartinShkreli.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "CharlotteFang77",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40CharlotteFang77.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "inversebrah",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40inversebrah.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "a1lon9",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40a1lon9.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "StevenAscher",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40StevenAscher.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "shahh",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40shahh.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "richthekid",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40richthekid.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "tier10k",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40tier10k.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "patty_fi",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40patty_fi.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "rasmr_eth",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40rasmr_eth.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Caitlyn_Jenner",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Caitlyn_Jenner.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Matt_Furie ",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Matt_Furie .jpeg",
        category: "CRYPTO"
    },
    {
        handle: "zhusu",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40zhusu.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "davido",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40davido.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "justinsuntron",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40justinsuntron.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "crypto_bitlord7",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40crypto_bitlord7.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "LucaNetz",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40LucaNetz.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "mikadontlouz",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40mikadontlouz.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "0xgaut",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%400xgaut.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Evan_ss6",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Evan_ss6.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "3orovik",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%403orovik.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "xbtGBH ",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40xbtGBH .jpeg",
        category: "CRYPTO"
    },
    {
        handle: "RyanGarcia",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40RyanGarcia.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "souljaboy",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40souljaboy.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Banks",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Banks.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "greg16676935420",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40greg16676935420.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "The__Solstice",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40The__Solstice.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "0xMert_",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%400xMert_.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "wallstreetbets",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40wallstreetbets.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Catolicc",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Catolicc.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "vydamo_",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40vydamo_.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "lilpump",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40lilpump.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "saylor",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40saylor.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "degenharambe",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40degenharambe.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "underc0verwhale",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40underc0verwhale.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Palgrani2 ",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Palgrani2 .jpeg",
        category: "CRYPTO"
    },
    {
        handle: "notthreadguy ",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40notthreadguy .jpeg",
        category: "CRYPTO"
    },
    {
        handle: "jenndefer",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40jenndefer.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "MaisonGhost",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40MaisonGhost.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "basedkarbon",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40basedkarbon.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Cobratate",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Cobratate.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "trading_axe",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40trading_axe.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Pauly0x",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Pauly0x.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "TheMisterFrog",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40TheMisterFrog.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "boldleonidas",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40boldleonidas.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "baalazamon",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40baalazamon.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "blockgraze",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40blockgraze.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "0xprerich",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%400xprerich.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "knveth",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40knveth.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "LoganPaul",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40LoganPaul.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "stablekwon",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40stablekwon.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "wizardofsoho",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40wizardofsoho.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "FreeWillyAlpha",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40FreeWillyAlpha.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "sydney_sweeney",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40sydney_sweeney.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "wrld_sol ",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40wrld_sol .jpeg",
        category: "CRYPTO"
    },
    {
        handle: "DonaldJTrumpJr",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40DonaldJTrumpJr.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "TateTheTalisman",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40TateTheTalisman.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "GiganticRebirth",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40GiganticRebirth.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "cz_binance",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40cz_binance.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "KookCapitalLLC",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40KookCapitalLLC.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "cobie",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40cobie.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "Hustletiips",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40Hustletiips.jpeg",
        category: "CRYPTO"
    },
    {
        handle: "based16z",
        aurarank: 1000,
        pfp: "https://raw.githubusercontent.com/miraisan1/auramashers/main/ct/%40based16z.jpeg",
        category: "CRYPTO"
    }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of kolData) {
    const kol = await prisma.kOL.create({
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
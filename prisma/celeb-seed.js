import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Celeb JSON array to seed
const celebData = [
    {
        "handle": "jonah_hilll",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40jonah_hilll.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "joerogan",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40joerogan.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "SugaSeanMMA",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40SugaSeanMMA.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Schwarzenegger",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Schwarzenegger.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BarackObama",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BarackObama.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "RickRoss",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40RickRoss.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Drake",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Drake.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "dixiedamelio",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40dixiedamelio.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "TheNotoriousMMA",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40TheNotoriousMMA.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KaitlinOlson",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KaitlinOlson.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "DavidDobrik",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40DavidDobrik.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "taylorswift13",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40taylorswift13.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "NellyFurtado",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40NellyFurtado.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "sydney_sweeney",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40sydney_sweeney.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "vinijr",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40vinijr.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "LacyHimself",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40LacyHimself.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "iambeckyg",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40iambeckyg.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "SamuelLJackson",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40SamuelLJackson.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "ShawnMendes",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40ShawnMendes.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "jtimberlake",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40jtimberlake.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "selenagomez",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40selenagomez.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "SilkySzn",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40SilkySzn.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "joejonas",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40joejonas.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "kaysan",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40kaysan.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "markwahlberg",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40markwahlberg.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BillAckman",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BillAckman.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "EllenDeGeneres",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40EllenDeGeneres.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "DannyDeVito",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40DannyDeVito.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "danawhite",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40danawhite.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Replays",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Replays.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "MorganWallen",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40MorganWallen.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "kevinbacon",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40kevinbacon.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "narendramodi",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40narendramodi.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "kendricklamar",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40kendricklamar.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "jimmyfallon",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40jimmyfallon.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "miakhalifa",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40miakhalifa.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "MariahCarey",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40MariahCarey.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Temperrr",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Temperrr.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "wizkhalifa",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40wizkhalifa.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "OzzyOsbourne",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40OzzyOsbourne.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "jimmykimmel",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40jimmykimmel.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BigBoi",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BigBoi.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "charlidamelio",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40charlidamelio.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "AOC",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40AOC.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "TeamKhabib",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40TeamKhabib.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "JamesFrancoPrvt",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40JamesFrancoPrvt.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "jeffwittek",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40jeffwittek.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "prattprattpratt",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40prattprattpratt.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "elonmusk",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40elonmusk.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "IGGYAZALEA",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40IGGYAZALEA.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "YourRAGEz",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40YourRAGEz.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "StephenCurry30",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40StephenCurry30.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "MileyCyrus",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40MileyCyrus.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "CP3",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40CP3.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Eminem",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Eminem.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "neymarjr",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40neymarjr.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "DwyaneWade",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40DwyaneWade.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "khloekardashian",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40khloekardashian.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KDTrey5",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KDTrey5.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KSI",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KSI.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "britneyspears",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40britneyspears.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "ladygaga",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40ladygaga.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "SnoopDogg",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40SnoopDogg.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "jasontheween",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40jasontheween.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "icecube",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40icecube.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "nickjonas",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40nickjonas.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "hitRECordJoe",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40hitRECordJoe.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Swagg",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Swagg.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BryanCranston",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BryanCranston.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "RobertKennedyJr",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40RobertKennedyJr.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "tim_cook",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40tim_cook.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "DanBilzerian",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40DanBilzerian.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KimKardashian",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KimKardashian.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "TomBrady",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40TomBrady.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "larray",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40larray.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "youngthug",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40youngthug.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "aliciakeys",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40aliciakeys.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "AaronRodgers12",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40AaronRodgers12.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "SethMacFarlane",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40SethMacFarlane.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "PostMalone",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40PostMalone.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "chrisbrown",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40chrisbrown.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "RealHughJackman",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40RealHughJackman.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "ZacEfron",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40ZacEfron.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "NateDiaz209",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40NateDiaz209.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "coldplay",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40coldplay.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "shakira",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40shakira.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "pamelaanderson",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40pamelaanderson.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "VancityReynolds",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40VancityReynolds.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Slash",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Slash.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "DUALIPA",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40DUALIPA.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "JanetJackson",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40JanetJackson.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BenStiller",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BenStiller.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "kellyclarkson",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40kellyclarkson.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KevinHart4real",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KevinHart4real.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "AnnaKendrick47",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40AnnaKendrick47.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "noahbeck",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40noahbeck.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Banks",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Banks.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Adele",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Adele.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "trvisXX",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40trvisXX.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BrunoMars",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BrunoMars.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "MichelleObama",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40MichelleObama.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "MikeTyson",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40MikeTyson.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "adinross",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40adinross.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "lindsaylohan",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40lindsaylohan.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "ZooMaa",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40ZooMaa.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "JLo",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40JLo.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "TomCruise",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40TomCruise.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "plaqueboymax",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40plaqueboymax.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KylieJenner",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KylieJenner.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "toddchrisley",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40toddchrisley.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "PetesWeed",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40PetesWeed.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "50cent",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%4050cent.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "QuavoStuntin",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40QuavoStuntin.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KrisJenner",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KrisJenner.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "StableRonaldo",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40StableRonaldo.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "CorinnaKopf",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40CorinnaKopf.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "TuckerCarlson",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40TuckerCarlson.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "katyperry",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40katyperry.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "JessicaSimpson",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40JessicaSimpson.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "xtina",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40xtina.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "PatrickMahomes",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40PatrickMahomes.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Cobratate",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Cobratate.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Will___Ferrell",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Will___Ferrell.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "FaZeAdapt",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40FaZeAdapt.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "madisonbeer",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40madisonbeer.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "stoolpresidente",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40stoolpresidente.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BillGates",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BillGates.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "realDonaldTrump",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40realDonaldTrump.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "MrsSOsbourne",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40MrsSOsbourne.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "ParisHilton",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40ParisHilton.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "iamcardib",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40iamcardib.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "officialaniston",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40officialaniston.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "NICKIMINAJ",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40NICKIMINAJ.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "rihanna",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40rihanna.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Haileywelch_23",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Haileywelch_23.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "FaZeScope",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40FaZeScope.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "edsheeran",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40edsheeran.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "ErlingHaaland",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40ErlingHaaland.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "JadenHossler",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40JadenHossler.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Tip",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Tip.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "EvaLongoria",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40EvaLongoria.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "LoganPaul",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40LoganPaul.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "JHarden13",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40JHarden13.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "kobebryant",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40kobebryant.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "nessabarrett",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40nessabarrett.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Sethrogen",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Sethrogen.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "SHAQ",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40SHAQ.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "FaZeApex",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40FaZeApex.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BernieSanders",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BernieSanders.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "jakepaul",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40jakepaul.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "chrishemsworth",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40chrishemsworth.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "AdamSandler",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40AdamSandler.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "carmeloanthony",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40carmeloanthony.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KingJames",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KingJames.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "jimcramer",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40jimcramer.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Ludacris",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Ludacris.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "McConaughey",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40McConaughey.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "Cristiano",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40Cristiano.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BustaRhymes",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BustaRhymes.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "MrBeast",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40MrBeast.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "ConanOBrien",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40ConanOBrien.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "RyanGarcia",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40RyanGarcia.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "FaZeRug",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40FaZeRug.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "channingtatum",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40channingtatum.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "zaynmalik",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40zaynmalik.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "KamalaHarris",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40KamalaHarris.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "justinbieber",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40justinbieber.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "BryceHall",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40BryceHall.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "tkelce",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40tkelce.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "TateTheTalisman",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40TateTheTalisman.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "whoisaddison",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40whoisaddison.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "hwinkler4real",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40hwinkler4real.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "JeremyRenner",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40JeremyRenner.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "TheRock",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40TheRock.jpeg",
        "category": "CELEB"
    },
    {
        "handle": "MarkRuffalo",
        "aurarank": 1000,
        "pfp": "https://raw.githubusercontent.com/miraisan1/auramashers/main/celebs/%40MarkRuffalo.jpeg",
        "category": "CELEB"
    }
]
async function main() {
    console.log(`Start seeding ...`)
    for (const u of celebData) {
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
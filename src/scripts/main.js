// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 5, 7)

let platter = makePottery("Platter", 3, 1)

let vase = makePottery("Vase", 12, 16)

let bowl = makePottery("Bowl", 8, 4)

let pitcher = makePottery("Pitcher", 14, 12)
// console.log(pitcher)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1900)

let firedPlatter = firePottery(platter, 1800)

let firedVase = firePottery(vase, 1800)

let firedBowl = firePottery(bowl, 1950)

let firedPitcher = firePottery(pitcher, 2300)
// console.log(firedPitcher)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)

toSellOrNotToSell(firedPlatter)

toSellOrNotToSell(firedVase)

toSellOrNotToSell(firedBowl)

toSellOrNotToSell(firedPitcher)

console.log(usePottery())

// Invoke the component function that renders the HTML list


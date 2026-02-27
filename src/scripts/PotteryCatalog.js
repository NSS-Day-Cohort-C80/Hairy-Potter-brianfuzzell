const potteryForSale = [];

export const toSellOrNotToSell = (piece) => {
  
  if (piece.cracked === false){
    if (piece.weight >= 6) {
      piece.price = 40;
    }
    else {
      piece.price = 20;
    }
    potteryForSale.push(piece);
  }
 
};

// usePottery is a deep copy of potteryForSale
export function usePottery() {
  return structuredClone(potteryForSale);
}

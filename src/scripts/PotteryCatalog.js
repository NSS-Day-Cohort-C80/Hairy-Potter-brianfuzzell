const potteryForSale = [];

export const toSellOrNotToSell = (piece) => {
  if (piece.weight >= 6 && piece.cracked === false) {
    piece.price = 40;
  }
  if (piece.weight < 6 && piece.cracked === false) {
    piece.price = 20;
  }
  if (piece.cracked === false) {
    potteryForSale.push(piece);
  }

  return piece;
};

// usePottery is a deep copy of potteryForSale
export function usePottery() {
  return structuredClone(potteryForSale);
}

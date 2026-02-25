import { usePottery } from "./PotteryCatalog.js";

export const PotteryList = () => {
  let itemsForSale = usePottery();
  let potteryHTML = "";

  for (const pottery of itemsForSale) {
    potteryHTML += `
        <section class="pottery" id="pottery--1">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                <p>Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height</p>
            </div>
            <div class="pottery__price">
                <p>Price is $${pottery.price}</p>
            </div>
        </section>
    `;
  }

  return potteryHTML;
};

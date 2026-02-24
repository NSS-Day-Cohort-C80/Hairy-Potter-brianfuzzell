
let potteryId = 1;

// The `makePottery` function must: 
//      accept the following values as input 
//      return an object with the following properties on it.
export const makePottery = (shape, weight, height) => {
  const pottery = {
    shape: shape,
    weight: weight,
    height: height,
    id: potteryId++,
  };

  return pottery;
};

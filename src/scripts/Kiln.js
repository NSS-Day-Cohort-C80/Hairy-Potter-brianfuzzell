export const firePottery = (pottery, temperature) => {
    // See Readme.md lines 43-54
    // Func must add a new property of `fired` with the value of `true` to the object.
    // Func must add a new property of `cracked` to the object.
    
    pottery.fired = true;

    if (temperature > 2200) {
        pottery.cracked = true;
    } 
    else {
        pottery.cracked = false;
    }

    return pottery
}
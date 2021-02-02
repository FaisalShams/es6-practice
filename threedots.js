const age1 = [14, 15, 18, 21];
const age2 = [22, 20, 24, 17];
const age3 = [35, 31, 30, 27];
const allAges = [...age1, ...age2, 5, ...age3];
//console.log(allAges);

const takaPoisa = [650, 880, 1220, 221, 120];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
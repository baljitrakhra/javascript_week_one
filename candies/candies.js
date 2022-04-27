const candies = [
  { name: "Aero", price: 1.99 },
  { name: "Skitties", price: 2.99 },
  { name: "Mars", price: 1.49 },
  { name: "Maltesers", price: 3.49 },
  { name: "Skittles", price: 1.49 },
  { name: "Starburst", price: 5.99 },
  { name: "Ricola", price: 1.99 },
  { name: "Polkagris", price: 5.99 },
  { name: "Pastila", price: 4.99 },
  { name: "Mentos", price: 8.99 },
  { name: "Raffaello", price: 7.99 },
  { name: "Gummi bears", price: 10.99 },
  { name: "Fraise Tagada", price: 5.99 },
];

const searchCandies = (prefix, price) => {
  let prefix1 = 0;
  let prefix2 = 0;
  prefix1 = prefix.split("")[0];
  prefix2 = prefix.split("")[1];
  if (prefix2 === undefined) {
    return candies
      .filter(
        (candy) =>
          candy.price < price &&
          candy.name.split("")[0] === prefix1.toUpperCase()
      )
      .map((candy) => `${candy.name}`);
    console.log(candies);
  } else {
    return candies
      .filter(
        (candy) =>
          candy.price < price &&
          candy.name.split("")[0] === prefix1.toUpperCase() &&
          candy.name.split("")[1] === prefix2
      )
      .map((candy) => `${candy.name}`);
  }
};

module.exports = searchCandies;

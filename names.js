const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (array) => {
  return `Hi ${array}! 50% off our best candies for you today`;
}

const welcomeMessage = names.map(generateMessages);
const welcomeMessage1 = names.map((name) => `Hi ${name}! 50% off our best candies for you today`)

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages1 = namesAndDiscounts.map(person =>{
return `Hi ${person.name}! ${person.discount}% off our best candies for you today`})
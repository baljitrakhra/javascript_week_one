const checkLength = (number) => {
  if (number.length <= 10) {
    return true
  } else {
    return false
  }
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const filterLongNumbers = numbers.filter(checkLength);

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessage = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
}

const generateMessages = names.map(generateMessage);

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];

const generateMessage = (name, discount) => {
  return `Hi ${name}! ${discount}% off our best candies for you today!`;
}

const generateMessages = namesAndDiscounts.map(person => {
  return generateMessage(person.name, person.discount)
});

console.log(generateMessages);
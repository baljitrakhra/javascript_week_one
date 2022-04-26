const getNumberSign = (number) => {
  if (number > 0){
    return 'positive';
  } else if (number < 0){
    return 'negative'
  } else {
    return 'zero'
  }
}

module.exports = getNumberSign;

const checkLength = (number) => {
  if (number.length <= 10) {
    return true
  } else {
    return false;
  }
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];


//const filterLongNumbers = numbers.filter(checkLength);
const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}
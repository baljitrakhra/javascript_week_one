const addToBatch = (array, number) =>{
  let batchArray = array
  if (batchArray.length >= 5) {
    return batchArray
  } 
  batchArray = batchArray.concat(number);
  return batchArray
}
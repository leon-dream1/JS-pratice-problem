function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }

  const numberArray = [];

  for (const item of array) {
    if (typeof item === "number" && !isNaN(item)) {
      numberArray.push(item);
    }
  }
  return numberArray;
}

console.log(
  deleteInvalids({num: [ 1 , 2 , 3 ]})
);

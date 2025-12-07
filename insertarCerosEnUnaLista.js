function insertZeroAfterEven(numList) {
  let resultList = [];
  
  numList.forEach(function(item) {
    this.push(item);
    if (item % 2 === 0)
      this.push(0);
  }, resultList);
  
  return resultList;
}

const originalList = [1, 2, 3, 4, 5];
console.log(insertZeroAfterEven(originalList)); 
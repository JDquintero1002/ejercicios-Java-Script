function canSubsetSumDP(numList, targetSum) {
  if (numList.length === 0)
    return false;
  if (numList.includes(targetSum))
    return true;

  let dpTable = new Array();
  let subList = new Array();
  let listIdx = 0;
  
  let exists = false;
  
  do {
    dpTable[listIdx] = [];    
    subList.push(numList[listIdx]);
    
    for (let currentSum = 0; currentSum <= targetSum; currentSum++) {
      dpTable[listIdx][currentSum] = subList.includes(currentSum);
      
      if (!dpTable[listIdx][currentSum] && listIdx > 0) {
        if (numList[listIdx - 1] > currentSum) {
          dpTable[listIdx][currentSum] = dpTable[listIdx - 1][currentSum];
        } else {
          dpTable[listIdx][currentSum] = dpTable[listIdx - 1][currentSum - numList[listIdx - 1]];
        }
      }    
    }
    
    exists = dpTable[listIdx][targetSum];
    listIdx++;
    
  } while (listIdx <= numList.length && !exists);

  console.table(dpTable);
  return exists;
}  

let numbers = [1, 1, 5, 4];
console.table(numbers);
console.log(canSubsetSumDP(numbers, 2));
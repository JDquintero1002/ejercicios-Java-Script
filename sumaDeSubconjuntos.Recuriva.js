function canSubsetSum(numList, targetSum) {
  if (numList.length === 0)
    return false;
  if (numList.includes(targetSum))
    return true;
    
  let lastVal = numList.pop();
  
  if (targetSum > lastVal)
    return canSubsetSum(numList, targetSum - lastVal);
  else
    return canSubsetSum(numList, targetSum);
}  

let numbers = [1, 1, 5, 4];
let sum = 3;
console.table(numbers);
console.log(sum);
console.log(canSubsetSum(numbers, sum));
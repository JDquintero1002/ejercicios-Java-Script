function removeCharAtIndex(inputStr, index) {
  let charArray = inputStr.split('');
  charArray.splice(index, 1);
  return charArray.join('');
}
    
function calculatePerms(inputStr) {
  if (inputStr.length === 1) {
    return [inputStr];
  }
  
  let permutations, resultArr = [];
  
  for (let i = 0; i < inputStr.length; i++) {
    permutations = calculatePerms(removeCharAtIndex(inputStr, i));
    
    permutations = permutations.map(function(val) { 
      return this + val; 
    }, inputStr[i]); 
    
    resultArr = resultArr.concat(permutations);
  }
  
  resultArr = Array.from(new Set(resultArr));
  return resultArr;
}

console.log(calculatePerms("abc")); 



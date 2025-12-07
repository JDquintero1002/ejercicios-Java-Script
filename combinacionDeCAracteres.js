function getCombinations(charList, num) {
  let finalResult;
  let subResult;
  
  if (num === 1) {
    finalResult = charList.split('');
  } else {
    let combinations = [];
    
    for (let i = 0; i < charList.length - num + 1; i++) {
      let char = charList[i];
      
      subResult = getCombinations(charList.substring(i + 1), num - 1);
      
      subResult = subResult.map(function(val) { 
        return this + val; 
      }, char);
      
      combinations.push(subResult);
    }
    
    finalResult = combinations.flat();
  }
  return finalResult;
}

console.log(getCombinations("abcde", 3)); 


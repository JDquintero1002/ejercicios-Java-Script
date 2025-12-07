function checkExists(subStr, mainStr) {
  let i = 0;
  let charIndex, shouldContinue;
  
  do {
    charIndex = mainStr.indexOf(subStr[i]);
    mainStr = charIndex < 0 ? '' : mainStr.replace(mainStr[charIndex], '');
    i++;
  } while (charIndex >= 0 && i < subStr.length);
  
  return charIndex >= 0;  
}

function findMinSubstr(sampleStr, targetStr) {
  let subGroup = '',
    i = 0,
    j = 0,
    isFound, lastIndex, result = '';
    
  if (checkExists(sampleStr, targetStr) && sampleStr.length < targetStr.length) {
    lastIndex = targetStr.length - sampleStr.length;
    j = 0;
    
    do {
      i = sampleStr.length;
      do {  
        subGroup = targetStr.substring(j, j + i);
        isFound = checkExists(sampleStr, subGroup);
        i++;  
      } while (j + i <= targetStr.length + 1 && !isFound); 

      if (isFound && ((subGroup.length < result.length) || result === '')) {
        result = subGroup;
      }
      j++;
    } while (j <= lastIndex);
  }
  
  return result !== '' ? result : "No existe";
}

console.log(findMinSubstr("aae", "faedafe"));
console.log(findMinSubstr("axe", "abcdef")); 
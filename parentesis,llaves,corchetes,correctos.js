function checkBalancedSymbols(inputStr) {
  let openers = ["{", "[", "("];
  let closers = ["}", "]", ")"];
  let matches = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  
  let symbolStack = [];
  let lastSymbol;
  let errorPos, i = 0;
  
  errorPos = closers.includes(inputStr[0]) ? 0 : -1;
  
  while (i < inputStr.length && errorPos < 0) {
    if (openers.includes(inputStr[i])) {
      symbolStack.push(inputStr[i]);
    } else {
      if (closers.includes(inputStr[i])) {
        lastSymbol = symbolStack.pop();
        
        if (lastSymbol !== matches[inputStr[i]]) {
          errorPos = i;
        }
      }
    }
    i++;
  }
  
  if (errorPos < 0 && symbolStack.length > 0) {
    errorPos = inputStr.length; 
  }

  return errorPos;
}

console.log(checkBalancedSymbols("({[]})")); 
console.log(checkBalancedSymbols("{[}]"));
console.log(checkBalancedSymbols("(){}[]")); 
function calculate(numA, numB, operator) {
  let result;

  if (isNaN(numA) || isNaN(numB)) {
    result = null;
  } else {
    switch (operator) {
      case '+':
        result = numA + numB;
        break;
      case '*':
        result = numA * numB;
        break;
      case '/':
        result = numB !== 0 ? numA / numB : null;
        break;
      case '-':
        result = numA - numB;
        break;
      case '%':
        result = numB !== 0 ? numA % numB : null;
        break;
      default:
        result = null;
    }
  }
  return result;
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 0, '/')); 
console.log(calculate(10, 'a', '-')); 
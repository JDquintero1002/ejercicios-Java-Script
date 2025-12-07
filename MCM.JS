function calculateLCM(numA, numB) {
    let maxVal = Math.max(numA, numB); 
    let increment = maxVal; 

    while (maxVal % numA !== 0 || maxVal % numB !== 0) {
      maxVal += increment;
    }
    
    return maxVal;
}

console.log(calculateLCM(6, 8));
console.log(calculateLCM(7, 5));
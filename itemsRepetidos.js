function findDuplicates(numList) {
    let sortedList = numList.sort((a, b) => a - b);
    let duplicates = [];
    let i = 0;

    while (i < sortedList.length) {
      let isDuplicated = false;
      let currentValue = sortedList[i];
      let nextIndex = i + 1;
      
      if (nextIndex < sortedList.length && currentValue === sortedList[nextIndex]) {
        isDuplicated = true;
      }

      while (nextIndex < sortedList.length && currentValue === sortedList[nextIndex]) {
        nextIndex++;
      }
      
      if (isDuplicated) {
        duplicates.push(currentValue);
      }
      
      i = nextIndex;
    }
    
    return duplicates;
}

console.log(findDuplicates([1, 5, 2, 4, 5, 7, 2, 8]));
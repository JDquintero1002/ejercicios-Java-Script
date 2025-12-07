let colors = ["blanco", "verde", "rojo", "verde", "verde", "rojo", "verde", "azul"];

function countValues(valueList) {
  let frequency = {};
  
  let uniqueSet = new Set(valueList);
  let uniqueOptions = Array.from(uniqueSet);

  for (let i = 0; i < uniqueOptions.length; i++) {
    frequency[uniqueOptions[i]] = 0;
    
    for (let j = 0; j < valueList.length; j++) {
      if (valueList[j] === uniqueOptions[i]) {
        frequency[uniqueOptions[i]]++;
      }
    }
  }
  return frequency;
}

function sortFrequency(countObj) {
  let tempObj = {}; 
  let listArray = []; 
  let sortedList = [];
  
  for (let key in countObj) {
    tempObj = {};
    tempObj.name = key; 
    tempObj.value = countObj[key]; 
    listArray.push(tempObj);
  }

  listArray.sort((a, b) => a.value > b.value ? -1 : 1);
  
  sortedList = listArray.map((v, i, l) => {
    let obj = {}; 
    obj[v.name] = v.value; 
    return obj;
  });
  
  return sortedList;
}

let countResult = countValues(colors);  
let finalSortedList = sortFrequency(countResult);
console.log(finalSortedList);
function objectToArray(inputObj) {
   let results = [];
   for (let key in inputObj) {
      results.push([key, inputObj[key]]);
   }
   return results; 
}

const myObject = { name: "Juan", age: 30, city: "Madrid" };
console.log(objectToArray(myObject)); 

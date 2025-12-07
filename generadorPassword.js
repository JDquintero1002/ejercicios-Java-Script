function intRandom(minVal, maxVal) {
  let rnd = Math.random();
  return Math.floor(rnd * (maxVal - minVal + 1)) + minVal;
}

const charSets = [
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["!", "@", "#", "$", "%", "&", "*", "?", "+", "=", "-", "/", "%"]
];

function generatePassword() {
  let len = intRandom(8, 15);
  let passArr = new Array(len);
  passArr.fill('');

  passArr.forEach((v, i, p) => {
    let charSet = charSets[intRandom(0, charSets.length - 1)]; 
    let charIdx = intRandom(0, charSet.length - 1);
    
    p[i] = charSet[charIdx]; 
  })

  let password = passArr.join('');
  return password;
}

console.log(generatePassword());
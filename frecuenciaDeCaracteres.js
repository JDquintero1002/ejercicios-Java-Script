function normalizeText(text) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let accentedVowels = ['á', 'é', 'í', 'ó', 'ú'];
  let charIdx, vowelIdx;
  let normalized = '';
  text = text.toLowerCase();

  for (charIdx = 0; charIdx < text.length; charIdx++) {
    vowelIdx = accentedVowels.indexOf(text[charIdx]);
    
    if (vowelIdx >= 0) {
      normalized += vowels[vowelIdx];
    } else {
      if ((text[charIdx].match(/[a-z0-9]/i)) != null) {
        normalized += text[charIdx];
      }
    }
  }
  return normalized;
}

function countChars(text) {
  let charList = [];
  let index = 0;
  text = normalizeText(text);
  console.log(text);

  for (let c = 0; c < text.length; c++) {
    index = charList.findIndex((item) => item.char == text[c]);
    
    if (index >= 0) {
      charList[index].count++;
    } else {
      charList.push({ char: text[c], count: 1 });
    }
  }

  charList.sort((a, b) => (a.char > b.char) ? 1 : -1);
  return charList;
}

console.log(countChars("Prueba con 5 números"));
function splitPhraseReduce(phrase, maxLen) {
  let words = phrase.split(' ');
  let finalLines = words.reduce((acc, currentWord) => {
    if (acc.length == 0) {
      acc[0] = currentWord;
    } else {
      let lastLine = acc[acc.length - 1];
      if (lastLine.length + currentWord.length < maxLen) {
        acc[acc.length - 1] += ' ' + currentWord;
      } else {
        acc.push(currentWord);
      }
    }
    return acc;
  }, []);
  return finalLines;
}

const testPhrase = "ejemplo de para demostrar como se divide el texto, já.";

console.log(splitPhraseReduce(testPhrase, 20));
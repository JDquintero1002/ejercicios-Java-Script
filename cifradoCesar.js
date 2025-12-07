function encryptCaesar(phrase, key) { 
    let char, result = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let cipheredAlpha = alphabet.slice(-key);
    cipheredAlpha += alphabet.slice(0, alphabet.length - key);
    
    for (let i = 0; i < phrase.length; i++) {  
        char = phrase[i].toLowerCase();
        
        if (char === ' ') {
            char = ' ';
        } else {
            char = cipheredAlpha[alphabet.indexOf(char)];
        }
        result += char;
    }
    return result;
}

function decryptCaesar(phrase, key) { 
    let char, result = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let cipheredAlpha = alphabet.slice(-key);
    cipheredAlpha += alphabet.slice(0, alphabet.length - key);
    
    for (let i = 0; i < phrase.length; i++) { 
        char = phrase[i].toLowerCase();
        
        if (char === ' ') {
            char = ' ';
        } else {
            char = alphabet[cipheredAlpha.indexOf(char)];
        }
        result += char;
    }
    return result;
}

const message = "jajajaj comida";
const key = 3;
const encrypted = encryptCaesar(message, key);
console.log("Cifrado:", encrypted);
console.log("Descifrado:", decryptCaesar(encrypted, key));
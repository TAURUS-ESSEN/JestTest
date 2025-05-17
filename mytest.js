'use strict';
function getStr(str) {
    return str[0].toUpperCase()+str.slice(1);
}
// module.exports = getStr;

function reverseString(string) {
    return string.split("").reverse().join("")
}

// module.exports = reverseString;

const calculator = {
    add: function (a,b) {
        return a+b
    },

    subtract: function (a,b) {
        return a-b
    },

    divide: function (a,b) {
        return a / b
    },

    multiply: function (a,b) {
        return a*b
    }
} 

function caesarCipher(str, shift) {
    let cesarCode = '';
    let newLetterCode = '';
    str.split("").forEach(letter => {
        if (!letter.match(/[a-zA-Z]/)) {
            return cesarCode += letter;
        }
        let tempLetterCode = letter.charCodeAt()+shift; 
        if (letter.match(/[A-Z]/)) {
            newLetterCode = tempLetterCode <= 90 ? tempLetterCode : 65+(tempLetterCode-91);
        }
        else {
            newLetterCode = tempLetterCode <= 122 ? tempLetterCode : 97+(tempLetterCode-123);
        }
            let newLetter = String.fromCharCode(newLetterCode);
            cesarCode += newLetter;
        })        
    return cesarCode
}

console.log(caesarCipher('abc',3))
console.log(caesarCipher("XZZ",2))

const object = analyzeArray([1,8,3,4,2,6]);


module.exports = {
    getStr,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};
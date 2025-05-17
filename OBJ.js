'use strict';

const { name } = require("ci-info");
const { typeOf } = require("react-is");

const fruits = ['яблоко', 'банан', 'груша'];
for (let value of fruits) {
    console.log(value)
}

const numbers = [3, 7, 2, 9];
let sum = 0;
for (let number of numbers) {
    sum +=number
}
console.log(sum)
let result = numbers.reduce((acc,num) => acc+num,0)
console.log(result)

const nums = [1, 2, 3, 4];
const num2 = []
for (let num of nums) {
    num2.push(num*2)
}
console.log(num2)

const num3 = nums.map(num=>num*2)
console.log(num3)

const mixed = [true, 'hello', 42, 'world', null];
const mixed1 = [];
let string = '';
for (let str of mixed) {
    if (typeof(str) === 'string')
    {
        mixed1.push(str);
        string +=str + " ";
    } 
}
const mixed2 = mixed.filter(str => typeof(str)==='string')
console.log(mixed1)
console.log(string)
console.log(mixed2)

const values = [-5, 3, 0, 7, -2];
const plusValues = [];
// Собери в новый массив только положительные числа:
for (let value of values) {
    if (value>=0) {
        plusValues.push(value)
    }
}
console.log(plusValues)

const plus2values = values.filter(value => value>=0)
console.log(plusValues)

const words = ['hi', 'there', 'friend'];
const upWords = [];
for (let word of words) {
    upWords.push(word.toUpperCase())
}
console.log(upWords);
const upWords1 = words.map(word => word.toUpperCase());
console.log(upWords1)

const names = ['Anna', 'Ben', 'Chris'];
let sumLength = 0;
for (let name of names) {
    sumLength +=name.length
}
console.log(sumLength)
const sumLength2 = names.reduce((acc,num) => acc+num.length,0);
console.log(sumLength2);

const phrases = ['JS', 'Loop', 'Fun'];
for (let phrase of phrases) {
    console.log(phrase.split(""))
}
phrases.forEach(phrase => console.log(phrase.split("")));

const list = ['cat', 'elephant', 'dog', 'giraffe'];
let biggest = '';
for (let word of list) {
    console.log(word,biggest)
    biggest = biggest.length > word.length ? biggest : word
}
console.log(biggest)
//чото я не придумал ничего кроме как forEach Использовать для поиска при помощи методов массива

let list2 = [...list];
list2.sort((a,b)=>b.length-a.length)
console.log(list2[0]);


console.log("----------------")
function recursion(list, j=0, biggestWord = '') {
    console.log(j,biggestWord,list[j])
    if (j === list.length-1) {
        return biggestWord
    }
    biggestWord = biggestWord.length > list[j].length ? biggestWord : list[j]
    return recursion(list, j+1, biggestWord)
}
console.log(recursion(list));


const parts = ['Я', 'учу', 'JavaScript'];
let commonString = '';
for (let part of parts) {
    commonString += part+" "
}
console.log(commonString.trim())
// findMax([4, 7, 1, 9, 3]) → 9

const { array } = require("yargs")

 // условие завершение - пройти весь массив до конца. нахождение самого большого - это побочка
let biggest = 0;
let i=0;
function findMax(array) {
    if (i===array.length) {
        return console.log(biggest)
    }
    biggest = biggest > array[i] ? biggest : array[i]
    i++;
    findMax(array)
}
findMax([4, 7, 1, 9, 3]);
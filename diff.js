const collect = require('collect.js');

let arr = [1, 2, 3, 4, 5]

let collection = collect(arr)

let diff = collection.diff([1, 2, 3, 90, 35])

console.log(diff)

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let collection2 = collect(newArr)

let diff2 = collection2.diff(['hellow Sir...', 45])

console.log(diff2)

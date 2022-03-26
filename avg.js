const collect = require('collect.js')
let arr = [1, 2, 3]

let collection = collect(arr).avg()

console.log(collection)

let obj1 = {
    name: 'Mr.a',
    number: 190
}

let obj2 = {
    name: 'Mr.b',
    number: 890
}

let collection2 = collect([obj1, obj2]).avg()

console.log(collection2)

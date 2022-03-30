const collect = require('collect.js')

let arr = [1, 2, 3, 4, 5]
let obj = {
    name: 'Mr.a',
    class: 10
}
let collection = collect(arr).concat(['A', 'B'])

let newCollection = collection.concat({
    Name: 'Mr.a',
    class: 9
})


console.log(newCollection.all())

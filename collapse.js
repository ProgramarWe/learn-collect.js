const collect = require('collect.js')

let arr = [
    [1, 2], 'Hellow', [
        ['...', Math.random() * 12]
    ]
]


let collection = collect(arr).collapse()

console.log(collection) // Output [ terminal || browser ]

// [1, 2, 'Hellow', '...', Math.random() * 12]

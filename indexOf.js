
function indexOf(arr, item) {
    for (let i = 0; i < array.length; i++) {
       if (arr[i] === item){
           return true
       }
    }
    return -1

}



const items = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]

console.log(indexOf(items, 'Lego'))         // Should be 1
console.log(indexOf(items, 'Teddybear'))    // Should be 3
console.log(indexOf(items, 'Laser sword'))  // Should be -1
console.log(indexOf(items, 'Playstation'))  // Should be -1

// ------------------




function filter(arr, func) {

}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = numbers.filter(x => x < 10)
console.log(filteredNumbers)

// TEST 2 - Dem som är stygga får kol.
const numb = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2, 32]
const filteredNumbs = numb.filter(x => x > 9)
console.log(filteredNumbs + " = ni får kol")


// TEST 3 - skriv själv

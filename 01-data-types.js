// 1. Declare one value of each primitive type: a string, a number, a boolean, an undefined, and a null

const middleName = 'Bruna'
const age = 30
const isMarried = false
let lastName
const height = null

// 2. Declare an array holding at least three strings, and print its length and its first item

const names = ['Arthur', 'Vinicius', 'Bianca']
console.log(names.length)
console.log(names[0])

// 3. Declare an object describing a customer, with a name, a size, and whether it is active, and print two of its fields

const customer = { name: 'Alex', size: 10, isActive: false }

console.log(customer.name, customer.size)

// 4. Print the typeof each of your five primitives

console.log(typeof middleName, typeof age, typeof isMarried, typeof lastName, typeof height)

// 5. Print Array.isArray() for both your array and your object

console.log(Array.isArray(names), (Array.isArray(customer)))
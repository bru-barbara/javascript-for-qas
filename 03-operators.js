// 1. Declare a let starting at 0, increase it with += twice, and print it

let counter = 0
counter += 1
counter += 1

console.log(counter)

// 2. Print the result of '2' + 3 and of 2 + 3, and make sure you can explain the difference

console.log('2' + 3) // First number is a string, so it will be print out as a string and the second one is a number, so you cannot sum them and they will be print out separately
console.log(2 + 3) // These are two numbers, so the result is the sum of both

// 3. Declare a variable holding the string '200' and print the result of comparing it to the number 200, first with == and then with ===
// 4. Fix the strict comparison so it is true, by converting the string to a number on purpose

const value = '200'
console.log(value == 200)
console.log(value === 200)
const num = Number(value)
console.log(num === 200)

// 5. Print a single check that is true only when a status code is 200 and a customer name is not an empty string

const statusCode = 200
const customerName = 'Bruna'
console.log(statusCode === 200 && customerName !== '')

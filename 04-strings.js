// 1. Declare a first name and a last name, and print the full name using +

const firstName = 'Bruna'
const lastName = 'Santos'
console.log(firstName + ' ' + lastName)

// 2. Print the same full name again, this time with a template literal

console.log(`${firstName} ${lastName}`)

// 3. Declare a customer name, a size, and a number of employees, and print a one-line summary using a template literal

const customerName = 'Vinicius'
const size = 'large'
const numberOfEmployees = '10'

console.log(`${customerName} wears ${size} t-shirts just like the other ${numberOfEmployees} employees`)

// 4. Print a URL for customer 42 using a template literal

const customer = 42
console.log(`www.example.com/${customer}`)

// 5. Print a unique email address that would be different on every run

console.log(`bruna${Date.now()}@example.com`)
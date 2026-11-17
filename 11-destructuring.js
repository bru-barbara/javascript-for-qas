const customer = { name: 'Acme', size: 'Large', active: true }

// 1. Destructure name and size out of a customer object and print them

const { name, size } = customer
console.log(name, size)

// 2. Destructure name again, renaming it to companyName, and print it

const { name: companyName } = customer
console.log(companyName)

// 3. Destructure a size that is missing from the object, giving it a default of 'Small', and print it

const partial = { name: 'Globex' }
const { size: partialSize = 'Small' } = partial
console.log(partialSize)

// 4. Split '2026-08-27' and destructure the result into year, month, and day in one line, then print them in day/month/year order

const [year, month, day] = '2026-08-27'.split('-')
console.log(day, month, year)

// 5. Split 'walmyr@example.com' on the @ and destructure it into username and domain

const [username, domain] = 'walmyr@example.com'.split('@')
console.log(username, domain)

// 6. Write an arrow function that destructures { name, size } in its parameter list and returns a sentence, then call it with a full customer object

const describeCustomer = ({ name, size }) => `${name} is ${size}`
console.log(describeCustomer(customer))
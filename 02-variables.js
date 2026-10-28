// 1. Declare a const holding a test email address, and print it

const testEmail = 'bru@example.com'
console.log(testEmail)

// 2. Declare a let counter starting at 0, add 1 to it twice, and print it

let counter = 0
counter = counter + 1
counter = counter + 2
console.log(counter)

// 3. Declare a const array with two sizes, push a third one into it, and print the array

const sizes = ['Small', 'Medium']
sizes.push('Large')
console.log(sizes)

// 4. Declare a const object describing a customer, change one of its fields, and print the object

const customer = { name: 'Bruna', middleName: 'Oliveira', lastName: 'Santos' }
customer.name = 'Barbara'
console.log(customer)

// 5. Freeze a copy of that object with Object.freeze(), try to change a field, and print it to prove nothing happened

const customerFreeze = Object.freeze({ name: 'Bruna', middleName: 'Oliveira', lastName: 'Santos' })
customerFreeze.middleName = 'Justen'
console.log(customerFreeze)
// 1. Write a function declaration buildEmail(username) that returns an email address, and call it

//function buildEmail(username) {
//    return `${username}@example.com`
//}

//console.log(buildEmail('bruna'))

// 2. Rewrite it as an arrow function with an implicit return, and call it

const buildEmail = (username) => `${username}@example.com`

console.log(buildEmail('bruna'))

// 3. Write a pure function totalPrice(price, quantity) and call it twice with the same arguments to prove it gives the same answer

function totalPrice(price, quantity) {
    return price * quantity
}

console.log(totalPrice(10, 5))
console.log(totalPrice(10, 5))

// 4. Write a higher-order function runCase(name, action) that prints the case name, calls action, and prints that it finished, then call it with a callback of your own

//function runCase(name, action) {
//    console.log(`Running: ${name}`)
//    action()
//    console.log(`Finished: ${name}`)
//}

//runCase('registering a client', () => console.log('... filling the form'))

// 5. Write a buildCustomer(name, size) arrow function that returns a new object each time, call it twice, change a field on the first result, and print both to prove the second was unaffected

const buildCustomer = (name, size) => ({ name, size })

const bruna = buildCustomer('Bruna', 'Medium')
const vini = buildCustomer('Vinicius', 'Large')

bruna.size = 'Large'

console.log(bruna)
console.log(vini)
// 1. Declare a name with spaces around it, print it trimmed, and print its trimmed length

const firstNameAndLastName = ' Bruna Santos '
console.log(firstNameAndLastName.trim())
console.log(firstNameAndLastName.trim().length)

// 2. Compare two names that differ only in case, first directly and then ignoring case

const upperCaseName = 'BRUNA'
const lowerCaseName = 'bruna'

console.log(upperCaseName === lowerCaseName)
console.log(upperCaseName.toLowerCase() === lowerCaseName.toLowerCase())

// 3. Take the string '2026-08-27' and print it as '27/08/2026' in a single chain

const date = '2026-08-27'
console.log(date.split('-').reverse().join('/'))

// 4. Take the string 'R$ 1.234,56' and print it as the number 1234.56

const price = 'R$ 1.234,56'
console.log(Number(price.replace('R$', '').replace('.', '').replace(',', '.')))

// 5. Print 'a-b-c-d' with every dash replaced by a slash, and prove to yourself why replace() alone was not enough

const letters = 'a-b-c-d'
console.log(letters.replace('-', '/')) //Not enough
console.log(letters.replaceAll('-', '/'))
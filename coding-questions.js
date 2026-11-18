//Strings and arrays

// 1. Reverse a string. Check whether a string is a palindrome.

const name = 'bruna'

const reverseName = name.split('').reverse().join('')
console.log(reverseName)

if (reverseName === 'bruna') {
    console.log('String is a palindrome')
}
else {
    console.log('String is not a palindrome')
}

// 2. Count how many times each character, or each word, appears.
// 3. Capitalize the first letter of every word in a sentence.
// 4. Given '2026-08-27', produce '27/08/2026'.


//Counting and filtering

// 1. Given an array of objects, return only the ones matching a condition.

const customer = [{ name: 'Bruna', age: '30', sex: 'Female' },
{ name: 'Vinicius', age: '38', sex: 'Male' },
{ name: 'Breno', age: '40', sex: 'Male' }]

const male = customer.filter((m) => m.sex === 'Male')

console.log(male)

// 2. Given an array of customers, return just their names.

const names = customer.map((n) => n.name)

console.log(names)

// 3. Given two arrays, return the items of the first that are not in the second.

/* Removing duplicates

1. Remove duplicate values from an array.
2. Check whether a list contains any duplicates at all.

A simple conversion
1. Given 'name=Acme;size=Large', produce an object.
2. Given a list of log lines like '2026-03-12 ERROR something', return only the errors.

The ones with a testing flavour

1. Here is a function. What test cases would you write for it ?
2. Write a function that checks whether an array is sorted.
3. Given a table's rows as an array, check that a column is in ascending order */
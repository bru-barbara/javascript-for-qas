// 1. Use a for loop to print the index and the value of every item in an array of three sizes

const sizes = ['Small', 'Medium', 'Large']

for (let i = 0; i < sizes.length; i++) {
    console.log(`${i}: ${sizes[i]}`)
}

// 2. Print the same values using for...of, without an index

for (const size of sizes) {
    console.log(size)
}

// 3. Use for...in to print every key and its value from an object describing a customer

const customer = { name: 'Acme Corporation', size: 'Large', active: true }

for (const key in customer) {
    console.log(`${key}: ${customer[key]}`)
}

// 4. Use a while loop to print three attempt numbers, and make sure it stops

let attempts = 0
while (attempts < 3) {
    console.log(`Attempt ${attempts}`)
    attempts++
}

// 5. Loop over an array of statuses and continue past 'draft', printing the rest

const statuses = ['draft', 'active', 'archived']
for (const status of statuses) {
    if (status === 'draft') continue
    console.log(status)
}

// 6. Write a loop that prints a test name for each size, in the form accepts the Small size, to see the data-driven pattern with your own eyes

for (const size of sizes) {
    console.log(`accepts the size ${size}`)
}
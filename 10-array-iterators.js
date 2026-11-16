// Helpful video: https://www.youtube.com/watch?v=Urwzk6ILvPQ

const customers = [
    { name: 'Acme', size: 'Large', active: true },
    { name: 'Globex', size: 'Small', active: false },
    { name: 'Initech', size: 'Large', active: true },
]

// 1. Print every customer's name with forEach

customers.forEach(function (customer) {
    console.log(customer.name)
})

// 2. Build and print an array of just the names with map

const newArr = customers.map(function (customer) {
    return customer.name
})

console.log(newArr)

// 3. Build and print an array of only the Large customers with filter

const largeCustomers = customers.filter(function (customer) {
    return customer.size === 'Large'
})

console.log(largeCustomers)

// 4. Find and print the Globex customer with find, then try to find a customer that does not exist and print the result

const globexCustomer = customers.filter(function (customer) {
    return customer.name === 'Globex'
})

console.log(globexCustomer)

const customerThatDoesNotExist = customers.find(function (customer) {
    return customer.name === 'Apple'
})

console.log(customerThatDoesNotExist)

// 5. Print whether some customer is inactive, and whether every customer is active

const customerInactive = customers.some(function (customer) {
    return customer.active === false
})

console.log(customerInactive)

const customerActive = customers.every(function (customer) {
    return customer.active === true
})

console.log(customerActive)

// 6. Print the result of calling every on an empty array, and write a comment about why that matters for a test

const emptyArr = [].every(function (empty) {
    return empty
})

console.log(emptyArr)

//every() in an empty array is true, so a test that checks that every row shows a price passes on a page with no rows.
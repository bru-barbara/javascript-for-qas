// 1. Write a function describeStatus(statusCode) that returns 'Server error' for 500 and above, 'Client error' for 400 and above, 'Success' for 200 and above, and 'Something else' otherwise. Call it with 500, 404, 200, and 100

const describeStatus = (statusCode) => {
    if (statusCode >= 500) {
        return 'Server error'
    }
    else if (statusCode >= 400) {
        return 'Client error'
    }
    else if (statusCode >= 200) {
        return 'Success'
    }
    else {
        return 'Something else'
    }
}

console.log(describeStatus(500), describeStatus(404), describeStatus(200), describeStatus(100))

// 2. Print whether an empty string is truthy or falsy, using an if

if ('') {
    console.log('An empty string is truthy')
}
else {
    console.log('An empty string is falsy')
}

// 3. Do the same for an empty array, and make sure the result surprises you before you move on

if ([]) {
    console.log('An empty array is truthy')
}
else {
    console.log('An empty array is falsy')
}

// 4. Write a function describeCount(count) that returns 'Found 1 customer' or 'Found 3 customers' correctly, using a ternary inside a template literal

const describeCount = (count) => {
    count === 1 ? `Found ${count} customer` : `Found ${count} customers`
}

console.log(describeCount(1))
console.log(describeCount(3))

// 5. Write a one-line comment explaining, in your own words, why an if around an assertion is usually a bad idea

// An if statement around an assertion allows the test to decide not to assert anything, so it stays green even if the functionality isn't working.
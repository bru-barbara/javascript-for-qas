// 1. Create a package.json in the root containing { "type": "module" } - DONE

// 2. Create a folder called helpers / and a file helpers / customers.js inside it - DONE

// 3. In that file, export a constant DEFAULT_SIZE and two functions: buildEmail(username) and buildCustomer(name, size)

export const DEFAULT_SIZE = 'Large'

export const buildEmail = (username) => `${username}@example.com`

export const buildCustomer = (name, size) => ({ name, size })

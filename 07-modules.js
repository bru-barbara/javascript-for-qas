// 4. Create 07-modules.js in the root that imports all three and prints a result from each (from helpers/customers.js)

import { DEFAULT_SIZE, buildEmail, buildCustomer } from './helpers/customers.js'

console.log(DEFAULT_SIZE)
console.log(buildEmail('brunasantos'))
console.log(buildCustomer('Bruna', 'Medium'))

// 5. Prove the sharing warning to yourself: import buildCustomer, call it twice, change a field on the first result, and print both

const art = buildCustomer('Arthur', 'Medium')

art.name = 'Bianca'

const jeff = buildCustomer('Jefferson', 'Large')

console.log(art)
console.log(jeff)
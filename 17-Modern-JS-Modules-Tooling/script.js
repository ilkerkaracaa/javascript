//Importing Modules
//import './shoppingCart.js';

console.log('Importing');
import add, { cart } from './shoppingCart.js';
add('pizza', 1);
add('lahmacun', 12);
console.log(cart);

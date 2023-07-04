// Remember, we're gonna use strict mode in all scripts now!
'use strict';
function printForecast(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]} C in ${i + 1} days ... `;
  }
  console.log('... ' + string);
}
const arr = [17, 21, 23];
printForecast(arr);

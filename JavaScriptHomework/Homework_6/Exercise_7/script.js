//Ima gotova funkcija za ova no pak ja resiv na moj nacin
/*let array = [1, null, 5, undefined, 'hello', NaN, false, 'world', '', true];

function removeFalsyValues(arr)
{
    return arr.filter(Boolean);
}
console.log(removeFalsyValues(array));
*/

let array = [1, null, 5, undefined, 'hello', NaN, false, 'world', '', true];
let result = [];
function deleteUnwanted()
{
    for(let i=0;i<array.length;i++)
{

   if(array[i] !== null && array[i] !== undefined && array[i] && array[i] !== false && array[i] !== '')
   {
    result.push(array[i]);
    delete array[i];
   }
   
}
}

deleteUnwanted();
console.log(array);
console.log(result);

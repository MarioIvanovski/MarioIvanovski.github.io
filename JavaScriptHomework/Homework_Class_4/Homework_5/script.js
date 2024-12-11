function sumOfMaxAndMin (array)
{
    let max = parseInt(array[0]);
    let min = parseInt(array[0]);
    for(let i=0;i<size;i++)
        {
            let newElement= parseInt(array[i]);
            if(max<array[i])
            {
                max=newElement;
            }
            if(min>array[i])
            {
                min=newElement;
            }
        }
    return max+min;
}

let array =[];
let size = parseInt(prompt("How many items are there going to be in the array?"));
let element=null;
for(let i=0;i<size;i++)
{
    element = prompt(`Enter element ${i + 1}:`);
    array.push(element);
}
console.log(sumOfMaxAndMin(array));
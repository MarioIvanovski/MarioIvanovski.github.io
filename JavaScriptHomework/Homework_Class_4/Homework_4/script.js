function checkType(input) {
    console.log(typeof input);
}

let variable = prompt("What");
let newVariable= parseInt(variable);
if (variable === "") 
{
    checkType(undefined);
}
else
{
    if(!isNaN(newVariable))
        {
            checkType(newVariable);
        }
        else
        {
            if(variable==="true" || variable=== "false")
            {
                variable = JSON.parse(variable);
                checkType(variable);
            }
            else
            {
                checkType(variable);
            }

        }
        
}

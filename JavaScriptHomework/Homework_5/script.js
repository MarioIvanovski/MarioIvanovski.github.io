function humanToDogAge(humanYears) {
    const dogYears = humanYears * 7;
    console.log(`${humanYears} human year(s) is equal to ${dogYears} dog year(s).`);
}
function dogToHumanAge(dogYears) {
    const humanYears = dogYears / 7;
    console.log(`${dogYears} dog year(s) is equal to ${humanYears} human year(s).`);
}

let converting = prompt("What do you want to convert to?");

if(converting==="dog")
{
    let age = prompt("Enter the age of the human");
    humanToDogAge(age);
}
else
    {
        let age = prompt("Enter the age of the dog");
        dogToHumanAge(age);
    }
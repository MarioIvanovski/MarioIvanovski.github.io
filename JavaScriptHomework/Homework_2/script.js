let year = prompt();
let zodiacIndex = (year - 4) % 12;

if (zodiacIndex === 0) {
   console.log("Rat");
} else if (zodiacIndex === 1) {
    console.log("Ox");
} else if (zodiacIndex === 2) {
    console.log("Tiger");
} else if (zodiacIndex === 3) {
    console.log("Rabbit");
} else if (zodiacIndex === 4) {
    console.log("Dragon");
} else if (zodiacIndex === 5) {
    console.log("Snake");
} else if (zodiacIndex === 6) {
    console.log("Horse");
} else if (zodiacIndex === 7) {
    console.log("Goat");
} else if (zodiacIndex === 8) {
    console.log("Monkey");
} else if (zodiacIndex === 9) {
    console.log("Rooster");
} else if (zodiacIndex === 10) {
    console.log("Dog");
} else if (zodiacIndex == 11){
    console.log("Pig");
}
else 
{
    console.log("Not possible");
}

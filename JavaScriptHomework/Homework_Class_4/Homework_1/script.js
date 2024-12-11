
function storyTelling (story)
{
    console.log("There once was a lad/lass named", story[0],
        "\nHe/she was feeling a little bit",story[1],
        "so", story[0],"decided to do something about it, and so he/she did.\nThey",story[2],
         "all day")
}

let input = prompt("Enter you're name and mood for the day, and what activity did you do?\n They are sepparated with the comma ,");
let array = input.split(",");
storyTelling(array)
function get_computer_choice(){
    let choice=['Rock','Paper','Scissor']
    let pick= choice[Math.floor(Math.random()*choice.length)]
    console.log(pick)
    return pick;
}
function get_human_choice(){
    let choice=['Rock','Paper','Scissor']
    let pick = parseInt(prompt('Enter your choice: 1 for Rock, 2 for Paper, 3 for Scissor'))
    console.log(choice[pick-1])
    return choice[pick-1];
}
get_human_choice();
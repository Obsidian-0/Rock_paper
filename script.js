function get_computet_choice(){
    let choice=['Rock','Paper','Scissor']
    let pick= choice[Math.floor(Math.random()*choice.length)]
    console.log(pick)
}
get_computet_choice()
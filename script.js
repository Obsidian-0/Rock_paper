let h=[],c=[];
winner=[];
let humanscore=0;let computerscore=0;
function get_computer_choice(){
    let choice=['Rock','Paper','Scissor']
    let pick= choice[Math.floor(Math.random()*choice.length)]
    console.log(pick)
    c.push(pick)
    return pick;
}
function get_human_choice(){
    let choice=['Rock','Paper','Scissor']
    let pick = Math.floor(Math.random() * 3);
    // let pick = parseInt(prompt('Enter your choice: 1 for Rock, 2 for Paper, 3 for Scissor'))
    // console.log(choice[pick-1])
    // return choice[pick-1];
    console.log(choice[pick])
    h.push(choice[pick])
    return choice[pick];
}
function play_round(computer_choice, human_choice){
    if(computer_choice==human_choice){
        console.log('Draw')
        winner.push('Draw')
    }
    else if(computer_choice=='Rock'){
        if(human_choice=='Paper'){
            console.log('You Won');
            console.log(`Score so far is : ${++humanscore} / ${computerscore}`)
            winner.push('Human')
        }
        else if(human_choice=='Scissor'){
            console.log("Yahoo, i picked rock! looooser!!!");
            console.log(`Score so far is : ${humanscore} / ${++computerscore}`)
            winner.push('Computer')
        }
    }
    else if (computer_choice=='Paper'){
        if(human_choice=='Rock'){
            console.log('Yahoo, i picked paper! looooser!!!');
            console.log(`Score so far is : ${humanscore} / ${++computerscore}`)
        }
        else if(human_choice=='Scissor'){
            console.log('Phewww!You Won');
            console.log(`Score so far is : ${++humanscore} / ${computerscore}`)
        }
    }
    else if (computer_choice=='Scissor'){
        if(human_choice=='Rock'){
            console.log('Phewww!You Won');
            console.log(`Score so far is : ${++humanscore} / ${computerscore}`)
        }
        else if(human_choice=='Paper'){
            console.log('Yahoo, i picked scissor! looooser!!!');
            console.log(`Score so far is : ${humanscore} / ${++computerscore}`)
        }
    }   
}

for (let i = 0; i < 50; i++) {
    const computer_choice=get_computer_choice();
    const human_choice=get_human_choice();
    play_round(computer_choice,human_choice);

}
console.log(`Final Score is : ${humanscore} / ${computerscore}`)
while(winner.length>0){
    let w=winner.pop();
    console.log(h.pop() + ' vs ' + c.pop() + ' => ' + w);
}
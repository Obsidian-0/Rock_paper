let humanscore,computerscore=0;
function get_computer_choice(){
    let choice=['Rock','Paper','Scissor']
    let pick= choice[Math.floor(Math.random()*choice.length)]
    console.log(pick)
    return pick;
}
function get_human_choice(){
   const cont = document.querySelector('.cont')
   cont.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
   })
}
function play_round(computer_choice, human_choice){
    if(computer_choice==human_choice){
        console.log('Draw')
    }
    else if(computer_choice=='Rock'){
        if(human_choice=='Paper'){
            console.log('You Won');
            console.log(`Score so far is : ${++humanscore} / ${computerscore}`)
        }
        else if(human_choice=='Scissor'){
            console.log("Yahoo, i picked rock! looooser!!!");
            console.log(`Score so far is : ${humanscore} / ${++computerscore}`)
        }
    }
    else if (computer_choice=='Paper'){
        if(human_choice=='Rock'){
            console.log('Yahoo, i picked paper! looooser!!!');
            console.log(`Score so far is : ${humanscore} / ${++computerscore}`)
        }
        else if(human_choice=='Scissor'){
            console.log('Phewww..!You Won');
            console.log(`Score so far is : ${++humanscore} / ${computerscore}`)
        }
    }
    else if (computer_choice=='Scissor'){
        if(human_choice=='Rock'){
            console.log('Phewww..!You Won');
            console.log(`Score so far is : ${++humanscore} / ${computerscore}`)
        }
        else if(human_choice=='Paper'){
            console.log('Yahoo, i picked scissor! looooser!!!');
            console.log(`Score so far is : ${humanscore} / ${++computerscore}`)
        }
    }   
}


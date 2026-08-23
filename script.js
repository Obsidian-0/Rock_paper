let humanscore = 0, computerscore = 0;
function get_computer_choice() {
    let choice = ['Rock', 'Paper', 'Scissor']
    let pick = choice[Math.floor(Math.random() * choice.length)]
    console.log(pick)
    return pick;
}
function get_human_choice() {
    const cont = document.querySelector('.cont')
    cont.addEventListener('click', (e) => {
        const item_selected = e.target.tagName;

        if (item_selected == 'BUTTON') {
            const human_choice = e.target.textContent;
            play_round(get_computer_choice(), human_choice)
        }

    })
}
function play_round(computer_choice, human_choice) {
    const human_span = document.getElementsByTagName('span')[0];
    const robot_span = document.getElementsByTagName('span')[1];
    const result = document.querySelector('.result');
    if (computer_choice == human_choice) {
        result.textContent = "Well, we were thinking same huh..";
    }
    else if (computer_choice == 'Rock') {
        if (human_choice == 'Paper') {
            result.textContent = "Alright, You Won";
            // console.log('You Won');
            // console.log(`Score so far is : ${++humanscore} / ${computerscore}`)
            human_span.textContent = `Your Score:${++humanscore}`;

        }
        else if (human_choice == 'Scissor') {
            result.textContent= "Yahoo, i picked rock! looooser!!!";
            robot_span.textContent = `Robot's Score:${++computerscore}`;
            // console.log(`Score so far is : ${humanscore} / ${++computerscore}`)
        }
    }
    else if (computer_choice == 'Paper') {
        if (human_choice == 'Rock') {
            result.textContent = 'Yahoo, i picked paper! looooser!!!';
            // console.log(`Score so far is : ${humanscore} / ${++computerscore}`)
            robot_span.textContent = `Robot's Score:${++computerscore}`;
        }
        else if (human_choice == 'Scissor') {
            result.textContent ='Phewww.. !You Won';
            human_span.textContent = `Your Score:${++humanscore}`;
        }
    }
    else if (computer_choice == 'Scissor') {
        if (human_choice == 'Rock') {
            result.textContent ='Phewww.. !You Won';
            human_span.textContent = `Your Score:${++humanscore}`;
        }
        else if (human_choice == 'Paper') {
            result.textContent ='Yahoo, i picked scissor! looooser!!!';
            robot_span.textContent = `Robot's Score:${++computerscore}`;
        }
    }
}
get_human_choice();

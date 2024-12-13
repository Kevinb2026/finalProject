// guess the number game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;


while(running){
    guess = window.prompt(`Guess a numbeer ${minNum} - ${maxNum}`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter vaild number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please eneter vaild number");
    }
    else{
        attempts ++;
        if(guess < answer){
            window.alert("too low try again");
        }
        else if(guess > answer){
            window.alert("too high try again");
        }
        else {
            window.alert(`correct! the answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }    


    
}
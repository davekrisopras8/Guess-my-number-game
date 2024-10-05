'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎇 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess)

    // jika tidak diinput angka
    if(!guess){
        // document.querySelector('.message').textContent = '🤷‍♂️ No Number!';
        displayMessage('🤷‍♂️ No Number!');

    // jika player memenangkan permainan
    } else if (guess === secretNumber){
        // document.querySelector('.message').textContent = '🎇 Correct Number!';
        displayMessage('🎇 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    // jike tebakan salah
    } else if(guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!')
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = '🥱 You lost the game!';
                displayMessage('🥱 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }
    }
    // // jika player menebak angka terlalu tinggi
    // }else if (guess > secretNumber){
    //     if(score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🥱 You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }

    // // jika player menebak angka terlalu rendah
    // } else if (guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = '🥱 You lost the game!'
    //             document.querySelector('.score').textContent = 0;
    //         }
    // }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});
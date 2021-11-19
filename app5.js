function guessingGame(){
    let userAnswer = prompt('Please Enter a Number 1-100');
    let correctAnswer = 34; // may come back and get a random number
    let attemps = 8;

    for(let i = 1; i < attemps; i++){
        while(userAnswer < 1 || userAnswer > 100){
            userAnswer = prompt('Please Try Again! A number 1-100');
        }
        if(userAnswer == correctAnswer){
            alert('DING DING DING. You got it right!');
            document.write("Game Winner");
            break;
        } else if (userAnswer > correctAnswer){
            userAnswer = prompt('Sorry. To high. Please Try Again! A number 1-100');
        } else if (userAnswer < correctAnswer){
            userAnswer = prompt('Sorry. To low. Please Try Again! A number 1-100');
        }
        if(i == 7){
            alert('The correct answer was ' + correctAnswer);
            document.write("Game Loser");
        }
    }
}
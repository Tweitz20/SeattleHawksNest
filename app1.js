
function askUserQuestion(){
    let userName = prompt('Enter you first name!');

    if(userName == 'victor'){
        document.write(`Welcome Your The Best! ${userName}`)
    } else {
        document.write('Welcome To The Hawks Nest! ' + userName)
    }
    return userName;
    // 'victor'
}
    askUserQuestion();

function fanQuestion(){
    let userAnswer = prompt('Do you want to be a true fan? (yes or no)')
    // console.log(userAnswer);
    if(userAnswer.toLowerCase() == "yes"){
        document.write(' But now you are a fan of a losing season :(')
    }
    
}
    
    fanQuestion();
        ''

function anotherPicQuestion(){
    let anotherPicture = prompt('How many pictures of DK Metcalf would you like to see?');
    let picURL = "https://s.yimg.com/ny/api/res/1.2/.y8rEKwbI_cO2sX7rFMsDA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOS45MTM1MzY4ODE5MjM4/https://s.yimg.com/os/creatr-uploaded-images/2020-12/1834b430-338b-11eb-9af3-93db761941b7"
    for(let i = 0; i < anotherPicture; i++){
        document.write('<img src="' + picURL + '">')
    }

}

    anotherPicQuestion();

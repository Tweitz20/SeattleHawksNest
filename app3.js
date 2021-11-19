function anotherPicQuestion(){
    let anotherPicture = prompt('Would you like to see a picture of DK Metcalf?');
    let picURL = "https://s.yimg.com/ny/api/res/1.2/.y8rEKwbI_cO2sX7rFMsDA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOS45MTM1MzY4ODE5MjM4/https://s.yimg.com/os/creatr-uploaded-images/2020-12/1834b430-338b-11eb-9af3-93db761941b7"

    if(anotherPicture.toLowerCase() == "yes"){
        // <img id="Metcalf" src="https://s.yimg.com/ny/api/res/1.2/.y8rEKwbI_cO2sX7rFMsDA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOS45MTM1MzY4ODE5MjM4/https://s.yimg.com/os/creatr-uploaded-images/2020-12/1834b430-338b-11eb-9af3-93db761941b7"

        document.write('<img src="' + picURL + '">')
    }
}

anotherPicQuestion();
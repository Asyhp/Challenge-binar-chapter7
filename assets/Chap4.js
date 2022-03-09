let tombols = document.getElementsByClassName("tombol")
for (let i = 0; i < tombols.length; i++) {
    tombols[i].style.borderRadius = "10px";
    tombols[i].style.backgroundColor = "transparent";
}

function clickBtn(pilihan) {
    let pilihanPlayer = new Player1Choose(pilihan)
    console.log(pilihanPlayer)
    let pilihanCom = new ComChoose(pilihan)
    console.log(pilihanCom)
    let gameLogic = new GameLogic(pilihanPlayer.pilihan, pilihanCom.pilihan)
    console.log(gameLogic.gabunganPilihan())
    let gabunganPilihan = gameLogic.gabunganPilihan()
    gameLogic.hasil(gabunganPilihan)
        
        
}

let reload = document.getElementById("refresh")
function ulangIn() {
    window.location.reload()
}

let back = document.getElementById("back-button")
function tombolBalik() {
    window.history.back()
}

class Player1Choose {
    constructor(pilihan) {
    this.pilihan = pilihan
    }
}

class ComChoose {
    constructor() {
    this.randomPilihan()
    }
    randomPilihan() {
        let randomNumber = Math.floor(Math.random()*3)
        if (randomNumber === 1) {
            this.pilihan = "batu"
        } else if (randomNumber === 2) {
            this.pilihan = "kertas"
        } else {
            this.pilihan = "gunting"
        }
    }
}

class GameLogic {
    constructor(pilihanPlayer, pilihanCom) {
        this.pilihanPlayer = pilihanPlayer;
        this.pilihanCom = pilihanCom
    }
    gabunganPilihan() {
    return this.pilihanPlayer + this.pilihanCom
    }
    hasil(jawaban) {
        if (jawaban === "batugunting") {
            document.getElementById("bg-vs").innerHTML = "Player 1 Win";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button1").style.backgroundColor = "#adb5bd";
            document.getElementById("button6").style.backgroundColor = "#adb5bd";
                
        } else if (jawaban === "guntingkertas") {
            document.getElementById("bg-vs").innerHTML = "Player 1 Win";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button5").style.backgroundColor = "#adb5bd";
            document.getElementById("button4").style.backgroundColor = "#adb5bd";
        } else if (jawaban === "kertasbatu") {
            document.getElementById("bg-vs").innerHTML = "Player 1 Win";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button3").style.backgroundColor = "#adb5bd";
            document.getElementById("button2").style.backgroundColor = "#adb5bd";
        } else if (jawaban === "guntingbatu") {
            document.getElementById("bg-vs").innerHTML = "COM Win";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button5").style.backgroundColor = "#adb5bd";
            document.getElementById("button2").style.backgroundColor = "#adb5bd";
        } else if (jawaban === "kertasgunting") {
            document.getElementById("bg-vs").innerHTML = "COM Win";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button3").style.backgroundColor = "#adb5bd";
            document.getElementById("button6").style.backgroundColor = "#adb5bd";
        } else if (jawaban === "batukertas") {
            document.getElementById("bg-vs").innerHTML = "COM Win";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button1").style.backgroundColor = "#adb5bd";
            document.getElementById("button4").style.backgroundColor = "#adb5bd";
        } else if (jawaban === "batubatu") {
            document.getElementById("bg-vs").innerHTML = "DRAW";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button1").style.backgroundColor = "#adb5bd";
            document.getElementById("button2").style.backgroundColor = "#adb5bd";
        } else if (jawaban === "kertaskertas") {
            document.getElementById("bg-vs").innerHTML = "DRAW";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button3").style.backgroundColor = "#adb5bd";
            document.getElementById("button4").style.backgroundColor = "#adb5bd";
        } else {
            document.getElementById("bg-vs").innerHTML = "DRAW";
            document.getElementById("bg-vs").style.fontSize = "50px";
            document.getElementById("bg-vs").style.color = "white";
            document.getElementById("bg-vs").style.backgroundColor = "green";
            document.getElementById("bg-vs").style.borderRadius = "10px";
            document.getElementById("button5").style.backgroundColor = "#adb5bd";
            document.getElementById("button6").style.backgroundColor = "#adb5bd";
        }
    }
}
        

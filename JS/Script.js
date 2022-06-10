// playerjump
let dino = document.querySelector(".dino");
let tryno = document.querySelector(".tryno");
let dis = document.querySelector("#gameover");
let htbtn= document.getElementById("htnbtn").addEventListener("click",Hint);
let going = new Audio("GoingOn.mp3");
let lost = new Audio("lost.mp3");
let score = 0;
let playsound = false;
isover = false;

if (dis.hasAttribute("class")) {
    setTimeout(function () {
        dis.textContent = "";
    }, 1000);
}
//speed
incre(score);
trigger();
function trigger() {
    let x = 0;
    let y = 0;
    let dinowidth = parseInt(window.getComputedStyle(dino, null).getPropertyValue("width"));
    let dinoheight = parseInt(window.getComputedStyle(dino, null).getPropertyValue("height"));
    if (dinowidth == 300 && dinoheight == 190 || dinowidth == 370 && dinoheight == 220) {
        setInterval(function () {
            let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
            let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
            let tx = parseInt(window.getComputedStyle(tryno, null).getPropertyValue("left"));
            let ty = parseInt(window.getComputedStyle(tryno, null).getPropertyValue("top"));
            x = Math.abs(dx - tx);
            y = Math.abs(dy - ty);
            if (x < 50 && y <= 255) {
                isover = true;
                if (playsound) {
                    going.pause();
                    lost.play();
                }
                tryno.classList.remove("runanimation");
                dino.classList.remove("jumpant");
                let dis = document.querySelector("#gameover");
                dis.removeAttribute("text");
                dis.textContent = "Game Over";
                if (score > 0) {
                    score = score - 1;
                    updateScore(score);
                }
                score = 0;
                let btn = play();
                dis.appendChild(btn);
            }
        }, 300);
    }
    else {
        x = 0;
        y = 0;
        if (dinowidth == 123 && dinoheight == 125) {
            setInterval(function () {
                let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
                let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
                let tx = parseInt(window.getComputedStyle(tryno, null).getPropertyValue("left"));
                let ty = parseInt(window.getComputedStyle(tryno, null).getPropertyValue("top"));
                x = Math.abs(dx - tx);
                y = Math.abs(dy - ty);
                if (x < 8 && y <= 255) {
                    isover = true;
                    if (playsound) {
                        going.pause();
                        lost.play();
                    }
                    tryno.classList.remove("runanimation");
                    dino.classList.remove("jumpant");
                    let dis = document.querySelector("#gameover");
                    dis.removeAttribute("text");
                    dis.textContent = "Game Over";
                    if (score > 0) {
                        score = score - 1;
                        updateScore(score);
                    }
                    score = 0;
                    let btn = play();
                    dis.appendChild(btn);
                }
            }, 200);
        }
    }
}

document.addEventListener("keydown", function (e) {
    playsound = "true";
    setInterval(function () {
        going.play();
    }, 1000);
    let code = e.code;
    if (!isover) {
        if (code === "ArrowUp") {
            isup = true;
            dino.classList.add("jumpant");
            setTimeout(function () {
                dino.classList.remove("jumpant");
            }, 2000);
        }
        if (code === "ArrowRight") {
            let dino = document.querySelector(".dino");
            let left = parseInt(window.getComputedStyle(dino, null).getPropertyValue("Left"));
            dino.style.left = left + 112 + "px";
        }
        if (code === "ArrowLeft") {
            let dino = document.querySelector(".dino");
            let left = parseInt(window.getComputedStyle(dino, null).getPropertyValue("Left"));
            dino.style.left = left - 112 + "px";
        }
    }
    //game state check
    trigger();
    //score
    if (!isover) {
        score += 1;
        updateScore(score);
    }

});
function updateScore(score) {
    let scores = document.querySelector("#score");
    scores.textContent = "Score: " + score;
}

function play() {
    lost.pause();
    let again = document.createElement("button");
    again.textContent = "Play Again";
    again.classList.add("btnstyle")
    again.addEventListener("click", () => {
        document.location.reload(true);
        isover = false;
    });
    return again;
}
function incre(score) {
    if (score / 11) {
        let dur = window.getComputedStyle(tryno, null).getPropertyValue("animation-duration");
        dur = dur + 0.1;
        window.getComputedStyle(tryno, null).setProperty("animation-duration", dur);
    }
}
//touchevent
document.addEventListener("touchstart", function () {
    setInterval(function () {
        going.play();
    }, 1000);
    if (!isover) {
        dino.classList.add("jumpant");
        setTimeout(function () {
            dino.classList.remove("jumpant");
        }, 2000);

    }
    let dinowidth = parseInt(window.getComputedStyle(dino, null).getPropertyValue("width"));
    let dinoheight = parseInt(window.getComputedStyle(dino, null).getPropertyValue("height"));
    let x = 0;
    let y = 0;
    //gameover
    setInterval(function () {
        let dino = document.querySelector(".dino");
        let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
        let tx = parseInt(window.getComputedStyle(tryno, null).getPropertyValue("left"));
        let ty = parseInt(window.getComputedStyle(tryno, null).getPropertyValue("top"));
        x = Math.abs(dx - tx);
        y = Math.abs(dy - ty);
        if (dinowidth == 123 && dinoheight == 125) {
            if (x <5 && y <= 255) {
                going.pause();
                lost.play();
                tryno.classList.remove("runanimation");
                dino.classList.remove("jumpant");
                let dis = document.querySelector("#gameover");
                dis.removeAttribute("text");
                dis.textContent = "Game Over";
                if (score > 0) {
                    score = score - 1;
                    updateScore(score);
                }
                score = 0;
                isover = true;
                let btn = play();
                dis.appendChild(btn);
            }
            else if (dinowidth == 300 && dinoheight == 190 || dinowidth == 370 && dinoheight == 220) {
                if (x < 50 && y <= 255) {
                    going.pause();
                    lost.play();
                    tryno.classList.remove("runanimation");
                    dino.classList.remove("jumpant");
                    let dis = document.querySelector("#gameover");
                    dis.removeAttribute("text");
                    dis.textContent = "Game Over";
                    if (score > 0) {
                        score = score - 1;
                        updateScore(score);
                    }
                    score = 0;
                    isover = true;
                    let btn = play();
                    dis.appendChild(btn);
                }
            }
        }
    }, 300);
    trigger();
    if (!isover) {
        score += 1;
        updateScore(score);
    }
});

//Hint 
function Hint(){
    alert("To get Score you have to save yourself from another dinosaur comming from front in order to save yourself you have to jump by pressing ArrowUp key and to move forward use ArrowRight key and to move backward use ArrowLeft key.")
}








// playerjump
let dino = document.querySelector(".dino");
let going= new Audio("GoingOn.mp3");
let lost= new Audio("lost.mp3");


let score = 0;
let isover = false;
let dis = document.querySelector("#gameover");
let tryno = document.querySelector(".tryno");
if (dis.hasAttribute("class")) {
    setTimeout(function () {
        dis.textContent = "";
    }, 1000);
}


incre(score);
document.addEventListener("keydown", function (e) {
    setInterval(function(){
        going.play();
    },1000);
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
    }

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
        console.log("x: " + x);
        console.log("y: " + y);
        if (x < 50 && y<=255) {
            going.pause();
            lost.play();
            over = true;
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
    }, 300);
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

document.addEventListener("touchstart", function(){
    if (!isover) {
            isup = true;
            dino.classList.add("jumpant");
            setTimeout(function () {
                dino.classList.remove("jumpant");
            }, 2000);
    }
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
        if (x < 30 && y<=255) {
            going.pause();
            lost.play();
            over = true;
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
    }, 300);
    if (!isover) {
        score += 1;
        updateScore(score);
    }
});







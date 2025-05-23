let player = document.getElementById("player");
let food = document.getElementById("food");
let tops = 0;
let downs = 0;
let lefts = 0;
let rights = 0;
let ts = 10;
let ls = 10;
let playbox = document.querySelector(".play");
let gameover = document.getElementById("gameover");
let f = 0;
let time = 30;

//All Audios
let B=document.getElementById("B");
let E=document.getElementById("E");
let G=document.getElementById("G");
let LoopS=document.getElementById("loop");


//Game Play Button
let play = document.getElementById("play").addEventListener("click", () => {
    B.play();
  time = 30;
  playbox.style.display = "none";
  food.style.gridRowStart = Math.floor(Math.random() * 18);
  food.style.gridColumnStart = Math.floor(Math.random() * 18);
});

//controlls
//Button controlls
document.getElementById("top").addEventListener("click", () => {
  tops = 1;
  downs = 0;
  lefts = 0;
  rights = 0;
});
document.getElementById("down").addEventListener("click", () => {
  tops = 0;
  downs = 1;
  lefts = 0;
  rights = 0;
});
document.getElementById("left").addEventListener("click", () => {
  tops = 0;
  downs = 0;
  lefts = 1;
  rights = 0;
});
document.getElementById("right").addEventListener("click", () => {
  tops = 0;
  downs = 0;
  lefts = 0;
  rights = 1;
});
//Key controll
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    tops = 1;
    downs = 0;
    lefts = 0;
    rights = 0;
  } else if (e.key == "ArrowDown") {
    tops = 0;
    downs = 1;
    lefts = 0;
    rights = 0;
  } else if (e.key == "ArrowLeft") {
    tops = 0;
    downs = 0;
    lefts = 1;
    rights = 0;
  } else if (e.key == "ArrowRight") {
    tops = 0;
    downs = 0;
    lefts = 0;
    rights = 1;
  }
});

//Player move function
setInterval(() => {
  if (tops === 1 && playbox.style.display == "none") {
    ts = ts - 1;
    if (ts == 0) {
      ts = 18;
    }
  } else if (downs === 1 && playbox.style.display == "none") {
    ts = ts + 1;
    if (ts == 19) {
      ts = 0;
    }
  } else if (lefts == 1 && playbox.style.display == "none") {
    ls = ls - 1;
    if (ls == 0) {
      ls = 18;
    }
  } else if (rights == 1 && playbox.style.display == "none") {
    ls = ls + 1;
    if (ls == 19) {
      ls = 0;
    }
  }
  player.style.gridColumnStart = ls;
  player.style.gridRowStart = ts;
  if (
    player.style.gridColumnStart == food.style.gridColumnStart &&
    player.style.gridRowStart == food.style.gridRowStart
  ) {
    E.currentTime=0;
    E.play();
    f = f + 1;
    document.getElementById("Foodscr").innerText = f;
    document.getElementById("foodscr").innerText = f;
    food.style.gridRowStart = Math.floor(Math.random() * 18);
    food.style.gridColumnStart = Math.floor(Math.random() * 18);
  }
}, 100);

//Time set to show gameover
setInterval(() => {
  if (playbox.style.display == "none") {
    time = time - 1;
    document.getElementById("time").innerText = time;
    if (time == 0) {
      gameover.style.display = "inline-block";
      tops = 0;
      downs = 0;
      lefts = 0;
      rights = 0;
      G.play();
    }
  }
}, 1000);

document.getElementById("reset").addEventListener("click", () => {
    B.play()
  gameover.style.display = "none";
  playbox.style.display = "inline-block";
  f = 0;
  tops = 0;
  downs = 0;
  lefts = 0;
  rights = 0;
  time = 30;
});

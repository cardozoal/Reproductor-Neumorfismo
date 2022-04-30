const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const range = document.getElementById("range");


playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

backward.addEventListener("click", () => {
			audio.currentTime=audio.currentTime-5
      audio.play()
});

forward.addEventListener("click", () => {
    audio.currentTime=audio.currentTime+5
			audio.play()
  });

  range.addEventListener("range", () => {
    style.width = (this.currentTime * 100 / this.duration)+'%';
  });

  
  
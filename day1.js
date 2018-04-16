
window.addEventListener("keydown", function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function
    audio.currentTime = 0; //fastclicking
    audio.play();
console.log(e.keyCode);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");

    
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return //skip it
    this.classList.remove("playing");
    console.log("elo" + e);
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

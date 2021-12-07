const box1 = document.getElementsByClassName("box1")[0];
const box2 = document.getElementsByClassName("box2")[0];
const box3 = document.getElementsByClassName("box3")[0];
const box4 = document.getElementsByClassName("box4")[0];
const box5 = document.getElementsByClassName("box5")[0];
const box6 = document.getElementsByClassName("box6")[0];
const box7 = document.getElementsByClassName("box7")[0];
const box8 = document.getElementsByClassName("box8")[0];
const box9 = document.getElementsByClassName("box9")[0];

window.addEventListener("keydown", function(event) {

    switch (event.which){
        case 65:         //Key a or A
            const boom = new Audio("sounds/boom.wav");
            boom.play();
            break;
        case 83:         //Key s or S
            const clap = new Audio("sounds/clap.wav");
            clap.play();
            break;
        case 68:         //Key d or D
            const hihat = new Audio("sounds/hihat.wav");
            hihat.play();
            break;
        case 70:         //F
            const kick = new Audio("sounds/kick.wav");
            kick.play();
            break;
        case 71:         //G
            const openhat = new Audio("sounds/openhat.wav");
            openhat.play();
            break;
        case 72:         //H
            const ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
        case 74:         //J
            const snare = new Audio("sounds/snare.wav");
            snare.play();
            break;
        case 75:         //K
            const tink = new Audio("sounds/tink.wav");
            tink.play();
            break;
        case 76:         //L
            const tom = new Audio("sounds/tom.wav");
            tom.play();
            break;
    }   
    
}, true);

box1.addEventListener("click", ()=>{
    const boom = new Audio("sounds/boom.wav");
    boom.play();
})

box2.addEventListener("click", ()=>{
    const clap = new Audio("sounds/clap.wav");
    clap.play();
})

box3.addEventListener("click", ()=>{
    const hihat = new Audio("sounds/hihat.wav");
    hihat.play();
})

box4.addEventListener("click", ()=>{
    const kick = new Audio("sounds/kick.wav");
    kick.play();
})

box5.addEventListener("click", ()=>{
    const openhat = new Audio("sounds/openhat.wav");
    openhat.play();
})

box6.addEventListener("click", ()=>{
    const ride = new Audio("sounds/ride.wav");
    ride.play();
})

box7.addEventListener("click", ()=>{
    const snare = new Audio("sounds/snare.wav");
    snare.play();
})

box8.addEventListener("click", ()=>{
    const tink = new Audio("sounds/tink.wav");
    tink.play();
})

box9.addEventListener("click", ()=>{
    const tom = new Audio("sounds/tom.wav");
    tom.play();
})
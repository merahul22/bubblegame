var timer=60; 
var score=0
var hitrn=0
function makebubble(){
    var clutter=" ";
for(var i=1;i<=230;i++){
    clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}

document.querySelector(".pbtm").innerHTML=clutter
}

function timerval(){
  var timerint = setInterval(() => {
        if(timer>0) {
            timer--
        document.querySelector("#timerval").textContent=timer
        }else{
            clearInterval(timerint)
            document.querySelector(".pbtm").innerHTML=`<h1>Game over</h1>`
        }
    }, 1000);
}

function getnewhit(){
    hitrn= Math.floor(Math.random()*10)
    document.querySelector("#newhit").textContent=hitrn
}

function getnewscore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
 var clickednum=Number(dets.target.textContent)
 if(clickednum===hitrn) {
    getnewscore();
    makebubble();
    getnewhit();
 }
});

timerval();
makebubble();
getnewhit();


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
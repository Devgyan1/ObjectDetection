img="";
status="";
objects=[];


function preload(){
    img=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHElFQf-L2Rr-q4R3BaP5SpZQrr42mnN_aA&usqp=CAU');
    
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}

function draw(){
    image(img,0,0,640,420)
    }

function modelLoaded(){
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
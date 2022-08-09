img="";
status="";
objects=[];


function preload(){
    img=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMAY3Z-205kWN7XF5u2F8GdNrSs6-RvcMOw&usqp=CAU');
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
}
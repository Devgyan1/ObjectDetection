img="";
status="";
objects=[];


function preload(){
    img=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNlJ_5b0K3jljkNJKBzWB99WP0_Yy2_UG8zfu2i5uaIkiS4wp8dCbWVMnl_8e30f-470&usqp=CAU');
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
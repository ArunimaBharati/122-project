

difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is intialised');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;

        difference=floor(leftWristX-rightWristX);
        
    }
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of a square will be ="+difference+"px";
    fill('#F90093');
    textSize(difference);
    text('Arunima Bharati',50,400)
}
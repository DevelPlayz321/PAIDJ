var song_A = "";
var song_B = "";
var song_C = "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("Model is successfully loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("rightWrsist_x = " + rightWrist_x);
        console.log("rightWrist_y = " + rightWrist_y);
        console.log("leftWrist_x = " + leftWrist_x);
        console.log("leftWrist_y = " + leftWrist_y);
    }

}

function play(){
    music.play();
    music.rate(1);
    music.setVolume(1);
}


noseX = 0
noseY = 0
rightWristX = 0
leftWristX = 0
difference = 0
function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,400);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults)
}
function gotResults(results){
if(results.length > 0){
console.log(results)
noseX = results[0].pose.nose.x 
noseY = results[0].pose.nose.y 
rightWristX = results[0].pose.rightWrist.x
leftWristX = results[0].pose.leftWrist.x
difference = floor(leftWristX-rightWristX)
}
}
function modelLoaded(){
    console.log('Model is Intialized!')
}
function draw(){
    background("#2a753f")
    fill("#185228")
    textSize(difference)
    text('froggy', 50, 400)
}
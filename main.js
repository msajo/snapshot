function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(300,300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,640,480);
    circle(30, 30, 20);
    
}
function take_snapshot(){
    save("filtered_image.png")
}
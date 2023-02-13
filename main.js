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
    fill("blue");
    stroke("blue");
    rect(20, 20, 600, 30);
    rect(20, 425, 600, 30);
    rect(20, 20, 30, 435);
    rect(595, 20, 30, 435);
    fill("pink");
    stroke("pink");
    circle(45,45,95);
    circle(590,430,95);
    fill("purple");
    stroke("purple");
    circle(590,45,95);
    circle(45,430,95);

    
    
}
function take_snapshot(){
    save("filtered_image.png")
}
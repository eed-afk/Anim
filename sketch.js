let spritesheet;
let spritedata;

let animation = [];
function preload() {
    spritedata = loadJSON('spritesheet.json');
    spritesheet = loadImage('spritesheet.png');
}


function setup() {
    createCanvas(800, 800);
    frameRate(5);
    let frames = spritedata.frames;
    for (var i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }
    console.log(animation);
}

function draw() {
    background(0);
    image(animation[frameCount % animation.length], 0, 0, 200, 200);
}
var status = "";
var objecct = [];
var objectDetector = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function draw() {
    image(img, 0, 0, 600, 500);
    if (status != "") {
        for (var i = 0; i <= objecct.length; i++) {
            document.getElementById("status").innerHTML = "Status: Detected Objects";

            fill("white");
            noFill();
            stroke("red");

            percent = floor(objecct[i].confidence * 100);
            text(objecct[i].lable + " " + percent + "%", objecct[i].x, objecct[i].y);

            rect(objecct[i].x, objecct[i].y, objecct[i].width, objecct[i].height);
        }
    }
}

function modelLoaded() {
    console.log("the model is loaded");
    status = true;
    objectDetector.detect(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        Object = results;
    }
}
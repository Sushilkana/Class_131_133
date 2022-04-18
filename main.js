var status = "";
var objecct = [];
var objectDetector = "";

function preload() {
    // img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function draw() {
    image(video, 0, 0, 600, 500);
    if (status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotresult);
        for (i = 0; i <= object.length; i++) {
            document.getElementById("status").innerHTML = "Status: Detected Objects";
            document.getElementById("nameofobject").innerHTML = object.lenght;

            fill(r,g,b);
            noFill();
            stroke(r,g,b);

            percent = floor(object[i].confidence * 100);
            text(object[i].lable + " " + percent + "%", object[i].x, object[i].y);

            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function modelLoaded() {
    console.log("the model is loaded");
    status = true;
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        object = results;
    }
}
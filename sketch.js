var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;

var cloud1;
var cloud2;

function setup() {
    createCanvas(800, 600);
    // Set the groundHeight proportional to the canvas size
    groundHeight = (height / 4) * 3;

    // Initalise the mountain objects with properties to help draw them to the canvas
    mountain1 = {
        x: 400,
        y: groundHeight,
        height: 340,
        width: 230
    };
    mountain2 = {
        x: 550,
        y: groundHeight,
        height: 200,
        width: 130
    };
    mountain3 = {
        x: 600,
        y: groundHeight,
        height: 250,
        width: 140
    };

    // Initalise the tree object
    tree = {
        x: 200,
        y: groundHeight + 20,
        trunkWidth: 40,
        trunkHeight: 150,
        canopyWidth: 140,
        canopyHeight: 110
    };

    // Initalise the sun 
    sun = {
        x: 150,
        y: 70,
        diameter: 80
    };

    // Intialise a moon object with an extra property for brightness
    moon = {
        x: 650,
        y: 70,
        diameter: 80,
        brightness: 0
    };

    cloud1 = {
        xPos: 0,
        yPos: 130,
        scale: 1,
        speed: .6
    };
    cloud2 = {
        xPos: 150,
        yPos: 200,
        scale: 1.5,
        speed: 1
    };

    // Set the initial darkness
    darkness = 0;
}



function draw() {
    // Update the values for the moons brightness, the sun's position and the darkness.
    // Map to the mouse's location (i.e. the futher left the mouse is the more daylight)
    sun.y = constrain(mouseX, 70, groundHeight + (sun.diameter / 2));
    darkness = constrain(mouseX / width, 0, 1);
    moon.brightness = darkness;

    // Draw the sky
    background(150, 200, 255);
    noStroke();

    // Draw the sun
    fill(255, 255 - 160 * darkness, 0);
    ellipse(sun.x, sun.y, sun.diameter);

    // Draw the ground and make it green
    fill(70, 200, 0);
    rect(0, groundHeight, width, height - groundHeight);

    // Cloud animations
    if (cloud1.xPos < 825) {
        cloud1.xPos += cloud1.speed / 2;
    } else {
        cloud1.xPos = -50;
    }

    if (cloud2.xPos < 825) {
        cloud2.xPos += cloud2.speed / 2;
    } else {
        cloud2.xPos = -50;
    }

    // Draw cloud1
    fill(255);
    ellipse(cloud1.xPos, cloud1.yPos, cloud1.scale * 50, cloud1.scale * 50);
    ellipse(cloud1.xPos + cloud1.scale * 30, cloud1.yPos, cloud1.scale * 30, cloud1.scale * 30);
    ellipse(cloud1.xPos + cloud1.scale * 50, cloud1.yPos, cloud1.scale * 20, cloud1.scale * 20);

    // Draw the mountains
    fill(120);
    triangle(mountain1.x, mountain1.y,
        mountain1.x + mountain1.width, mountain1.y,
        mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

    triangle(mountain2.x, mountain2.y,
        mountain2.x + mountain2.width, mountain2.y,
        mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    triangle(mountain3.x, mountain3.y,
        mountain3.x + mountain3.width, mountain3.y,
        mountain3.x + (mountain3.width / 2), mountain3.y - mountain3.height);

    // Draw cloud2
    fill(255);
    ellipse(cloud2.xPos, cloud2.yPos, cloud2.scale * 50, cloud2.scale * 50);
    ellipse(cloud2.xPos + cloud2.scale * 30, cloud2.yPos, cloud2.scale * 30, cloud2.scale * 30);
    ellipse(cloud2.xPos + cloud2.scale * 50, cloud2.yPos, cloud2.scale * 20, cloud2.scale * 20);

    // Draw tree
    fill(200, 100, 0);
    rect(tree.x, tree.y - tree.trunkHeight, tree.trunkWidth, tree.trunkHeight, 10);
    fill(0, 150, 0);
    ellipse(tree.x + tree.trunkWidth / 2, tree.y - tree.trunkHeight, tree.canopyWidth, tree.canopyHeight);

    // Make the scene dark by drawing a rectangle that covers the whole canvas.
    // Use the alpha value of fill to determine how dark to make it
    fill(0, 170 * darkness);
    rect(0, 0, width, height);

    // Draw the moon
    fill(150 + (175 * moon.brightness), 200 + (25 * moon.brightness), 255);
    ellipse(moon.x, moon.y, moon.diameter);
    //crescent
    fill(150, 200, 255);
    ellipse(moon.x + 15, moon.y, moon.diameter * .8);
    fill(0, 169 * darkness);
    ellipse(moon.x + 15, moon.y, moon.diameter * .8);

    // Draw the stars
    fill(150 + (175 * moon.brightness / 3), 200 + (25 * moon.brightness), 255);
    ellipse(770, 350, 3, 3);
    ellipse(400, 250, 3, 3);
    ellipse(700, 160, 3, 3);
    ellipse(300, 300, 3, 3);
    ellipse(50, 275, 4, 4);
    ellipse(430, 75, 2, 2);
    ellipse(120, 175, 2, 2);
    ellipse(370, 50, 12, 2); // North
    ellipse(370, 50, 2, 18); // Star
    ellipse(280, 80, 2, 2);
    ellipse(20, 80, 3, 3);


}
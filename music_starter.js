// vocal, drum, bass, and other are volumes ranging from 0 to 100

let firstRun = true;
let myImage;
let backgroundImage;

// let leftScreen = (109, 140, 244);
// let rightScreen = (190, 34, 65);
let squareXmove = 0; //blue background square animation X
let squareYmove = 100 // blue background square animation Y
let squareSize = 50; //grid square size
let squareXpos = 20; //grid square X
let squareYpos = 50; //grid square Y

let r = 0; //pills rotate

let startCol;
let endCol;


function draw_one_frame(words, vocal, drum, bass, other, counter) {

   background(24, 33, 42);

   //Maps
   {
      squareSize = map(bass, 0, 100, 20, 80);
      squareDrum = map(drum, 0, 100, 5, 60);
      squareVocal = map(vocal, 0, 100, 0, 50);
      pillBubble = map(words, 0, 100, 5, 20);
      backSquareCol = map(0, 255, 0, 1200)
      startCol = color(0, 150, 195)
      endCol = color(190, 34, 65)
   }

let lerpAmount = map(squareXmove, 0, height, 0, 1);
let interCol = lerpColor(startCol, endCol, lerpAmount);

{  
//Moving blue squares 1
   rectMode(CENTER);
   fill(interCol);
   square(10 + squareXmove, squareYmove, squareSize, 10);
   square(40 + squareXmove, 190 + squareYmove, squareSize, 10);
   square(10 + squareXmove, 390 + squareYmove, squareSize, 10);
   square(40 + squareXmove, 590 + squareYmove, squareSize, 10);

   //Moving blue squares 2
      rectMode(CENTER);
      stroke(255);
      strokeWeight(2);
      square(200 + squareXmove, 30 + squareYmove, squareSize, 10);
      square(240 + squareXmove, 230 + squareYmove, squareSize, 10);
      square(200 + squareXmove, 430 + squareYmove, squareSize, 10);
      square(240 + squareXmove, 630 + squareYmove, squareSize, 10);
   }

   //grid squares
   for (let i = 0; i < 10; i++) {
      fill(190, 34, 65);
      stroke(255);
      square(squareXpos, squareYpos + (i * 80), squareDrum, 10);

      for (let j = 0; j < 20; j++) {
         square(squareXpos + (j * 80), squareYpos + (i * 80), squareDrum, 10);
      }

      for (let k = 0; k < 20; k++) {
         fill(101, 141, 252);
         square(squareXpos + (i * 80), squareYpos + (i * 80), squareVocal, 5);

         for (let l = 0; l < 20; l++) {
            fill(101, 141, 252);
            square(squareXpos + (l * 160), squareYpos, squareVocal, 5);
            square(squareXpos, squareYpos + (l * 160), squareVocal, 5);
         }

         //Character Image
      }
      if (firstRun) {

         myImage = loadImage('girl.png');

         firstRun = false;
      }
      image(myImage, 0, 0);

      //to restart background square animation
      if (squareXmove > 1200) {
         squareXmove = 1;

      }
   }

   // //Speech bubble
   // {
   //    push()
   //    fill(200);
   //    stroke(1);
   //    rect(600, 180, 500, speechBubbleSize, 20);

   // }
   // if (speechBubbleSize > 200) {
   //    grow = false;
   // }
   // if (grow == true) {
   //    speechBubbleSize += growAmount;
   // } else {
   //    speechBubbleSize == growAmount;
   // }
   // pop()

   //Text Bubble

   if (words) {
      push()
      translate(600, 250)
      beginShape();
      fill(255)
      vertex(-105, -86);
      bezierVertex(-200, 140, -605, -160, 100, -160);
      bezierVertex(73, -160, 500, -165, 250, -160);
      bezierVertex(450, -5, 87, 28, -5, 28);
      bezierVertex(8, 47, 15, 64, 41, 72);
      bezierVertex(93, 79, -24, 62, -38, 28);
      bezierVertex(-500, -28, -200, -22, -104, -85);
      endShape()
      pop()
   }

   //Lyrics
   fill(0);
   rect(CENTER);
   textFont('Courier New', 50);
   text(words, 420, 200);

   //  push()
   // if (songIsPlaying) {
   //    fill(200);
   //    translate(width/2, height/2);
   //    rect(CENTER)
   //    rotate(angle);
   //    ellipse(0 + squareXmove, 0, 80, pillBubble);
   //    ellipse(100 + squareXmove, 100, 80, pillBubble );
   //    ellipse(200 + squareXmove, 200, 80, pillBubble);
   //    pop()
   // }

   // angle -= radians(80);

   //pills
   translate(950, 360);

   for (let i = 0; i < 10; i++) {
      rotate(r);
      fill(255, 157, 92)
      ellipse(i, 220, 30, 60);
   }


   if (songIsPlaying) {
      r = r + 0.2;
   }

   //trigger to run background square animation
   if (songIsPlaying) {
      squareXmove = squareXmove + 1;
   }



}
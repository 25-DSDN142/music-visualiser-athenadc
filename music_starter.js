
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let myImage;


let squareXmove = 1
let squareSize = 50
let squareXpos = 20
let squareYpos = 50
let squareSizes = 60
let backgroundImage;


function draw_one_frame(words, vocal, drum, bass, other, counter) {


background(24, 33, 42)



{
squareSize = map(bass, 0, 100, 20, 80)
// circleSize = map(other, 0, 100, 50, 500)
squareDrum = map(drum, 0, 100, 5, 60)
squareVocal = map(vocal, 0, 100, 0, 50)
}

rectMode(CENTER)
square(10+squareXmove, 100, squareSize, 10)
square(40+squareXmove, 300, squareSize, 10)
square(10+squareXmove, 500, squareSize, 10)
square(40+squareXmove, 700, squareSize, 10)

push() 
rectMode(CENTER)
let angle = frameCount * 1;
rotate(angle);
ellipse(0+ squareXmove, 0, 80, 40);
ellipse(60+ squareXmove, 200, 80, 40);
ellipse(120+ squareXmove, 400, 80, 40);
ellipse(180+ squareXmove, 600, 80, 40);
pop()


squareXmove = squareXmove+3



for (let i = 0; i<10; i++){
      fill(184, 89, 2)
      square (squareXpos, squareYpos + (i*80), squareDrum, 10);
   
   for (let j=0; j<20; j++){
       square (squareXpos + (j*80), squareYpos + (i*80), squareDrum, 10);
}

for (let k = 0; k<20; k++){
        fill (101, 141, 252)
        square (squareXpos + (i*80), squareYpos + (i*80), squareVocal, 5)

   for (let l=1; l<10; l++)
    square (squareXpos + (i*90), squareYpos + (i*250), squareVocal, 5)
}

if(firstRun){
   
   myImage = loadImage('girl.png')

   firstRun = false;
}

image(myImage, 0, 0)

if (squareXmove > 1200){
squareXmove = 1

}


// if (words < 70){

// squareSize = map(other, 0, 100, 20, 100)
   
// }

if (words = "c'est comme ça"){
fill(200)
stroke(1)
rect(600, 180, 500, 150, 20);
}

fill(247, 211, 111);
  textFont('Courier New', 50);
  text(words, 400, 200);

}






  


//   // Draw a black bezier curve.
//   noFill(0);
//   stroke(0);
//   strokeWeight(2);
//   bezier(200, 800, 200, 500, 400, 90, 0, 500);






// //for(let i= 0; i <5; i++){
//    circle (200 +(i*10), 250 +(i*20), 10)
// }
//   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);
  
//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 
// // changes 
//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);

}


// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let myImage;

let squareXmove = 1
let squareSize = 50

let squareXpos = 20
let squareYpos = 50
let squareSizes = 60

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(24, 33, 42)
   // line(0, 0, 1200, 1200)
   // line(0, 50, 1000, 1200)
   // line(0, 100, 800, 1200)
   // line(0, 150, 600, 1200)
   // line(0, 200, 400, 1200)
   // line(0, 250, 200, 1200)
   // line(0, 300, 0, 1200)
   // line(200, 0, 1200, 750)



squareSize = map(bass, 0, 100, 20, 100)
circleSize = map(other, 0, 500, 50, 500)
squareSizes = map(drum, 20, 50, 100, 80)

square(10+squareXmove, 200, squareSize, 10)
circle(10+circleSize, 150, circleSize, 10)
// lip(10+lipSize, 100, lipSize, 10)

squareXmove = squareXmove+3



if(firstRun){
   
   myImage = loadImage('girl.png')

   firstRun = false;
}

image(myImage, 0, 0)

if (squareXmove > 1200){
squareXmove = 1
}

// for(let i=0; i <5; i++){
//    circle (50 + (i*100), 50 + (i*150), 50)
//    circle (50 + (i*200), 50 + (i*150), 50)
// }


// let bassMap = map(bass, 0, 100, 20, 150)

for (let i = 0; i<squareSizes; i++){
 fill(184, 89, 2)
   square (squareXpos, squareYpos + (i*80), squareSizes, 10)

}
   


   fill(247, 211, 111);
  textFont('Courier New', 50);
  text(words, 500, 200)

  


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
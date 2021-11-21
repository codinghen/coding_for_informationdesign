//CLOCK LIBRABRY
//Clock Function by Christian Swinehart 


//var now = clock()

// numerical values for elements of current time
//now.hours // hour in 0–23 'military' time
//now.hour  // hour in 1–12 'am/pm' time
//now.min   // minute
//now.sec   // seconds
//now.ms    // milliseconds
//now.am    // true for hours 0-11
//now.pm    // true for hours 12-23
//
//// numerical values for elements of current date
//now.year    // the full 4-digit year
//now.month   // month number 1–12
//now.moon    // the fullness of the moon 0–1.0
//now.day     // the day 1–{28,29,30,31}
//now.weekday // the day of the week 1-7
//now.season  // the current season 1-4 (starting with spring)

// a string-based representation that can be used as an argument to clockStart
//now.timestamp // "2001/12/31 23:45:56"

// values between 0.0 and 1.0 measuring the current time's %-completion of various cycles
//now.progress.year
//now.progress.season
//now.progress.month
//now.progress.moon
//now.progress.week
//now.progress.day
//now.progress.halfday
//now.progress.hour
//now.progress.min
//now.progress.sec

// string versions of the date & time (in case you want to print it out)
//now.text.time    // "11:45:56 P.M."
//now.text.hour    // "11"
//now.text.hours   // "23"
//now.text.min     // "45"
//now.text.sec     // "56"
//now.text.ampm    // "P.M."
//now.text.date    // "31 Dec 2001"
//now.text.year    // "2001"
//now.text.season  // "Winter"
//now.text.month   // "December"
//now.text.mon     // "Dec"
//now.text.day     // "31"
//now.text.weekday // "Monday"


//1 GRID

// function setup () {
// createCanvas(800, 750);
// }

// function draw() {
//   background(245, 130, 230);

//   // grid of 24 squares
//   for (var y = 0; y < height; y += height/3) {
//     for (var x = 0; x < width; x += width/8) {
//       noFill();
//       stroke(0);
//       // noStroke(0);
//       rect(x, y, 100, 250);
//     }
//   }

// }


// 2 COLUMNS AND ROWS PLUS 2 RECTANGLES

let rows = 3;
let columns = 8;

let drawCol;
let drawRows;

function setup () {
  createCanvas(800, 750);
  background(245, 130, 230);

  let drawCol = width/columns;
  let drawRows = height/rows;
  
  for (let a = 0; a < columns; a++) {
    for (let b = 0; b < rows; b++) {
      stroke(0);
      noFill();
      // fill(245, 130, 230);
      rectMode(CORNER); 
      rect(a * drawCol, b * drawRows, drawCol, drawRows);
    }
  }

}

function draw() {

    fill(155, 90, 60);
    rect(0, 0, width/8, height/3);

    translate((width/8) * 1, height/3 * 2);
    rect(0, 0, width/8, height/3);

  }
  


// // // 2.2 ADDING ONE RECT PER SECOND

// let rows = 3;
// let columns = 8;

// let drawCol;
// let drawRows;

// function setup () {
//   createCanvas(800, 750);
//   background(245, 130, 230);

//   lastSecond = second();

//   let drawCol = width/columns;
//   let drawRows = height/rows;
  
//   for (let a = 0; a < columns; a++) {
//     for (let b = 0; b < rows; b++) {
//       stroke(0);
//       noFill();
//       // fill(245, 130, 230);
//       rectMode(CORNER); 
//       rect(a * drawCol, b * drawRows, drawCol, drawRows);
//     }
//   }

// }

// function draw() {
//   // let now = clock();

//   if(lastSecond != second()) {
//     translate(second() * 10, 0)
//     fill(155, 90, 60);
//     rect(0, 0, width/8, height/3);

// //   for (let i = 0; i < 800; i += 100) {
// //     for (let m = 0; m < 750; m += 250) {
// //       fill(155, 90, 60);
// //       // translate((width/8) * now.hours, height/3 * now-hours);
// //       rect(i, m, width/8, height/3);
// //     }
// //   }
// // }
  
// }
// lastSecond = second();
// }



// 2.3 ADDING ONE RECT 

// let rows = 3;
// let columns = 8;

// let drawCol;
// let drawRows;

// function setup () {
//   createCanvas(800, 750);
//   background(245, 130, 230);

//   lastMinute = minute();

//   let drawCol = width/columns;
//   let drawRows = height/rows;
  
//   for (let a = 0; a < columns; a++) {
//     for (let b = 0; b < rows; b++) {
//       stroke(0);
//       noFill();
//       // fill(245, 130, 230);
//       rectMode(CORNER); 
//       rect(a * drawCol, b * drawRows, drawCol, drawRows);
//     }
//   }

// }

// function draw() {
  // let now = clock();

  // if(lastSecond != second()) {
  //   translate(second() * 10, 0)
  //   fill(155, 90, 60);
  //   rect(0, 0, width/8, height/3);

//   if(lastMinute != minute()) {
//   for (let i = 0; i < 800; i += 100) {
//     // for (let m = 0; m < 750; m += 250) {
//       fill(155, 90, 60);
//       rect(i, 0, width/8, height/3);
//   }
// lastMinute = minute();
// }
// }



// 3 RANDOM COLOR

// let rows = 3;
// let columns = 8;

// let myColors = ["blue", "black"]
// let randomColor;

// let c;
// let r;

// function setup () {
//   createCanvas(800, 750);
// }

// function draw() {

//   let c = width/columns;
//   let r = height/rows;
  
//   for (let a = 0; a < columns; a++) {
//     for (let b = 0; b < rows; b++) {
//       stroke(0);
  
//       randomColor = random(myColors.length);
//       fill(myColors[randomColor]);
  
//       // fill(245, 130, 230);
//       rectMode(CORNER); 
//       rect(a * c, b * r, c, r);
//     }
//   }

// }


let imgCross;
let imgQuestionMark;

// X and Y Position of Symbols
let x = 20;
let y = 80;
let xStart = 20;

// Parameters Symbols 'Cross' and '?' 
let symbolWidth = 60;
let symbolHeight = 90;

let columnDeadOrMissing;
let columnReportedMonth;

let i;
let h;

r = xStart;
s = 80;

let sW = 3;
let RectFill = [255, 255, 255, 0];

function preload() {
	data = loadTable('MissingMigrantsGlobal_2021_Januar_NEW.csv', 'ssv', 'header');

	font = loadFont("Graphik-Regular.otf");
	imgCross = loadImage("cross.png");
	imgQuestionMark = loadImage("questionmark.png");
  }
  
  function setup() {
	createCanvas(765, 8000);
	background("black")

	console.log("Rowcount= " + data.getRowCount());
	console.log(data.columns);
  
	// Text Cause of Death
	// for (let i = 0; i < data.getRowCount(); i++) {
	//   noStroke();
	//   fill("white");
	//   let columnName = data.getString(i, "Cause of Death");
	//   textFont(font2);
	//   textSize(20);
	//   text(columnName, 20, 120 + i * 30);
	// }

	
	// JANUARY, DEFINE IF DEAD OR MISSING, CALL FUNCTION CROSS OR QUESTION MARK

	// Header January
	// textFont(font2);
	// fill('white');
	// textSize(30);
	// text('January', 35, 60);

	for (let i = 0; i < data.getRowCount(); i++) {

		// Text Dead or Missing
		// noStroke();
		// fill("white");
		// let columnName = data.getString(i, "Dead or Missing");
		// textFont(font2);
		// textSize(20);
		// text(columnName, 20, 120 + i * 30);

		// Header Month
		let columnReportedMonth = data.getString(i, "Reported Month");

		if (columnReportedMonth == 'January') {
			textFont(font);
			fill('white');
			textSize(30);
			text('January', 35, 60);
		}
		// else if(columnReportedMonth == 'February'){
		// 	textFont(font);
		// 	fill('white');
		// 	textSize(30);
		// 	text('February', 35, 60 + var);

		// }


		// Draw Symbols
	    let columnDeadOrMissing = data.getString(i, "Dead or Missing");

		if (columnDeadOrMissing == "Dead") { cross(); }
		if (columnDeadOrMissing == "Missing") { questionmark(); }

	}

	// for (let h = 0; h < data.getRowCount(); h++) {

	// 	let columnCauseOfDeath = data.getString(h, "Cause of Death");
	
	// 	if (columnCauseOfDeath == "Harsh environmental conditions / lack of adequate shelter, food, water") { rectangle0(); }
	// 	if (columnCauseOfDeath == "Vehicle accident / death linked to hazardous transport") { rectangle1(); }
	// 	if (columnCauseOfDeath == "Drowning") { rectangle2(); }
	// 	if (columnCauseOfDeath == "Sickness / lack of access to adequate healthcare") { rectangle3(); }
	// 	if (columnCauseOfDeath == "Mixed or unknown") { rectangle4(); }
	// 	if (columnCauseOfDeath == "Violence") { rectangle5(); }
	
	// }

		
		// Cause of Death if-Statement
		// let x2 = 20;
		// let y2 = 20;
		
		// let columnCauseOfDeath = data.getString(i, "Cause of Death");
		// if (columnCauseOfDeath == "Harsh environmental conditions / lack of adequate shelter, food, water") { 
		// 	textFont(font);
		// 	fill('white');
		// 	textSize(30);
		// 	text('Harsh environmental conditions / lack of adequate shelter, food, water', x2, y2 + i * 30) 
		// }

	  // Cause of Death, Array
	 	//  let CauseOfDeath = [
		// 	'Harsh environmental conditions / lack of adequate shelter, food, water', 
	 	// 	'Vehicle accident / death linked to hazardous transport', 
		// 	'Drowning', 
		// 	'Sickness / lack of access to adequate healthcare', 
		// 	'Mixed or unknown', 
		// 	'Violence'
		// ]

		// CauseOfDeath = [0];
		// CauseOfDeath = [1];
		// CauseOfDeath = [2];
		// CauseOfDeath = [3];
		// CauseOfDeath = [4];
		// CauseOfDeath = [5];

  }

// FUNCTIONS FOR SYMBOLS
  	// Function Cross
	function cross() {

		if (x > width - 50) {
			x = xStart;
			y += 100;
		}

		image(imgCross, x, y, symbolWidth, symbolHeight);
		x += symbolWidth;
	}

	// Function Question Mark
	function questionmark() {

		if (x > width - 50) {
			x = xStart;
			y += 100;
		}
	
		image(imgQuestionMark, x, y, symbolWidth, symbolHeight);
		x += symbolWidth;

	}


// FUNCTIONS FOR CAUSE OF DEATH
	  // 0 Harsh environmental conditions ..
	  function rectangle0() {
	
		if (r > width - 50) {
			r = xStart;
			s += 100;
		}
	
		fill(RectFill);
		strokeWeight(sW);
		stroke('green');
		rect(r, s, symbolWidth, symbolHeight);
	
		r += symbolWidth;

	}
	
	// 1 Vehicle accident / death linked to hazardous transport
	function rectangle1() {
	
		if (r > width - 50) {
			r = xStart;
			s += 100;
		}
	
		fill(RectFill);
		strokeWeight(sW);
		stroke('yellow');
		rect(r, s, symbolWidth, symbolHeight);
	
		r += symbolWidth;
	}
	
	
	// 2 Drowning
	function rectangle2() {
	
		if (r > width - 50) {
			r = xStart;
			s += 100;
		}
	
		fill(RectFill);
		stroke('blue');
		rect(r, s, symbolWidth, symbolHeight);
	
		r += symbolWidth;

		// if (mouseX > r && mouseX < symbolWidth && mouseY > s && mouseY < symbolHeight){
		// 	noStroke();
		// 	fill('white');
		// 	text('Drowning', 20, 20);
		// }

		// SImulated Mouse Hover / Text Cause of Death: Drowning
		// if (mouseX > 200 && mouseX < 750 && mouseY > 80 && mouseY < 380){
		// 	noStroke();
		// 	textFont(font);
		// 	textSize(30);
		// 	fill('white');
		// 	text('Drowning', 600, 60);
		// } else{
		// 	noStroke();
		// 	fill('black');
		// 	rect(600, 20, 180, 50);
		// };
	}
	
	// 3 Sickness / lack of access to adequate healthcare
	function rectangle3() {
	
		if (r > width - 50) {
			r = xStart;
			s += 100;
		}
	
		fill(RectFill);
		strokeWeight(sW);
		stroke('white');
		rect(r, s, symbolWidth, symbolHeight);
	
		r += symbolWidth;
	}
	
	// 4 Mixed or unknown
	function rectangle4() {
	
		if (r > width - 50) {
			r = xStart;
			s += 100;
		}
	
		fill(RectFill);
		strokeWeight(sW);
		stroke('purple');
		rect(r, s, symbolWidth, symbolHeight);
	
		r += symbolWidth;
	}
	
	// 5 Violence
	function rectangle5() {

		// Text Violence when Mouse is pressed
		// if(mouseIsPressed){
		// 	noStroke();
		// 	fill('red');
		// 	text('Violence', mouseX, mouseY);
		// }

		if (r > width - 50) {
			r = xStart;
			s += 100;
		}
	
		fill(RectFill);
		strokeWeight(sW);
		stroke('red');
		rect(r, s, symbolWidth, symbolHeight);
	
		r += symbolWidth;

}


  function draw() {
	//   background(0);

	noLoop();
	for (let h = 0; h < data.getRowCount(); h++) {

		let columnCauseOfDeath = data.getString(h, "Cause of Death");
	
		if (columnCauseOfDeath == "Harsh environmental conditions / lack of adequate shelter, food, water") { rectangle0(); }
		if (columnCauseOfDeath == "Vehicle accident / death linked to hazardous transport") { rectangle1(); }
		if (columnCauseOfDeath == "Drowning") { rectangle2(); }
		if (columnCauseOfDeath == "Sickness / lack of access to adequate healthcare") { rectangle3(); }
		if (columnCauseOfDeath == "Mixed or unknown") { rectangle4(); }
		if (columnCauseOfDeath == "Violence") { rectangle5(); }
	
	}


}

// IDEA 2
// build a class with constructor function

// causeofdeath0.display();
// noStroke();
// fill('white');
// text('Harsh environmental conditions / lack of adequate shelter, food, water', 20, 20);

// let causeofdeath0;

// causeofdeath0 = new CauseOfDeath0Text();

// IDEA FOR HOVERING
// for loop for cause of death, if ... draw rect + if mouse over rect text cause of death at bottom of page
// GLOBAL VARIABLES
let g;							// grid object
let sheep;					// sheep object
let food;						// food object
let start = 0;			// 0: pause, 1: start game
let instr;					// instructions image

// canvas settings
let N = 10;					// nbr of cells each row and col
let scl = 61;				// scale of each cell
let edge = 50;			// thickness of edge of canvas

// level settings
let score;						// current score
let level;						// current level
let frmCount;					// counts each frame (determine speed)
let speed;						// current speed of movement (parrot)
let scoreLv2 = 10;		// score needed for reaching Lv2
let scoreLv3 = 15;		//           ...for reaching Lv3
let speedLv1 = 40;		// speed in lv1
let speedLv2 = 23;			//    ...in lv2
let speedLv3 = 5;			//    ...in lv3



function setup() {
	// GRAPHIC SETTINGS
	g = new Grid(N, scl, edge);
	// create canvas
	let myCanvas = createCanvas(g.nPxFull, g.nPxFull);
	myCanvas.parent("main"); /* display scetch in html element with id "main"*/
	// noLoop();
	instr = loadImage("scetch/res/instructions.png");
	// initialize players and incentives
	initialize();
}

function draw() {
	// check if game is currently running
	if (start===1) {	// game running!
		g.paintGrid();
		g.paintScore(score, level);
		sheep.show();
		food.show();
		parrot.show();
		// move parrot
		frmCount++;
		if (frmCount===speed) {
			frmCount = 0;
			parrot.makeMove(sheep);
		}
		// is food eaten?
		if (sheep.x===food.x && sheep.y===food.y) {
			food.getEaten();
		}
		// has parrot eaten sheep?
		if (sheep.x===parrot.x && sheep.y===parrot.y) {
			endGame();
		}
		// adjust level (if necessary)
		checkLevel();
	} else if (start===0) { // game not started, show instructions
		g.paintGrid();
		image(instr,edge+25,edge+25);
	}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    sheep.move("LEFT");
  } else if (keyCode === RIGHT_ARROW) {
    sheep.move("RIGHT");
  } else if (keyCode === UP_ARROW) {
    sheep.move("UP");
  } else if (keyCode === DOWN_ARROW) {
    sheep.move("DOWN");
  } else if (keyCode === ENTER) {
		loop();
		start = 1;
	} else if (keyCode === ESCAPE) {
		initialize();
		start = 0;
		loop();
	}
}

// cheat function
function mousePressed() {
	if (start===1) {
		sheep.x = ceil((mouseX-g.edge)/g.scl);
		sheep.y = ceil((mouseY-g.edge)/g.scl);
	}
}

function checkLevel() {
	if (score===scoreLv2 && speed===speedLv1) {
		console.log('LEVEL2 reached');
		parrot.img = loadImage("scetch/res/parrotLv2_61.png");
		level = 2;
		frmCount = 0;
		speed = speedLv2;
	} else if (score===scoreLv3 && speed===speedLv2) {
		console.log('LEVEL3 reached');
		parrot.img = loadImage("scetch/res/parrotLv3_61.png")
		level = 3;
		frmCount = 0;
		speed = speedLv3;
	}
}

function initialize() {
	// initialize objects
	sheep = new Sheep(10,10,g);
	food = new Incentive(5,5,g);
	parrot = new Parrot(1,1,g);
	// initialize variables
	score = 0;
	frmCount = 0;
	speed = speedLv1;
	level = 1;
}

function endGame() {
	noLoop();
	fill(0);
	noStroke();
	textSize(80);
	text('GAME OVER', 100, 150);
	textSize(50);
	text('SCORE: ' + score, 100, 220);
	textSize(30);
	text('(to restart press ESC)', 100, 280);
}

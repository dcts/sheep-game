// QUADRATIC GRID OBJECT
// col and row counting starts at 1 (not at 0)
// can create a canvas with the needed size

function Grid(N,scl,edge) {
  this.edge    = edge;
  this.scl     = scl;
  this.N       = N;
  this.nPx     = N * scl;
  this.nPxFull = N * scl + (2*edge);

  this.paintGrid = function() {
    // paint outter Grid
    fill(50);
    noStroke();
    rect(0, 0, this.nPxFull, this.nPxFull);
    // paint inner Grid
    fill(255);
    noStroke();
    rect(this.edge, this.edge, this.nPx, this.nPx);
  }

  this.paintScore = function(score, level) {
    // reset previous scores
    this.paintGrid();
    // print new score
    fill(255);
    noStroke();
  	textSize(30);
    var xPos = this.nPxFull - 240;
    var yPos = this.nPxFull - 13;
  	text('SCORE:   '+score, xPos, yPos);
  	// print level
    text('LEVEL '+level, xPos, 35);
  }

  this.imgToCell = function(img,x,y) {
    var xPos = x*this.scl - this.scl + this.edge;
    var yPos = y*this.scl - this.scl + this.edge;
    image(img, xPos, yPos);
  }

  // NOT USED CODE TO PAINT CELL
  // this.paintCell = function(x,y) {
  //   if (x>this.N || x<1) { throw "x value illegal!";}
  //   if (y>this.N || y<1) { throw "y value illegal!";}
  //   var xPos = x*this.scl - this.scl + edge;
  //   var yPos = y*this.scl - this.scl + edge;
  //   rect(xPos, yPos, this.scl, this.scl);
  // }
}

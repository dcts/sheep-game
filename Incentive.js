
function Incentive(x,y,g) {
  this.img = loadImage("data/quark61.png");
  this.x = x;
  this.y = y;
  this.g = g;

  this.show = function() {
    this.g.imgToCell(this.img, this.x, this.y);
  }
  // increase score and generate new incentive (randomly)
  this.getEaten = function() {
    this.x = ceil(Math.random()*this.g.N);
    this.y = ceil(Math.random()*this.g.N);
    score++;
  }
  // NOT USED (!) - not sure if working
  // random movement of incentive in one of 4 directions!
  this.randomMove = function() {
    let rand = ceil(Math.random()*4);
    if (rand===1) { // move RIGHT
      this.x = Math.min(this.x+1, this.g.N);
    } else if (rand===2) {  // move LEFT
      this.x = Math.max(this.x-1, 1);
    } else if (rand===3) {  // move DOWN
      this.y = Math.min(this.y+1, this.g.N);
    } else if (rand===4) {  // move UP
      this.y = Math.max(this.y-1, 1);
    }
  }
  // NOT USED (!) - not sure if working
  // run away from sheep!
  this.runAway = function(sheep) {
  	// motion on x-axis
  	let xDiff = (sheep.x - this.x);
  	let yDiff = (sheep.y - this.y);
  	if (Math.abs(xDiff)<=Math.abs(yDiff)) {
      let change = Math.min(Math.max(xDiff,-1),1);
  		this.x = Math.min(Math.max(this.x-change,1),this.g.N);
  	} else {
  		let change = Math.min(Math.max(yDiff,-1),1);
  		this.y = Math.min(Math.max(this.y-change,1),this.g.N);
  	}
  }
}

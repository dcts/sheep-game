
function Parrot(x,y,g) {
  this.img = loadImage("data/parrotLv1_61.png");
  this.x = x;
  this.y = y;
  this.g = g;

  this.show = function() {
    this.g.imgToCell(parrot.img, parrot.x, parrot.y);
  }

  // move towards Sheep
  this.makeMove = function(sheep) {
  	let xDiff = (sheep.x - this.x);
  	let yDiff = (sheep.y - this.y);
  	if (Math.abs(xDiff)>=Math.abs(yDiff)) {
  		let change = Math.min(Math.max(xDiff,-1),1);
  		this.x = this.x+change;
  	} else {
  		let change = Math.min(Math.max(yDiff,-1),1);
  		this.y = this.y+change;
  	}
  }
}

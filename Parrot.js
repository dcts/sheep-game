
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
  	var xDiff = (sheep.x - this.x);
  	var yDiff = (sheep.y - this.y);
  	if (Math.abs(xDiff)>=Math.abs(yDiff)) {
  		var change = Math.min(Math.max(xDiff,-1),1);
  		this.x = this.x+change;
  	} else {
  		var change = Math.min(Math.max(yDiff,-1),1);
  		this.y = this.y+change;
  	}
  }
}

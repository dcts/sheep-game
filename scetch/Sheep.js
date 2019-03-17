
function Sheep(x,y,g) {
  this.img = loadImage("scetch/res/sheep61.png");
  this.x = x;
  this.y = y;
  this.g = g;

  this.show = function() {
    this.g.imgToCell(this.img, this.x, this.y);
  }

  this.move = function(dir) {
    if (dir === "RIGHT") {
      this.x = Math.min(this.g.N, Math.max(1, this.x+1));
    } else if (dir === "LEFT") {
      this.x = Math.min(this.g.N, Math.max(1, this.x-1));
    } else if (dir === "UP") {
      this.y = Math.min(this.g.N, Math.max(1, this.y-1));
    } else if (dir === "DOWN") {
      this.y = Math.min(this.g.N, Math.max(1, this.y+1));
    }
  }
}

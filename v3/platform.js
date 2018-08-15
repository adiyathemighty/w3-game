var Platform = function(x, y, width, height) {
  Component.call(this, x, y, width, height);
  this.drawPlatform = function() {
    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.restore();
  };
  this.newPos = function() {
    this.posX -= 1 * playerHorizontalMovementFactor;
  };
};

Platform.prototype = Object.create(Component.prototype);
Platform.prototype.constructor = Platform;

function generatePlatforms(numOfPlatf) {
  var startingX = canvas.width - 300;
  //find position to put platform
  for (var i = 0; i < numOfPlatf; i++) {
    randomHeight = generateRandomNumber(world.ground, 300);
    randomLenght = generateRandomNumber(100, 50);
    platforms.push(new Platform(startingX + 300 * i, randomHeight, randomLenght, 10));
  }
}

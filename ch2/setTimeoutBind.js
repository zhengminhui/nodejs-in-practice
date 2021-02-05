function Bomb() {
  this.message = 'Boom!';
}

Bomb.prototype.explode = function () {
  console.log(this.message);
};

const bomb = new Bomb();

setTimeout(bomb.explode.bind(this), 1000);
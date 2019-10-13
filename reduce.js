Array.prototype.reduce = function(fn, initial) {
  if (!this.length) return initial;
  let last = initial;
  if (initial!==undefined ||initial!==null) {
    for (let i = 0; i < this.length; i++) {
      last = fn(last, this[i]);
    }
  } else {
    last = this[0];
    for (let i = 1; i < this.length; i++) {
      last = fn(last, this[i]);
    }
  }
  return last;
};

const result = [1, 2, 3, 4].reduce((prev, current) => prev + current);

console.log(result);

function peak(array) {
  for (let i = 1; i < array.length-1; i++) {
    const lhs = array.slice(0, i).reduce(add, 0);
    const rhs = array.slice(i+1).reduce(add, 0);
    if (rhs == lhs){
      return i;
    }
  }
  return -1;
}

function add(accumulator, a) {
  return accumulator + a;
}

module.exports = peak
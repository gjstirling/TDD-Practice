function assertEquals(array) { 
  if (array.length < 3){
    return -1;
  }
  else {
    return findIndex(array);
  }
}

// condition, when sum of array[0,i] == array[i+1, array.length] return i 


function findIndex(array) {
  for (let i = 1; i < array.length-1; i++) {
    const lhs = array.slice(0, i).reduce(add, 0);
    const rhs = array.slice(i+1).reduce(add, 0);
    if (rhs == lhs){
      return i;
    }
  } 
}

function add(accumulator, a) {
  return accumulator + a;
}


module.exports = assertEquals
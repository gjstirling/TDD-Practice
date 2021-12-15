function assertEquals(array) { 
  if (array.length < 3){
    return -1;
  }
  else {
    return findIndex(array);
  }
}

function findIndex(array) {
    if (array.first == array.last){
      return 1;
    }
}

module.exports = assertEquals
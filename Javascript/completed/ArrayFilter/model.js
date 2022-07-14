function arrayFilter(array){
  return array.filter(function(n){
    return n % 2 == 0;
  });
}

module.exports = arrayFilter
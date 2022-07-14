function partList(array){
  let length = array.length;
  if (length == 1) {
    return array; 
  }
  else { 
    var arrayContainer = []
      for (let i = 0; i < (length-1); i++) {
        arrayContainer.push(arrayCluster(array, length, (i+1)))
      } 
    return arrayContainer;
  }
}

function arrayCluster(array, length, index){
  return [array.slice(0,index).join(" "), array.slice(index, length).join(" ")]
}

module.exports = partList
function partList(array){
  let length = array.length;
  if (length == 1) {
    return array; 
  }
  else { 
    var arrayContainer = []
    var index = 1
      for (let i = 0; i < (length-1); i++) {
        arrayContainer.push(arrayCluster(array, length, index))
        index += 1;
      } 
    console.log(arrayContainer);
    return arrayContainer;
  }
}

function arrayCluster(array, length, index){
  return [array.slice(0,index).join(" "), array.slice(index, length).join(" ")]
}

module.exports = partList
function XO(string){
  let x = 0 
  let o = 0 
  string.split("").length;
  for (var i = 0; i < string.split("").length; i++) {
    if (findCharacter(string, i) == "o") {
      o += 1;
    }
    else if (findCharacter(string, i) == "x") {
      x += 1;
    }
  }
  const result = (x == o) ? true : false
  return result;
}

function findCharacter(string, i) {
  return string.split("")[i].toLowerCase()
}

module.exports = XO

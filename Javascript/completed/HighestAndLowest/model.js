function highAndLow(numbers){
  const num = numbers.split(" ").sort(function(a, b){return a-b}) 
  return `${num[0]} ${num[num.length - 1]}`
}

module.exports = highAndLow
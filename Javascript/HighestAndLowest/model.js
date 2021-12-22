function highAndLow(numbers){
  const num = numbers.split(" ") 
  return `${num[0]} ${num[num.length - 1]}`
}

module.exports = highAndLow
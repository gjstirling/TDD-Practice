function highAndLow(numbers){
  const num = numbers.split(" ")
  const lastNum = num.length  
  return `${num[0]} ${num[lastNum - 1]}`
}

module.exports = highAndLow
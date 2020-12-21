const add = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num )
}

module.exports = add
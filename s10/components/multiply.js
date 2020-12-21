const multiply = (...numbers) => {
  return numbers.reduce((sum, num) => sum * num)
}

// module.exports.multiply = multiply     v1
// module.exports.description = 'descr'    v1

module.exports = {
  multiply,
  description: "some descr"
}
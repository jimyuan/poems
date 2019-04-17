var getCount = function(arr) {
  return arr.reduce(function (acc, item) {
    acc[item] = acc[item] + 1 || 1
    return acc
  }, {})
}

module.exports = {
  getCount: getCount
}
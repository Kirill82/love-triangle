/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var countTriangels = 0;
  var corners = [];
  for (let i = 0; i < preferences.length; i++) {
    if (corners.indexOf(i) == -1) {
      let cornerOne = preferences[i];
      let cornerTwo = preferences[cornerOne - 1];
      let cornerThree = preferences[cornerTwo - 1];
      if ((cornerThree - 1) == i && cornerOne != cornerTwo) {
        countTriangels += 1;
        corners.push(i, cornerOne - 1, cornerTwo - 1);
      }
    }
  }
  return countTriangels;
};

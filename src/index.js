module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  const newMatrix = [];
  let row = 0;

  for (let i of matrix) {
    row += 1;
    if(row % 2 == 0) { i.reverse(); row = 0; }
      for (const j of i) {
        newMatrix.push(j);
      }
  }
  return newMatrix;
}
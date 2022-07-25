
// You should implement your task here.

const matrix = [
  [ 1, 2, 3 ],
  [ 4, 15, 6 ],
  [ 7, 8, 9 ],
  [99, 98, 97]
 ];


module.exports = function towelSort (matrix) {
  if(matrix === undefined) return []
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

console.log(module.exports(matrix));

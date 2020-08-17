const metric = [
  [0,1,0,0],
  [0,1,0,0],
  [0,1,0,0],
  [0,0,0,0]
]

const result = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]

const result2 = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

//nested for loop, checks each cell after another
for (let rowNumber=0; rowNumber<metric.length; rowNumber++) {
  for (let columNumber=0; columNumber<metric[rowNumber].length; columNumber++) {

    let neighborCount = 0;
    //checks if neighbor is above
    let hasNeighborAbove = rowNumber > 0
    //checks if neighbors is below
    let hasNeighborBelow = rowNumber < metric.length - 1
    //checks if neighbors is left
    let hasNeighborToLeft = columNumber > 0
    //checks if neighbors is right
    let hasNeighborToRight = columNumber < metric[rowNumber].length - 1

    if (hasNeighborAbove) {
      // count neighbors in row above -> add to neighborCount
      neighborCount += metric[rowNumber-1][columNumber]
    }
    if (hasNeighborBelow) {
      // count neighbors in row below
      neighborCount += metric[rowNumber+1][columNumber]
    }
    if (hasNeighborToLeft) {
      // count neighbors in column on left side
      neighborCount += metric[rowNumber][columNumber-1]
    }
    if (hasNeighborToRight) {
      // count neighbors in column on right side
      neighborCount += metric[rowNumber][columNumber+1]
    }
    if (hasNeighborAbove && hasNeighborToLeft) {
      // count left upper diagonal
      neighborCount += metric[rowNumber-1][columNumber-1]
    }
    if (hasNeighborAbove && hasNeighborToRight) {
      // count right upper diagonal
      neighborCount += metric[rowNumber-1][columNumber+1]
    }
    if (hasNeighborBelow && hasNeighborToLeft) {
      // count left down diagonal
      neighborCount += metric[rowNumber+1][columNumber-1]
    }
    if (hasNeighborBelow && hasNeighborToRight) {
      // count right down diagonal
      neighborCount += metric[rowNumber+1][columNumber+1]
    }
    //from before: result[rowNumber][columNumber] = neighborCount;
    //not working, some logical error somewhere, but can't concentrate anymore, sorry!
    if (metric[rowNumber][columNumber] === 0){
    // A new inhabitant is born into an empty cell that has exactly 3 neighbours
      if (neighborCount === 3){
        result[rowNumber][columNumber] = 1;
      } else {
        // An inhabitant of a cell survives if it has 2 or 3 neighbours.
        if (neighborCount === 2 || neighborCount === 3 ) {
          result [rowNumber][columNumber] = 1;
        } else {
          result [rowNumber] [columNumber] = 0;
        }
      }
    }
  }
}
console.log(result)

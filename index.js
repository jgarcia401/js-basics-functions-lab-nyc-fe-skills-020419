// Code your solution in this file!

const headquartersBlock = 42

const feetPerBlock = 264

function distanceFromHqInBlocks(block) {
  
  return Math.abs(block - headquartersBlock)
  
  
}

function distanceFromHqInFeet(block) {
  
  return distanceFromHqInBlocks(block) * feetPerBlock
  
}

function distanceTraveledInFeet(block1, block2) {
  
  return Math.abs((block1 * feetPerBlock) - (block2 * feetPerBlock))
}


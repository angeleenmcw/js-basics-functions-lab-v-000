function distanceFROMHqInBlocks(block) {
  if (block >= 42) {
    return -42;
    } else if (block < 42) {
      return 42 - block;
    }
  }

function distanceFromHqInFeet(block) {
  return distanceFROMHqInBlocks * 264;
}

function distanceTravelledInFeet(A,Z) {
  if (Z >= A) {
    return Z - A * 264;
  } else {
    return A - B * 264;
  }
  
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet()
}
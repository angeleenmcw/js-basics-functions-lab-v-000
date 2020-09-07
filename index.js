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
  const distance = distanceTravelledInFeet(start, end);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && < 2000) {
      return distance - 400 * .02;
    } else if (distance > 2000 && < 2500) {
      return 45;
    } else if (distance >= 2500) {
      return 'cannot travel that far';
    } 
  }
const generateField = (fieldLength) => {
  const mainArray = [];

  for (let i = 0; i < fieldLength; i++) {
    const subArray = [];
    for (let j = 0; j < fieldLength; j++) {
      // Randomly select an element for the subarray
      const randomNum = Math.random();

      if (randomNum < 0.3) {
        subArray.push('O');
      } else if (randomNum < 1.0) {
        subArray.push('░');
      }
    }

    // Add the subarray to the main array
    mainArray.push(subArray);
  }

  // Randomly place 'pathCharacter'
  const randomRowIndex = Math.floor(Math.random() * fieldLength);
  const randomColIndex = Math.floor(Math.random() * fieldLength);
  const currentCoordinates = [randomRowIndex, randomColIndex];
  mainArray[currentCoordinates[0]][currentCoordinates[1]] = '*';

  // Randomly place 'hat'
  let hatRowIndex, hatColIndex;
  do {
    hatRowIndex = Math.floor(Math.random() * fieldLength);
    hatColIndex = Math.floor(Math.random() * fieldLength);
  } while (hatRowIndex === randomRowIndex && hatColIndex === randomColIndex);
  mainArray[hatRowIndex][hatColIndex] = '^';

  return [mainArray, currentCoordinates[0], currentCoordinates[1]];
};

module.exports.generateField = generateField;

function generateArray(length) {
  // Create the main array
  const mainArray = [];

  // Generate the subarrays
  for (let i = 0; i < length; i++) {
    const subArray = [];
    for (let j = 0; j < length; j++) {
      // Randomly select an element for the subarray
      const randomNum = Math.random();

      if (randomNum < 0.3) {
        subArray.push('░');
      } else if (randomNum < 0.6) {
        subArray.push('O');
      }
    }

    // Add the subarray to the main array
    mainArray.push(subArray);
  }

  // Randomly place 'pathCharacter'
  const randomPathRowIndex = Math.floor(Math.random() * length);
  const randomPathColIndex = Math.floor(Math.random() * length);
  mainArray[randomPathRowIndex][randomPathColIndex] = '*';

  // Randomly place 'hat'
  let hatRowIndex, hatColIndex;
  do {
    hatRowIndex = Math.floor(Math.random() * length);
    hatColIndex = Math.floor(Math.random() * length);
  } while (hatRowIndex === randomRowIndex && hatColIndex === randomColIndex);
  mainArray[hatRowIndex][hatColIndex] = '^';

  return mainArray;
}

// Example usage
const arrayLength = 5; // Specify the length of the main array and subarrays
const generatedArray = generateArray(arrayLength);
console.log(generatedArray);

module.exports.generateArray = generateArray;

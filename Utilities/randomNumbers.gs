/**
 * @description This script demonstrates how to generate random numbers in JavaScript.
 *
 * Note: This uses the standard `Math.random()` function, as there is no specific
 * `Utilities` service method for generating random numbers.
 */

/**
 * Generates a random integer between a minimum (inclusive) and maximum (inclusive) value.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} A random integer within the specified range.
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description Demonstrates various ways to use the random number generator.
 */
function demonstrateRandomNumberGeneration() {
  // Example 1: Generate a random integer between 1 and 100
  const randomNumber = getRandomInt(1, 100);
  Logger.log(`A random number between 1 and 100: ${randomNumber}`);

  // Example 2: Simulate a six-sided die roll
  const dieRoll = getRandomInt(1, 6);
  Logger.log(`Simulated die roll: ${dieRoll}`);

  // Example 3: Pick a random item from an array
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  const randomIndex = getRandomInt(0, colors.length - 1);
  const randomColor = colors[randomIndex];
  Logger.log(`Randomly selected color: ${randomColor}`);
}
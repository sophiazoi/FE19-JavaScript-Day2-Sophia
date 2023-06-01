// Array of favorite foods
let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

// Function to choose a random food
function randomFood() {
  // Generate a random index within the range of the favoriteFoods array
  let randomIndex = Math.floor(Math.random() * favoriteFoods.length);

  // Return the randomly chosen food
  return favoriteFoods[randomIndex];
}

// Call the randomFood function to get a random food
let randomFavoriteFood = randomFood();

// Print the randomly chosen favorite food
console.log("Random Favorite Food:", randomFavoriteFood);

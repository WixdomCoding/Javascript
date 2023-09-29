console.log("\nAllergies Code:\n");

const allergens = {
  cats: 128,
  pollen: 64,
  chocolate: 32,
  tomatoes: 16,
  strawberries: 8,
  shellfish: 4,
  peanuts: 2,
  eggs: 1,
};

const allergicTo = (score) => {
  const allergies = [];

  if (score > 255) {
    score %= 256;
  }

  for (const allergen in allergens) {
    if (score >= allergens[allergen]) {
      allergies.push(allergen);
      score -= allergens[allergen];
    }
  }

  if (allergens.eggs === 1 && score === 1) {
    allergies.push("eggs");
  }

  return allergies;
};

const userInput = parseInt(prompt("Enter the allergy score:"), 10);

if (!isNaN(userInput)) {
  const allergies = allergicTo(userInput);

  if (allergies.length > 0) {
    console.log("Allergic to:");
    console.log(allergies.join(", "));
  } else {
    console.log("Not allergic to anything.");
  }
} else {
  console.log("Invalid input. Please enter a valid allergy score.");
}

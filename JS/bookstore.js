console.log("\nBookstore Code:\n");

const discounts = {
  "1": 0,
  "2": 0.05,
  "3": 0.10,
  "4": 0.20,
  "5": 0.25,
};

function calculateCost(books) {
  const uniqueBooks = Array.from(new Set(books));
  let totalCost = 0;

  while (uniqueBooks.length > 0) {
    const bookCount = uniqueBooks.length;
    const discount = discounts[bookCount] || 0;
    const price = bookCount * 800 * (1 - discount);

    totalCost += price;

    if (bookCount === 5) {
      uniqueBooks.pop();
      uniqueBooks.pop();
      uniqueBooks.pop();
    } else {
      uniqueBooks.shift();
    }
  }

  const costInCents = totalCost.toFixed(0);
  const costInDollars = (totalCost / 100).toFixed(2);

  return `${costInCents} cents or $${costInDollars}`;
}

console.log(calculateCost(["A", "A", "B", "B", "C", "C", "D", "E"]));

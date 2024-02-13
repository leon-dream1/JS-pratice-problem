

function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Invalid Number";
  }

  totalMoney = ticketSale * 120 - (500 + 8 * 50);
  return totalMoney;
}

console.log(calculateMoney(-130));

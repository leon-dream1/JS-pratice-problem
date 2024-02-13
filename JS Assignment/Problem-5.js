function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalEarnMoney = 0;
  for (const money of arr) {
    if (typeof money !== "number") {
      return "invalid input";
    }

    if (money >= 3000) {
      const totalMoneyAfterVat = money - money * 0.2;
      totalEarnMoney = totalEarnMoney + totalMoneyAfterVat;
    } else {
      totalEarnMoney = totalEarnMoney + money; //3000
    }
  }

  let totalSavings = totalEarnMoney - livingCost;

  totalSavings = totalSavings >= 0 ? totalSavings : "earn more";

  return totalSavings;
}

console.log(monthlySavings(100, [ 900 , 2700 , 3400]));

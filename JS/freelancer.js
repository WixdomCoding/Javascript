console.log("\nFreelancer:")

const ratePerDay = rate => {
    return rate * 8;
}
console.log(ratePerDay(89));

const daysInBudget =  (a, b) => {
    return Math.floor(a / b);
}
console.log(daysInBudget(20000, ratePerDay(89)));


const priceWithMonthlyDiscount = (rate, days, discount) => {
    const billableDaysInMonth = 22;
    const dayRate = ratePerDay(rate);
    const dayRateDiscounted = dayRate * discount;
    const remainingDays = days % billableDaysInMonth;
    const remainingDaysPrice = remainingDays * dayRate;
    const discountedDays = days - remainingDays;
    const discountedDaysPrice = discountedDays * (dayRate - dayRateDiscounted);

    return Math.ceil(discountedDaysPrice + remainingDaysPrice);
};
console.log(priceWithMonthlyDiscount(89, 230, 0.42));
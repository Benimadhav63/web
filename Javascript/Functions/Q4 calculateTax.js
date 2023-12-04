// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax(income){
    if(income<=300000) return 0
    if(income>300000 && income<=600000) return 0.05*income      // 5% tax
    if(income>600000 && income<=900000) return 0.10*income      // 10% tax
    if(income>900000 && income<=1200000) return 0.15*income     // 15% tax
    if(income>1200000 && income<=1500000) return 0.20*income    // 20% tax
    if(income>1500000) return 0.30*income                       // 30% tax
}
console.log(calculateTax(350000))
console.log(calculateTax(650000))
console.log(calculateTax(950000))
console.log(calculateTax(1250000))
console.log(calculateTax(1550000))

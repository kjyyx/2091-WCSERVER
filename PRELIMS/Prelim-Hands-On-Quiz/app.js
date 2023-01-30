//Author: Kenji P. Jaculbia
var calc = require('./calculation.js');

var rate = 300;
var hours = 4;
var days = 6;
var taxrate = 0.1;
var sss = 1200;
var pagibig = 300;
var philhealth = 400;

var grossPay1 = calc.multiply(rate, hours);
var grossPay2 = calc.multiply(grossPay1, days);
var tax = calc.multiply(grossPay2, taxrate);
var deduction = calc.add(tax, sss);
var deduction2 = calc.add(pagibig, philhealth);
var deduction3 = calc.add(deduction, deduction2);
var netsal = calc.subtract(grossPay2, deduction3);

console.log('The Gross Income is: ' + grossPay2);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig fund: ' + pagibig);
console.log('PhilHealth: ' + philhealth);
console.log('Total Deductions: ' + deduction3);
console.log('The Net Salary is: ' + netsal);

// Gross: Rate * Hours * Days = 7200
// Deductions: Tax(0.10 * gross) + SSS + Pag-Ibig + PhilHealth = 2620
// Net Sal: Gross – Deductions =  4580

//Author: Kenji P. Jaculbia
var calc = require('./calculation.js'); //Import calculation.js

//Declaring different variables to be used for calculating the desired output of the program.
var rate = 300;
var hours = 4;
var days = 6;
var taxrate = 0.1;
var sss = 1200;
var pagibig = 300;
var philhealth = 400;

//Invoking multiply(), add(), and subtract () function with 2 parameters namely a and b.
var grossPay1 = calc.multiply(rate, hours);
var FgrossPay2 = calc.multiply(grossPay1, days);
var Ftax = calc.multiply(FgrossPay2, taxrate);
var deduction = calc.add(Ftax, sss);
var deduction2 = calc.add(pagibig, philhealth);
var Fdeduction3 = calc.add(deduction, deduction2);
var Fnetsal = calc.subtract(FgrossPay2, Fdeduction3);

//Printing out the output with the final variables to be used.
console.log('The Gross Income is: ' + FgrossPay2);
console.log('Tax: ' + Ftax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig fund: ' + pagibig);
console.log('PhilHealth: ' + philhealth);
console.log('Total Deductions: ' + Fdeduction3);
console.log('The Net Salary is: ' + Fnetsal);

// Gross: Rate * Hours * Days = 7200
// Deductions: Tax(0.10 * gross) + SSS + Pag-Ibig + PhilHealth = 2620
// Net Sal: Gross – Deductions =  4580

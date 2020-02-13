let futureValue = 0;
let investment = 0;
let rate = 0;
let years = 0;
let i;

investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
while (isNaN(investment)) {
    investment = window.prompt("Please enter a valid numeric number");
} 

rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
while (rate < 0 || rate > 6) {
    rate = window.prompt("Please enter a realistic % rate");
} 

years = parseInt(window.prompt("Enter number of years"));
while (years < 1 || years > 30) {
    years = window.prompt("Enter number of years between 1 -30");
} 


futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
}
window.document.write("Investment amount: " + investment + "<br>");
window.document.write("Interest rate: " + rate + "<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future value: $ " + futureValue.toFixed(2));
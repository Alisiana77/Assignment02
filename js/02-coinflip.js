/* let coinFlip = (Math.random());
window.console.log(coinFlip);
let choice = prompt("Select heads or tails H/T ?");
if (coinFlip < 0.5 ) {
    window.document.write("Heads");
} else if (coinFlip > 0.5) {
    window.document.write("Tails");
}
if (choice == "H" && coinFlip < 0.5 ) {
    window.alert("You win!");
} else if (choice == "H" && coinFlip > 0.5 ) {
    window.alert("You lose!");
} else if (choice == "T" && coinFlip < 0.5) {
    window.alert("You lose!");
} else if (choice == "T" && coinFlip > 0.5) {
    window.alert("You win!");
}
*/

let coinFlip = (Math.round(Math.random()));
window.console.log(coinFlip);
let choice = prompt("Select heads or tails H/T ?");
if (coinFlip == true ) {
    window.document.write("tails");
} else if (coinFlip == false) {
    window.document.write("heads");
}
if (choice == "H" && coinFlip == false) {
    window.alert("You win!");
} else if (choice == "H" && coinFlip == true ) {
    window.alert("You lose!");
} else if (choice == "T" && coinFlip == false) {
    window.alert("You lose!");
} else if (choice == "T" && coinFlip == true) {
    window.alert("You win!");
}

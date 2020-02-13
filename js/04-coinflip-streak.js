let coinFlip;
let x = 0
do { x++;
    coinFlip = (Math.round(Math.random()));
    if (coinFlip == 0) {
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
}
while ( coinFlip == 0 );
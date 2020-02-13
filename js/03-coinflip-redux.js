let coinFlip;
for ( x = 0; x < 10; x++) {
    coinFlip = (Math.round(Math.random()));
    if ( coinFlip == 0) {
        window.console.log("Heads")
    } else {
        window.console.log("Tails")
    }
}

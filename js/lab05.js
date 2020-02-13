
let miles, gallons, mpg, again = "y";

do {
    miles = parseFloat(window.prompt("Enter miles drivern."));
    gallons = parseFloat(window.prompt("Enter size of tank in gallon"));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        window.document.write("Miles per gallons: " + parseInt(mpg) + "<br>");
    } else {
        window.alert("One or both entries are invalid.");
    }
    again = window.prompt("Repeat entry? (y/n)");
    while (again !== "y" && again !== "n") { 
        again = window.prompt("Repeat entry? (y/n)");
    }
} while (again === "y");
window.document.write("The application has terminated");
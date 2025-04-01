let welcomeDisplay = "Welcome to BUGWORLD!"//This demonstrates using a string as learned in Values, Data Types, and Operations
console.log(welcomeDisplay);
//Displaying a welcome message

let userName = "BigBugGuy007"
if (userName.length >= 5) {console.log("Valid Username.")}//This demonstrates using the .length function as learned in Stringing Characters Together
else {console.log("Username too short. Use at least 6 characters.")} //Checking the potential username for a valid length.
//This "if" "else" statement also a demonstration of a boolean as covered in Control Structures and Logic

let loxoscelesGenusSpeciesList = ["Loxosceles reclusa", "Loxosceles apachea", "Loxosceles arizonica", "Loxosceles blanda", "Loxosceles devia", "Loxosceles deserta", "Loxosceles laeta", "Loxosceles rufescens", "Loxosceles acuta", "Loxosceles alamosa", "Loxosceles barbara" ];
console.log("Species of the Loxosceles Genus found in the United States:");
for (let species of loxoscelesGenusSpeciesList) {console.log(species)} //This demonstrates the use of  a "for...of" loop as learned in Working with Loops
//lists Species found in the united states of genus loxosceles

let insectSightings = [];//This demostrates using square brackets to create an array as learned in Builing Arrays.
insectSightings.push("Spotted Lanternfly", "Brown Recluse", "Black Widow")//This demonstrates using .push to add things to an array as learned in Using Arrays
console.log(insectSightings);//Creating an array of found insects by user.
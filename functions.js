console.log("functions");

// function expressions
var a = function() {
    console.log(3);
}

// function declarations
function b() {
    console.log("b", 2);
}

var num = 3;

function numPrinter(monkeyButt){
    console.log("my number: ", monkeyButt);
}

numPrinter(num);
numPrinter(5);
numPrinter("turtle");

function cat(){
    return "love them";
}

// functions exercise

var instructorPets = [
    {
        instructorName: "Zoe",
        petName: "Biff",
        animalType: "evil cat",
        isFavorite: false
    },
    {
        instructorName: "Zoe",
        petName: "Whiskey",
        animalType: "cat",
        isFavorite: true
    },
    {
        instructorName: "Lauren",
        petName: "Frankie",
        animalType: "sweet pupper",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Seymour",
        animalType: "one eyed dog",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Wiley",
        animalType: "destructive dog",
        isFavorite: false
    }
];

// display each pet as card

function domStringMaker(animalArray){
    // for (var i = 0; i < animalArray.length; i++) {
    //     animalArray += instructorPets[i].petName
    // };
    // return animalArray;
    for (var i = 0; i < animalArray.length; i++) {
        var animalString = "<h1>" + animalArray[i].petName + "</h1>"
        printToDom(animalString, "pet-names");
    }
}

function printToDom(stringToPrint, divId){
    // divId = document.getElementById('pet-names');
    // stringToPrint.innerHTML = "<h1>" + domStringMaker() + "</h1>";
    var myDiv = document.getElementById(divId);
    myDiv.innerHTML += stringToPrint;
}

domStringMaker(instructorPets);
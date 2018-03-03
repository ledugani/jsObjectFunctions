// display each pet as card

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

// for(var i = 0; i < instructorPets.length; i++) {
//     if (isFavorite == true) {
//         var favPets = petName;
//     } else if (isFavorite == false) {
//         var notFavorite = petName;
//     } else {
//         console.log("unknown")
//     }
// }

// function petCards(animalCards){

// }


/* <div class="pet favorite">
      <h1>Whiskey</h1>
      <h3>Owner: Zoe</h3>
      <h3>Type: cat</h3>
</div> */
function domStringMaker(animalArray){  
    for(var i = 0; i < animalArray.length; i++) {
        var animalString = "";
        if (animalArray[i].isFavorite){
            animalString += '<div class= "pet favorite">';
        } else {
            animalString += '<div class= "pet not-favorite">';
        }
        animalString += "<h1>" + animalArray[i].petName + "</h1>";
        animalString += "<h3>" + animalArray[i].instructorName + "</h3>";
        animalString += "<h3>" + animalArray[i].animalType + "</h3>";
        animalString += "</div>";

        printToDom(animalString, "pet-names");
    }
}

function printToDom(stringToPrint, divId){
    var myDiv = document.getElementById(divId);
    myDiv.innerHTML += stringToPrint;
}

domStringMaker(instructorPets);
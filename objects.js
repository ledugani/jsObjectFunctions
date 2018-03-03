console.log('howdy');

var favAnimal = {
    name: "Tom",
    animal: "cat"
}

console.log("favAnimal", favAnimal.name);
console.log("favAnimal", favAnimal['animal']);

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
console.log("instructorPets", instructorPets);
/*
var petNames = [];

for (var i=0; i < instructorPets.length; i++) {
    petNames.push(" " + instructorPets[i].petName)
}

document.getElementById('pet-names').innerHTML = "<h1>" + petNames + "</h1>";
*/

var petDiv = document.getElementById('pet-names');
for (var i = 0; i < instructorPets.length; i++) {
    console.log("animal", instructorPets[i].petName);
    petDiv.innerHTML += "<h1>" + instructorPets[i].petName + "</h1>";
}
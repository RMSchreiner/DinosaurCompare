// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

//DinoConstructorArrayFunction
let dinoArray = [];
function constructDinoArray(species, weight, height, diet, where, when, fact) {
  let dinosaur = new Dinosaur(species, weight, height, diet, where, when, fact);
  dinoArray.push(dinosaur);
  return dinoArray;
}

// Create Dino Objec
const getDinoData = () => {
  return fetch("./dino.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new error("Something went wrong.");
      }
    })
    .then((data) => {
      data.Dinos.map((dino) => {
        console.log(dino);
        let dinoArray = constructDinoArray(
          dino.species,
          dino.weight,
          dino.height,
          dino.diet,
          dino.diet,
          dino.where,
          dino.when,
          dino.fact
        );
      });
      return dinoArray;
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Invalid Information");
    });
};

function getDinopData (){
let dinoObject;
dinoObject = getDinoData();
console.log(dinoObject);
return dinoObject;}

console.log(getDinoData());

// Create Human Object

const human = {
    name: "cro magnum",
    heightFeet: "5",
    heightInches: "5",
    humanWeight: "175",
    humanDiet:"omnivorous"
};

// Use IIFE to get human data from form
//possible add some error messaging in here
var user = (function(){
return {
    getUser: function(human){
              console.log(document.getElementById("name").value);
             human.name =  document.getElementById("name").value;
             human.heightFeet = document.getElementById("feet").value;
             human.heightInches = document.getElementById("inches").value;
             human.humanWeight = document.getElementById("weight").value;
             human.humanDiet = document.getElementById("diet").value; 
             return human;  
    }
}
})();



// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// // On button click, prepare and display infographic

console.log(document.getElementById("btn").addEventListener("click",user.getUser));


// wait dinosData complete

// do something with dinos
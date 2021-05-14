

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
// Create Dino Objec
const getDinoData = async () => {
  const fetchData = await fetch("./dino.json")
  const data = fetchData.json();
  console.log(data);
  return data;
};

//DinoConstructorArray
const dinos = [];

//awaiting the window load the json is called
window.onload = async function(){
  const dinoArray = await getDinoData();
  dinoArray.Dinos.forEach(item => {const dino = new Dinosaur(
          item.species, 
          item.weight, 
          item.height, 
          item.diet,
          item.where,
          item.when,
          item.fact);
        dinos.push(dino);
    });
    readDinos();
  };

//shows dino data in console
function readDinos(){
  console.log(dinos); 
}

// Create Human Object
const human = {
  name: "cro magnum",
  heightFeet: "5",
  heightInches: "5",
  humanWeight: "175",
  humanDiet:"omnivorous"
};

// Use IIFE to get human data from form
function createHuman(){(function(){ try{
             human.name =  document.getElementById("name").value;
             human.heightFeet = document.getElementById("feet").value;
             human.heightInches = document.getElementById("inches").value;
             human.humanWeight = document.getElementById("weight").value;
             human.humanDiet = document.getElementById("diet").value; 
             console.log(human);
             return human;}
             catch (error){
             console.log("Please Try Again");
             }
})();
};


//rebuilding compare function against the directions below
function dinoFacts(human,dinos){

  let bird = new Dinosaur();
  bird = dinos.slice(dinos.length - 1); 
  console.log(bird[0]);
  let dinoFact = [];
  dinoFact = dinos.splice(0,dinos.length -1);
  console.log(dinoFact);
  factEdit(human, dinoFact);



};
  //for loop that identifies 3 random numbers out of the array length 
  //and sets to three different variables which are passed to functions
  //compared to human and then pushed to array  
function factEdit(human, dinoData){
  var s = 0;
  var e = 0;
  var w = 0; //same random number...
  for(let i =0; i < 3 ; i ++){ 
    do{
    s = Math.floor(Math.random() * dinoData.length + 1);
    }while(s === 0);
    do{
    e = Math.floor(Math.random() * dinoData.length + 1);
    }while(e !== s && e !== 0);
    do{
    w = Math.floor(Math.random() * dinoData.length + 1);
    }while(w !== s && w!== e && w !== 0);
  };
  console.log(s,e,w);
  compareScale(human,dinoData[s]);
  eatHuman(dinoData[e]);
  //dinoSwim(dinoData[w]);
  console.log(dinoData);
   //keep adding functions test if it changes the fields 
  //push bird to random position
  //splice human at midpoint
  //this should create the proper ordered tiles randomized with facts  
  return;
}



// dino compare 1of3 compare scale of dino to human
function compareScale(human,scaleDino){
let humanInches = human.heightFeet * 12;
humanInches = humanInches + human.heightInches;
let scale = scaleDino.height/humanInches;
console.log(scale);
scaleDino.fact = "The dinosaurs model scale to that of the human is" + scale;
return;
}

//dino compare 2of3 does the dino eat people
function eatHuman(eatDino){
  if(eatDino.diet === "carnivor"){eatDino.fact = "Beware, this dinosaur would eat you."}
  else{eatDino.fact = "This dinosaur although large, would not eat you. "}
  return;
}

//dino compare 3of3 does the dino swim
function dinoSwim(dinoSwim){
  if(dinoSwim.species === "Elasmosaurus"){dinoSwim.fact = "You are not safe from this dinosaur in the water."}
  else{dinoSwim.fact = "It is likely that you could evade this dinosaur by swimming"};
  return;
}

// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen
function removeForm(){
  var form = document.getElementById("dino-compare");
  form.remove();
};

// // On button click, prepare and display infographic

//event listener runs all the following functions. 
// document.getElementById('btn').addEventListener('click', () => {
//   hideForm();
//   getHumanData();
//   randomArray();
//   displayGrid();
//   displayTiles();
// });

//onclick event (be aware of the order of functions)
document.getElementById("btn").addEventListener("click",function(){
  createHuman();
  removeForm();
  dinoFacts(human,dinos);

  //dinoFacts();

});

// do something with dinos
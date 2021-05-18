

// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact, img) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.img = img;
  ///images/anklyosaurus.png
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
          item.fact,
          item.img = "/images/"+item.species+".png")

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
  humanDiet:"omnivorous",
  humanImg: "/images/human.png"
};

// Use IIFE to get human data from form
function createHuman(){(function(){ try{
             human.name =  document.getElementById("name").value;
             //parseInt was causing the form to fail
             human.heightFeet = document.getElementById("feet").value;
             human.heightInches = document.getElementById("inches").value;
             human.humanWeight = document.getElementById("weight").value;
             human.humanDiet = document.getElementById("diet").value; 
             console.log(human);
             return human;}
             catch (error){
             console.log(error,"Please Try Again");
             }
})();
};


//rebuilding compare function against the directions below
function dinoFacts(){
  let dinoFact = [];
  let bird = new Dinosaur();
  bird = dinos.slice(dinos.length - 1); 
  console.log(bird[0]);
  //took dinoFact function out array returning blank
  dinoFact = dinos.splice(0,dinos.length - 1);
  console.log(dinoFact);
  factEdit(human, dinoFact);
  dinoFact.splice((Math.random()*dinoFact.length),0,bird[0]);

    return dinoFact;
};

function factEdit(human, dinoData){
  let s = -1;
  let e = -1;
  let w = -1; //same random number...
  for(let i =0; i < 3 ; i ++){ 
    do{
    s = Math.floor(Math.random() * dinoData.length);
    }while(s === -1);
    do{
    e = Math.floor(Math.random() * dinoData.length);
    }while(e === s || e === -1);
    do{
    w = Math.floor(Math.random() * dinoData.length);
    }while(w === s || w=== e || w === -1);
  };
  console.log(s,e,w);
  compareScale(human,dinoData[s]);
  eatHuman(dinoData[e]);
  dinoSwim(dinoData[w]);
  return dinoData;
}; 

// dino compare 1of3 compare scale of dino to human
function compareScale(human,scaleDino){
let humanWeight = parseInt(human.humanWeight);
let scale = Math.round(((scaleDino.weight/humanWeight)*10)/10);
scaleDino.fact = "The dinosaurs model scale to that of the human based upon weight is 1:" + scale;
return;
}

//dino compare 2of3 does the dino eat people
function eatHuman(eatDino){
  if(eatDino.diet === "carnivor"){eatDino.fact = "Beware, this dinosaur would eat you or an unsupervised companion animal."}
  else{eatDino.fact = "This dinosaur although large, would not eat you. "}
  return;
}

//dino compare 3of3 does the dino swim
function dinoSwim(dinoSwim){
  if(dinoSwim.species === "Elasmosaurus"){dinoSwim.fact = "You are not safe from this dinosaur in the water."}
  else{dinoSwim.fact = "It is likely that you could evade this dinosaur by swimming"};
  return;
}

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
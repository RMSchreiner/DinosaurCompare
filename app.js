

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
          item.img = `/images/${item.species}.png`)
        dinos.push(dino);
    });
    readDinos();
  };

//shows dino data in console
function readDinos(){
  console.log(dinos); 
}

// Create Human Object
let humanArray = [];
let dinoFact = [];


// Use IIFE to get human data from form
function createHuman(){(function(){ try{
            let human = new Dinosaur();
             human.species =  document.getElementById("name").value;
             human.height = (document.getElementById("feet").value * 12)
                            + document.getElementById("inches").value;
             human.weight = document.getElementById("weight").value;
             human.diet =   document.getElementById("diet").value; 
             human.img = "/images/human.png";
             human.fact = "Human";
             humanArray.push(human);
             console.log(humanArray[0]);
             return humanArray;}
             catch (error){
             console.log(error,"Please Try Again");
             }
})();
};


//rebuilding compare function against the directions below
function dinoFacts(humanArray){

 
  let bird = new Dinosaur();
  bird = dinos.slice(dinos.length - 1); 
  console.log(bird[0]);
  //took dinoFact function out array returning blank
  dinoFact = dinos.splice(0,dinos.length - 1);
  factEdit(humanArray, dinoFact);
  dinoFact.splice((Math.random()*dinoFact.length),0,bird[0]);
  dinoFact.splice(4,0,humanArray[0]);
  console.log(dinoFact);

    return dinoFact;
};

function factEdit(humanArray, dinoData){
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
  compareScale(humanArray,dinoData[s]);
  eatHuman(dinoData[e]);
  dinoSwim(dinoData[w]);
  return dinoData;
}; 

// dino compare 1of3 compare scale of dino to human
function compareScale(humanArray,scaleDino){
let humanWeight = parseInt(humanArray[0].weight);
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
  document.getElementById("dino-compare").remove();
  dinoFact.forEach(gridAppend);
  console.log(dinoFact[0].weight);
  function gridAppend(item){
    console.log(item)
    if(item.species === "Tyrannosaurus Rex"){item.img = "/images/Tyrannosaurus-Rex.png"};
    let grid = document.getElementById("grid");
    const newDiv = document.createElement('div');
    newDiv.classList.add("grid-item");
    newDiv.innerHTML = `<h3>${item.species}</h3><img src=${item.img} alt =" image of ${item.species}"><p>${item.fact}</p>`;
                        grid.appendChild(newDiv);  
  }
                          
  };

function addGrid(){
  console.log(dinoFact.length)
  document.getElementById("grid").innerHTML="<divclass ='grid-item'>"+dinoFact[0].species+"</div>"
  document.getElementById("grid").innerHTML="<divclass ='grid-item'>"+dinoFact[1].species+"</div>"
  }

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
  dinoFacts(humanArray);
  removeForm();
  //dinoFacts();

});

// do something with dinos
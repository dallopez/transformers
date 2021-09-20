var wrapperEle = document.body

var chara = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function transformer(obj){
  var tEle = document.createElement("div");
  tEle.classList.add("character");
 
  //transformer names
  var nEle = document.createElement("div");
  nEle.innerHTML = "Name: " + obj.name;
  
  //ranking class of each transformer
  var cEle = document.createElement("div");
  cEle.innerHTML = "Class: " + obj.class.toUpperCase();
  
  //adds a color to a specific vehicle
  var vehicleEle = document.createElement("div");
  vehicleEle.innerHTML = "Vehicle: " + obj.vehicle;
  if(obj.vehicle === "truck"){
    vehicleEle.style.color="blue";
  }if(obj.vehicle === "tank"){
    vehicleEle.style.color="green";
  }if(obj.vehicle === "car"){
    vehicleEle.style.color="gold";
  }if(obj.vehicle === "plane"){
    vehicleEle.style.color="white";
  }
  
  // autobots and decepticons logos
  if(obj.afl === "autobot"){
    tEle.classList.add("autobot")
    var img = document.createElement("img");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    tEle.appendChild(img)
  }

  else{
    tEle.classList.add("decepticon");
    var img = document.createElement("img");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    tEle.appendChild(img)
  }
  
  tEle.appendChild(nEle);
  tEle.appendChild(cEle);
  tEle.appendChild(vehicleEle);
  wrapperEle.appendChild(tEle);
}
for(var i=0; i<chara.length; i++){
  transformer(chara[i]);
}
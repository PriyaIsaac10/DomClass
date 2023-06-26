let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
  const li = document.createElement("li")  // creating element
  const text = document.createTextNode(inputFood.value)  // creating textNode
  const comment = document.createComment("Creating a li")
  
  //assigning className
  li.className ="food-item";

  li.append(text);
  li.append(comment);
  foodContainer.append(li);

 //foodContainer.innerHTML += `<li class="food-item">${inputFood.value}</li>`;  // final result pizza css add aagi sambar rasam curd pola 4th point la print aagudhu
 // foodContainer.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`; // pizza mattum uppercase la PIZZA nu print aagum

});







 const foodContainerEl = document.getElementById("food-container")
 
 // innerAdjacentHTML
 // afterbegin & afterend
 foodContainerEl.insertAdjacentHTML("afterbegin","<li> Foodddd Items</li>")  // ulla first la varum
 foodContainerEl.insertAdjacentHTML("afterend","Foodd Items") // veliya end la varum

 // beforebegin & beforeend
 foodContainerEl.insertAdjacentHTML("beforebegin","<h1>BforeBegin</h1>") //veliya first la varum
 foodContainerEl.insertAdjacentHTML("beforeend","<h1>BforeEnd</h1>") // ulla end la varum

 // innerAdjacentText
 foodContainerEl.insertAdjacentText("afterend","<li>Foodd Items</li>") // tag ellam text an therium so inserAdjacentText use pannum bothu tag use panna koodadhu text matum dhan use pananum

 //innerAdjacentElement
 // first element craete pannanum
 const li = document.createElement("li")
 li.textContent = "New List"
 li.className  = "food-item"
 foodContainerEl.insertAdjacentElement("beforeend" , li)
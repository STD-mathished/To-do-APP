import './style.css'

let list = document.querySelector("ul")
let btn = document.querySelector("button");
let inputfield = document.querySelector("#txt");

list.addEventListener("click", (e)=>{
  if(e.target.tagName === 'LI')
  {
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();
  }
})


btn.addEventListener("click", add)
function add(){
  if(inputfield.value === '')
  {
    alert("You must write something");
  }
  else 
  {
    let task = document.createElement("li");
    task.innerHTML = inputfield.value;
    list.appendChild(task);
    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7";
    task.appendChild(cross);
  }
  inputfield.value = '';
}

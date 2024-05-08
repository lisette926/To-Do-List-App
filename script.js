const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        //if empty, give alert
        alert("You must write somthing!")
    }
    else{ //not empty
        let li = document.createElement("li"); //creating 1 html element(li)
        li.innerHTML = inputBox.value; //adding text from input to li
        listContainer.appendChild(li); //displays li in listcontainer
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ //checks if it clicked li
        e.target.classList.toggle("checked"); //toggle (checked/unchecked)
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //if span
        e.target.parentElement.remove() // delete element 
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
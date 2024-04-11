const inputbox = document.querySelector("#input");
const listcontainer = document.querySelector(".list-container");

function addtext(){
    if(inputbox.value === ""){
        alert("You must write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputbox.value = "";
    storedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        storedata();
    }
},false); 

function storedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function getdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

getdata();



let title = document.querySelector("h2");
let paragraph = document.querySelector("p");
let list = document.querySelector("ul");
let span = document.querySelector("span");
let button = document.querySelector("button");

window.onload = function(){
    if(window.navigator.onLine){
        onLine();
    }else{
        offLine();
    }
}

window.addEventListener("online" , ()=>{
    onLine();
})

window.addEventListener("offline" , ()=>{
    offLine();
})

function offLine(){
    title.innerHTML="offline";
    title.style.color = "red";
    paragraph.innerHTML="This site can’t be reached"
    list.classList.remove("hidde");
    span.classList.remove("hidde");
    button.classLis.remove("hidde");

}
function onLine(){
    title.innerHTML="online";
    title.style.color = "green"
    paragraph.innerHTML="you are online now"
    list.classList.add("hidde");
    span.classList.add("hidde");
    button.classList.add("hidde");
}

offLine()
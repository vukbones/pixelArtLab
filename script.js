const container = document.getElementById("container");

let isMouseDown = false;

function change_color(item){
    if(item.classList.contains("black")){
        
    }
    else{
        item.classList.add("black");
    }
}

function coloring(item){
    item.addEventListener("mousedown", ()=>{
        isMouseDown = true;
        change_color(item);
    });
    item.addEventListener("mouseover", ()=>{
        if (isMouseDown){
            change_color(item);
        }
    });
    item.addEventListener("dragstart", (e)=>{
        e.preventDefault();
    });
}

for(let i = 0; i < 256; i++){
    const item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);
    coloring(item);  
}

document.addEventListener("mousedown", ()=>{
    isMouseDown = true;
});

document.addEventListener("mouseup", ()=>{
    isMouseDown = false;
});


const whiteBtn = document.getElementById("clear");
whiteBtn.addEventListener("click", ()=>{
    const items = document.querySelectorAll(".item");
    items.forEach((item)=>{
        item.classList.remove("black");
    });
});





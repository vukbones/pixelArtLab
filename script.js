const container = document.getElementById("container");

let isMouseDown = false;

function change_color(item){
    if(item.classList.contains("black")){
        
    }
    else{
        item.classList.add("black");
    }
}

for(let i = 0; i < 256; i++){
    const item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);
    item.addEventListener("mousedown", ()=>{
        isMouseDown = true;
        change_color(item);
    });
    item.addEventListener("mouseover", ()=>{
        if (isMouseDown){
            change_color(item);
        }
    });
}

document.addEventListener("mouseup", ()=>{
    isMouseDown = false;
})





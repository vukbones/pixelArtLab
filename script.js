const container = document.getElementById("container");
const rainbownBtn = document.getElementById("rainbowBtn");
const clearBtn = document.getElementById("clear");
const blackBtn = document.getElementById("black");
let rainbow = false;
let white = false;
let black = false;

let isMouseDown = false;

function setRandomBackgroundColor(item) {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    let rgbValue = "rgb(" + r + "," + g + "," + b + ")";
    item.style.backgroundColor = rgbValue; // set background color of body element
}

function clearDIv(item) {
    item.style.backgroundColor = "white";
}

function blackDiv(item){
    item.style.backgroundColor = "black";
}

function change_color(item){
    // if(item.classList.contains("black")){
        
    // }
    // else{
    //     item.classList.add("black");
    // }
    if (rainbow === true){
        white = false;
        black = false;
        setRandomBackgroundColor(item);
    }
    if (white === true){
        rainbow = false;
        black = false;
        clearDIv(item);
    }
    if (black === true){
        rainbow = false;
        white = false;
        blackDiv(item);
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
    item.classList.add("white");
    container.appendChild(item);
    coloring(item);  
}

rainbownBtn.addEventListener("click", ()=>{
    white = false;
    black = false;
    rainbow = true;
})

clearBtn.addEventListener("click", ()=>{
    rainbow = false;
    black = false;
    white = true;
})

blackBtn.addEventListener("click", ()=>{
    rainbow = false;
    white = false;
    black = true;
})

document.addEventListener("mousedown", ()=>{
    isMouseDown = true;
});

document.addEventListener("mouseup", ()=>{
    isMouseDown = false;
});








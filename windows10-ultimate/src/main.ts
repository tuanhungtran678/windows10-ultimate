import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
<div id="desktop">

    <div id="desktop-icons">

    <div class="desktop-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/716/716784.png">
        <span>This PC</span>
    </div>

    <div class="desktop-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991112.png">
        <span>Recycle Bin</span>
    </div>

    <div class="desktop-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png">
        <span>Documents</span>
    </div>

    <div class="desktop-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png">
        <span>Edge</span>
    </div>

</div>

    <div id="windows"></div>

    <div id="start-menu"></div>

    <div id="taskbar">

        <button id="start-button">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg"
                alt="Windows">
        </button>

        <div id="taskbar-pinned"></div>

        <div id="taskbar-running"></div>

        <div id="taskbar-right">

            <span>🔊</span>

            <span>📶</span>

            <span id="clock"></span>

        </div>

    </div>

</div>
`;

const startButton =
    document.getElementById("start-button")!;

const startMenu =
    document.getElementById("start-menu")!;

startButton.onclick = (e) => {

    e.stopPropagation();

    startMenu.classList.toggle("show");

};

document.addEventListener("click", () => {

    startMenu.classList.remove("show");

});

startMenu.onclick = (e) => {

    e.stopPropagation();

};

function updateClock(){

    const now=new Date();

    document.getElementById("clock")!.innerHTML=

        now.toLocaleTimeString([],{

            hour:"2-digit",
            minute:"2-digit"

        })+

        "<br>"+

        now.toLocaleDateString();

}

updateClock();

setInterval(updateClock,1000);

const icons =
document.querySelectorAll(".desktop-icon");

icons.forEach(icon=>{

    icon.addEventListener("click",()=>{

        icons.forEach(i=>
            i.classList.remove("selected")
        );

        icon.classList.add("selected");

    });

icon.addEventListener("dblclick",()=>{

    const name =
        icon.querySelector("span")!.textContent;

    if(name==="This PC"){

        openExplorer();

    }

});

});

function openExplorer(){

    const windows =
        document.getElementById("windows")!;

    windows.innerHTML=`

<div class="window">

    <div class="window-titlebar">

        <span>This PC</span>

        <div>

            <button>─</button>

            <button>□</button>

            <button id="close-window">✕</button>

        </div>

    </div>

    <div class="window-content">

        <h2>This PC</h2>

        <p>Welcome to Windows 10 Ultimate.</p>

    </div>

</div>

`;

const closeButton =
    document.getElementById("close-window") as HTMLButtonElement;

    const windowElement =
    windows.querySelector(".window") as HTMLDivElement;

const titlebar =
    windows.querySelector(".window-titlebar") as HTMLDivElement;

let dragging = false;

let offsetX = 0;
let offsetY = 0;

titlebar.addEventListener("mousedown",(e)=>{

    dragging = true;

    const rect =
        windowElement.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

});

document.addEventListener("mousemove",(e)=>{

    if(!dragging) return;

    windowElement.style.left =
        `${e.clientX-offsetX}px`;

    windowElement.style.top =
        `${e.clientY-offsetY}px`;

});

document.addEventListener("mouseup",()=>{

    dragging = false;

});

closeButton.onclick = () => {

    windows.innerHTML = "";

};

}
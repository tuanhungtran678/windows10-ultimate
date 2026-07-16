import "./style.css";
import { openExplorer } from "./explorer";

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


// =====================
// START MENU
// =====================

const startButton =
    document.getElementById("start-button")!;

const startMenu =
    document.getElementById("start-menu")!;


startButton.onclick = (event) => {

    event.stopPropagation();

    startMenu.classList.toggle("show");

};


document.addEventListener("click", () => {

    startMenu.classList.remove("show");

});


startMenu.onclick = (event) => {

    event.stopPropagation();

};


// =====================
// CLOCK
// =====================

function updateClock(){

    const now = new Date();

    const clock =
        document.getElementById("clock")!;


    clock.innerHTML =

        now.toLocaleTimeString([], {

            hour:"2-digit",
            minute:"2-digit"

        })

        +

        "<br>"

        +

        now.toLocaleDateString();

}


updateClock();

setInterval(updateClock,1000);


// =====================
// DESKTOP ICONS
// =====================

const icons =
    document.querySelectorAll(".desktop-icon");


icons.forEach(icon => {


    icon.addEventListener("click",()=>{


        icons.forEach(i => {

            i.classList.remove("selected");

        });


        icon.classList.add("selected");


    });



    icon.addEventListener("dblclick",()=>{


        const name =
            icon.querySelector("span")!.textContent;


        if(name === "This PC"){

            openExplorer();

        }


    });


});
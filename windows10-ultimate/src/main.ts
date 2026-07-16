import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
<div id="desktop">

    <div id="desktop-icons"></div>

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
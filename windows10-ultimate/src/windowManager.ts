export interface WindowOptions {
    title: string;
    width: number;
    height: number;
    content: string;
}

let topZIndex = 100;

export function createWindow(options: WindowOptions) {

    const windows =
        document.getElementById("windows")!;

    const windowElement =
        document.createElement("div");

    windowElement.className = "window";

    windowElement.style.width =
        `${options.width}px`;

    windowElement.style.height =
        `${options.height}px`;

    windowElement.style.left = "180px";
    windowElement.style.top = "80px";
    windowElement.style.zIndex =
        String(++topZIndex);

    windowElement.innerHTML = `
        <div class="window-titlebar">
            <span>${options.title}</span>

            <div>
                <button class="min-btn">─</button>
                <button class="max-btn">□</button>
                <button class="close-btn">✕</button>
            </div>
        </div>

        <div class="window-content">
            ${options.content}
        </div>
    `;

    windows.appendChild(windowElement);

    return windowElement;
}
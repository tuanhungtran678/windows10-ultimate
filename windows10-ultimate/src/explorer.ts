import { createWindow } from "./windowManager";

export function openExplorer() {

    createWindow({

        title: "This PC",

        width: 720,

        height: 450,

        content: `
            <h2>This PC</h2>

            <p>Welcome to Windows 10 Ultimate.</p>
        `

    });

}
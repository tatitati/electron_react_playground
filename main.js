const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile("index.html")
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow)
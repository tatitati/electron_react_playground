const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

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
    isDev && win.webContents.openDevTools();
}

if(isDev){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

app.whenReady().then(createWindow)
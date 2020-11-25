const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("index.html")
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
        createWindow();
        const notification = new Notification({
            "title": "my title",
            "body": "my body"
        })
        notification.show()
        const parsed = path.parse('/Users/francis.albusac/lab/mylab/electron_react_playground')
        console.log(parsed)
    }    
)
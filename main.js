const { app, BrowserWindow, Notification } = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("index.html")
}

app.whenReady().then(() => {
        createWindow();
        const notification = new Notification({
            "title": "my title",
            "body": "my body"
        })
        notification.show()
    }    
)
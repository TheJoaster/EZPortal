const { app, BrowserWindow, Notification} = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadFile('index.html');
}
function Notify(){
    let NotificationOne = new Notification('Login into the WiFi Network',{body:'Click this notification to open the captive portal.', timeoutType:'never', urgency: 'normal'});
    NotificationOne.click = function(){createWindow()};
}
app.on('ready', Notify);

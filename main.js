// electron 入口文件
const { app, BrowserWindow, screen, ipcMain } = require('electron')
const whistle = require('whistle')
const { exec } = require('child_process')
const path = require('path')

const createWindow = () => {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.size;
    const win = new BrowserWindow({
        width,
        height,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.webContents.isDevToolsOpened = true

    win.loadFile(path.join(__dirname, 'dist', 'index.html'))
    // win.loadURL('http://localhost:5173')
}
const startWhistleServer = () => {
    return new Promise((resolve, reject) => {
        exec('npx w2 start', (error, stdout, stderr) => {
            if (error) {
                reject(stderr)
            }
            resolve(stdout)
        });
    })
}
const stopWhistleServer = () => {
    return new Promise((resolve, reject) => {
        exec('npx w2 stop', (error, stdout, stderr) => {
            if (error) {
                reject(stderr)
            }
            resolve(stdout)
        });
    })
}
const startWhistleProxy = () => {
    return new Promise((resolve, reject) => {
        exec('npx w2 proxy', (error, stdout, stderr) => {
            if (error) {
                reject(stderr)
            }
            resolve(stdout)
        });
    })
}
const stopWhistleProxy = () => {
    return new Promise((resolve, reject) => {
        exec('npx w2 proxy off', (error, stdout, stderr) => {
            if (error) {
                reject(stderr)
            }
            resolve(stdout)
        });
    })
}
app.whenReady().then(() => {
    ipcMain.handle('startWhistle', () => startWhistleServer())
    ipcMain.handle('stopWhistle', () => stopWhistleServer())
    ipcMain.handle('startProxy', () => startWhistleProxy())
    ipcMain.handle('stopProxy', () => stopWhistleProxy())
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,// node 版本
    chrome: () => process.versions.chrome,// chrome 版本
    electron: () => process.versions.electron,// electron 版本
})
contextBridge.exposeInMainWorld('whistle', {
    startWhistle: () => ipcRenderer.invoke('startWhistle'),
    stopWhistle: () => ipcRenderer.invoke('stopWhistle'),
    startProxy:()=>ipcRenderer.invoke('startProxy'),
    stopProxy:()=>ipcRenderer.invoke('stopProxy'),
})
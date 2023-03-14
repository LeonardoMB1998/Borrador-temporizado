const { app, BrowserWindow } = require('electron')
const path = require('path')
// const fs = require('fs-extra');



const createWindow = () => {
    const win = new BrowserWindow({
      width: 350,
      height: 270,
      // width: 550,
      // height: 570,
      // icon: path.join(__dirname, 'icono/ScreenShot_20220516105516.ico'),
      //* para que se pueda importar en otros js
      //ejemplo: en este caso se importa fs en app.js 
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        enableRemoteModule: true
        }
    })
  
    win.loadFile('index.html')

    //* quitar la barra de menú ******************
    win.setMenuBarVisibility(false);
    // win.maximize();

    // win.webContents.openDevTools();


  }





  app.whenReady().then(() => {
    createWindow()
  })






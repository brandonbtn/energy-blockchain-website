const { app, BrowserWindow, Menu, Tray, ipcMain, shell, nativeImage, globalShortcut } = require('electron')
const path = require('path')
const Store = require('electron-store')
const { autoUpdater } = require('electron-updater')

// Initialize store for persistent data
const store = new Store({
  schema: {
    credentials: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        token: { type: 'string' },
        rememberMe: { type: 'boolean' }
      }
    },
    settings: {
      type: 'object',
      properties: {
        autoLogin: { type: 'boolean' },
        minimizeToTray: { type: 'boolean' },
        launchAtStartup: { type: 'boolean' },
        theme: { type: 'string' }
      }
    }
  }
})

let mainWindow
let tray
let loginWindow

// Enable live reload for Electron
if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname)
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets', 'icon.png'),
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#0f172a',
    show: false
  })

  // Load the main dashboard
  const savedCredentials = store.get('credentials')
  if (savedCredentials && savedCredentials.token) {
    mainWindow.loadFile('dashboard.html')
  } else {
    mainWindow.loadFile('login.html')
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('close', (event) => {
    if (!app.isQuitting && store.get('settings.minimizeToTray')) {
      event.preventDefault()
      mainWindow.hide()
    }
  })

  // Create app menu
  createMenu()
}

function createLoginWindow() {
  loginWindow = new BrowserWindow({
    width: 450,
    height: 650,
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets', 'icon.png'),
    titleBarStyle: 'hidden',
    backgroundColor: '#0f172a',
    show: false,
    frame: false,
    alwaysOnTop: true
  })

  loginWindow.loadFile('quick-login.html')

  loginWindow.once('ready-to-show', () => {
    loginWindow.show()
  })

  loginWindow.on('closed', () => {
    loginWindow = null
  })
}

function createTray() {
  const iconPath = path.join(__dirname, 'assets', 'tray-icon.png')
  tray = new Tray(iconPath)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open ENERGY Desktop',
      click: () => {
        if (mainWindow) {
          mainWindow.show()
        }
      }
    },
    {
      label: 'Quick Login',
      click: () => {
        if (!loginWindow) {
          createLoginWindow()
        } else {
          loginWindow.show()
        }
      }
    },
    { type: 'separator' },
    {
      label: 'Dashboard',
      click: () => {
        if (mainWindow) {
          mainWindow.loadFile('dashboard.html')
          mainWindow.show()
        }
      }
    },
    {
      label: 'Portfolio',
      click: () => {
        if (mainWindow) {
          mainWindow.loadURL('https://energytoken.io/dashboard/portfolio')
          mainWindow.show()
        }
      }
    },
    {
      label: 'Trading',
      click: () => {
        if (mainWindow) {
          mainWindow.loadURL('https://energytoken.io/dashboard/trading')
          mainWindow.show()
        }
      }
    },
    { type: 'separator' },
    {
      label: 'Settings',
      click: () => {
        if (mainWindow) {
          mainWindow.loadFile('settings.html')
          mainWindow.show()
        }
      }
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => {
        app.isQuitting = true
        app.quit()
      }
    }
  ])

  tray.setToolTip('ENERGY Desktop - Click for quick access')
  tray.setContextMenu(contextMenu)

  // Double click to show window
  tray.on('double-click', () => {
    if (mainWindow) {
      mainWindow.show()
    }
  })
}

function createMenu() {
  const template = [
    {
      label: 'ENERGY',
      submenu: [
        {
          label: 'About ENERGY Desktop',
          click: () => {
            // Show about dialog
          }
        },
        { type: 'separator' },
        {
          label: 'Preferences',
          accelerator: 'Cmd+,',
          click: () => {
            if (mainWindow) {
              mainWindow.loadFile('settings.html')
            }
          }
        },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Cmd+Q',
          click: () => {
            app.isQuitting = true
            app.quit()
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
        { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', role: 'reload' },
        { label: 'Force Reload', accelerator: 'CmdOrCtrl+Shift+R', role: 'forceReload' },
        { label: 'Toggle Developer Tools', accelerator: 'F12', role: 'toggleDevTools' },
        { type: 'separator' },
        { label: 'Actual Size', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
        { label: 'Zoom In', accelerator: 'CmdOrCtrl+Plus', role: 'zoomIn' },
        { label: 'Zoom Out', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
        { type: 'separator' },
        { label: 'Toggle Fullscreen', accelerator: 'F11', role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { label: 'Minimize', accelerator: 'CmdOrCtrl+M', role: 'minimize' },
        { label: 'Close', accelerator: 'CmdOrCtrl+W', role: 'close' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {
            shell.openExternal('https://energytoken.io/docs')
          }
        },
        {
          label: 'Support',
          click: () => {
            shell.openExternal('https://energytoken.io/support')
          }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

// IPC handlers for communication between renderer and main process
ipcMain.handle('save-credentials', async (event, credentials) => {
  store.set('credentials', credentials)
  return true
})

ipcMain.handle('get-credentials', async () => {
  return store.get('credentials')
})

ipcMain.handle('clear-credentials', async () => {
  store.delete('credentials')
  return true
})

ipcMain.handle('save-settings', async (event, settings) => {
  store.set('settings', settings)

  // Apply settings
  if (settings.launchAtStartup !== undefined) {
    app.setLoginItemSettings({
      openAtLogin: settings.launchAtStartup
    })
  }

  return true
})

ipcMain.handle('get-settings', async () => {
  return store.get('settings') || {
    autoLogin: false,
    minimizeToTray: true,
    launchAtStartup: false,
    theme: 'dark'
  }
})

ipcMain.handle('open-external', async (event, url) => {
  shell.openExternal(url)
})

ipcMain.handle('login-success', async (event, data) => {
  if (mainWindow) {
    mainWindow.loadFile('dashboard.html')
  }
  if (loginWindow) {
    loginWindow.close()
  }
})

ipcMain.handle('logout', async () => {
  store.delete('credentials')
  if (mainWindow) {
    mainWindow.loadFile('login.html')
  }
})

// App event handlers
app.whenReady().then(() => {
  createMainWindow()
  createTray()

  // Register global shortcuts
  globalShortcut.register('CommandOrControl+Shift+E', () => {
    if (mainWindow) {
      mainWindow.show()
    }
  })

  // Check for updates
  autoUpdater.checkForUpdatesAndNotify()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
})

app.on('before-quit', () => {
  app.isQuitting = true
})

// Auto updater events
autoUpdater.on('update-available', () => {
  // Notify user of available update
})

autoUpdater.on('update-downloaded', () => {
  // Notify user that update is ready to install
})
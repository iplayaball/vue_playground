const { app, BrowserWindow, Menu, globalShortcut } = require("electron");

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
let win;
const createWindow = () => {
  win = new BrowserWindow({
    width: 705,
    height: 580,
    // frame: false,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: false, //  Uncaught ReferenceError: require is not defined
    },
  });

  if (process.env.npm_lifecycle_event === "electron:dev") {
    win.loadURL("http://localhost:5173");
    // win.webContents.openDevTools();
  } else {
    win.loadFile("dist/index.html");
  }
  createMenu();
};
// 设置菜单栏
function createMenu() {
  // darwin表示macOS，针对macOS的设置
  if (process.platform !== "darwin") {
    // windows及linux系统
    Menu.setApplicationMenu(null);
  }
}
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(() => {
  globalShortcut.register("CommandOrControl+Shift+i", function () {
    // globalShortcut.register("f12", function() {
    win.webContents.openDevTools();
  });
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Nếu bạn đang chạy frontend bằng Vite:
  win.loadURL("http://localhost:5173");

  // Nếu build production sau này:
  // win.loadFile(path.join(__dirname, "../../dist/index.html"));
};

app.whenReady().then(createWindow);

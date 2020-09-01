"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.port || 3000);
    }
    routes() {
        this.app.use("/api/v1/", indexRoutes_1.default);
        this.app.use("/api/v1/games", gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`servidor corriendo en el servidor ${this.app.get("port")}`);
        });
    }
}
const server = new Server();
server.start();
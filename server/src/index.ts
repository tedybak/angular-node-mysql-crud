import express, { Application } from "express";
import indexRoutes from "./routes/indexRoutes";
import gamesRoutes from "./routes/gamesRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  config(): void {
    this.app.set("port", process.env.port || 3000);
  }

  routes(): void {
    this.app.use("/api/v1/", indexRoutes);
    this.app.use("/api/v1/games", gamesRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`servidor corriendo en el servidor ${this.app.get("port")}`);
    });
  }
}

const server = new Server();
server.start();

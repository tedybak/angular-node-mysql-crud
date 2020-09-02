import { gamesController } from "./../controllers/gamesController";
import { Router } from "express";
class GamesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", gamesController.index);
    this.router.get("/:id", gamesController.getGameById);
    this.router.post("/", gamesController.store);
    this.router.put("/:id", gamesController.update);
    this.router.delete("/:id", gamesController.delete);
  }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gamesController_1 = require("./../controllers/gamesController");
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", gamesController_1.gamesController.index);
        this.router.get("/:id", gamesController_1.gamesController.getGameById);
        this.router.post("/", gamesController_1.gamesController.store);
        this.router.put("/:id", gamesController_1.gamesController.update);
        this.router.delete("/:id", gamesController_1.gamesController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;

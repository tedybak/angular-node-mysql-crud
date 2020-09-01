"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
class GameController {
    index(req, res) {
        return res.send("hello");
    }
}
exports.gamesController = new GameController();
exports.default = exports.gamesController;

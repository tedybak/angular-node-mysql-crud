"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        return res.send("hello a sil mansour");
    }
}
exports.indexController = new IndexController();
exports.default = exports.indexController;

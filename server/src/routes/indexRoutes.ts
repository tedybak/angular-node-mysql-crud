import { indexController } from "./../controllers/indexController";
import { Router } from "express";
class IndexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", indexController.index);
  }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;

import { Response, Request } from "express";

class IndexController {
  public index(req: Request, res: Response) {
    return res.send("hello a sil mansour");
  }
}

export const indexController = new IndexController();
export default indexController;

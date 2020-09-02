import { Response, Request } from "express";

class IndexController {
  public index(req: Request, res: Response) {
    return res.json({ nombre: "Mohtadi Bakali" });
  }
}

export const indexController = new IndexController();
export default indexController;

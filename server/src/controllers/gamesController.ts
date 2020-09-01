import { Response, Request } from "express";

class GameController {
  public index(req: Request, res: Response) {
    return res.send("hello");
  }
}

export const gamesController = new GameController();
export default gamesController;

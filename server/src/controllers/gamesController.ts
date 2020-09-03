import { Response, Request, query } from "express";
import pool from "./../database";

class GameController {
  public async index(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query("select * from games", function (
        error: Error,
        rows: any
      ) {
        res.send(rows);
      });
    });
  }

  public async getGameById(req: Request, res: Response) {
    await pool.then((r) => {
      let result = r.query(
        "select * from games where id = " + req.params.id,
        function (error: Error, rows: any) {
          res.send(rows);
        }
      );
    });
  }

  public async store(req: Request, res: Response) {
    await pool.then((r) => {
      var sql = `INSERT INTO games  SET title = '${req.body.title}', description = '${req.body.description}', image = '${req.body.image}'`;
      let result = r.query(sql, function (error: Error, rows: any) {
        res.json({ message: "juego creado" });
      });
    });
  }

  public async update(req: Request, res: Response) {
    await pool.then((r) => {
      var sqlUpdate = `UPDATE  games  SET title = '${req.body.title}', description = '${req.body.description}', image = '${req.body.image}' WHERE id = '${req.params.id}'`;
      console.log(sqlUpdate);

      let result = r.query(sqlUpdate, function (error: Error, rows: any) {
        res.json({ message: "juego actualizado" });
      });
    });
  }

  public async delete(req: Request, res: Response) {
    await pool.then((r) => {
      var sqlDelete = `DELETE FROM games WHERE id = '${req.params.id}'`;
      console.log(sqlDelete);
      let result = r.query(sqlDelete, function (error: Error, rows: any) {
        res.json({ message: "juego borrado" });
      });
    });
  }
}

export const gamesController = new GameController();
export default gamesController;

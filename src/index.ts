import express, { NextFunction, Request, Response } from "express";
import { IFindWordController } from "./controller/IFindWordController";
import { FindWordController } from "./controller/FindWordController";

const app = express();
const port = 3000;
app.use(express.json());

const findWordController: IFindWordController = new FindWordController();

// Find total number of words in file
app.get(
  "/api/v1/read/:fileName/worlds",
  async (req: Request, res: Response, next: NextFunction) => {
    findWordController.find(req, res, next);
  }
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

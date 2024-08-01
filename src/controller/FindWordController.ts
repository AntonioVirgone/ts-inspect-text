import { Request, Response, NextFunction } from "express";
import { IFindWordController } from "./IFindWordController";
import { Auth } from "../decorator/Auth";
import { IFindWordService } from "../service/IFindWordService";
import { FindWordService } from "../service/FindWordService";

export class FindWordController implements IFindWordController {
  findWordService: IFindWordService = new FindWordService();

  @Auth
  async find(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const fileName  = req.params.fileName;
    const result = await this.findWordService.find(fileName);
    res.status(200).json(result);
  }
}

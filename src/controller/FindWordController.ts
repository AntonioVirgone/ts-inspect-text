import { Request, Response, NextFunction } from "express";
import { IFindWordController } from "./IFindWordController";
import { Auth } from "../decorator/Auth";
import { IFindWordService } from "../service/IFindWordService";
import { FindWordService } from "../service/FindWordService";
import { WordModel } from "../model/WordModel";

export class FindWordController implements IFindWordController {
  findWordService: IFindWordService = new FindWordService();

  @Auth
  async find(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<WordModel> {
    const { fileName } = req.params;
    return await this.findWordService.find(fileName);
  }
}

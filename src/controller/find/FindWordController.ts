import { Request, Response, NextFunction } from "express";
import { IFindWordController } from "./IFindWordController";
import { Auth } from "../../decorator/Auth";
import { FindWordService } from "../../service/find/FindWordService";
import { IFindWordService } from "../../service/find/IFindWordService";

export class FindWordController implements IFindWordController {
  findWordService: IFindWordService = new FindWordService();

  @Auth
  async find(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const fileName  = req.params.fileName;
    try {
      const result = await this.findWordService.find(fileName);
      res.status(200).json(result);  
    } catch (error) {
      res.status(404).json({ status: 404, message: `File ${fileName} not found`})
    }
  }

  @Auth
  async findExternal(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const externalPath = req.query["path"] as string;
    try {
      const result = await this.findWordService.findExternal(externalPath);
      res.status(200).json(result);  
    } catch (error) {
      res.status(404).json({ status: 404, message: `File ${externalPath} not found`})
    }
  }
}

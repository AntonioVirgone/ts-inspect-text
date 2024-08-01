import { Request, Response, NextFunction } from "express";
import { IFindWordController } from "./IFindWordController";
import { Auth } from "../decorator/Auth";

export class FindWordController implements IFindWordController {
    @Auth
    find(req: Request, res: Response, next: NextFunction): Promise<WordModel> {
        throw new Error("Method not implemented.");
    }
    
}
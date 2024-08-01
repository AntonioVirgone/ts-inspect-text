import { Request, Response, NextFunction } from "express";
import { WordModel } from "../model/WordModel";

export interface IFindWordController {
    find(req: Request, res: Response, next: NextFunction): Promise<void>;
}
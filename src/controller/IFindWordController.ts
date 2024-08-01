import { Request, Response, NextFunction } from "express";

export interface IFindWordController {
    find(req: Request, res: Response, next: NextFunction): Promise<WordModel>;
}
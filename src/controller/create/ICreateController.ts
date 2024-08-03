import { Request, Response, NextFunction } from "express";

export interface ICreateController {
    create(req: Request, res: Response, next: NextFunction): Promise<void>
}
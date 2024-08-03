import { ICreateController } from "./ICreateController";
import { Request, Response, NextFunction } from "express";

export class CreateController implements ICreateController {
    create(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}
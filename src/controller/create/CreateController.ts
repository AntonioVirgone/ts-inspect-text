import { ICreateController } from "./ICreateController";
import { Request, Response, NextFunction } from "express";
import { Auth } from "../../decorator/Auth";
import { ICreateService } from "../../service/create/ICreateService";
import { CreateService } from "../../service/create/CreateService";

export class CreateController implements ICreateController {
    createService: ICreateService = new CreateService();

    @Auth
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const fileName  = req.params.fileName;
        const content = req.body;
        
        try {
            const result = await this.createService.create(fileName, content);
            res.status(200).json(result);  
          } catch (error) {
            res.status(404).json({ status: 404, message: `File ${fileName} not found`})
          }
    }
    
}
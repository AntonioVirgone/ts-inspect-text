import { ContentModel } from "../../model/ContentModel";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
    create(fileName: string, content: ContentModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}
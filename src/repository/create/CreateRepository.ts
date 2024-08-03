import { ContentModel } from "../../model/ContentModel";
import { ICreateRepository } from "./ICreateRepository";

export class CreateRepository implements ICreateRepository {
    create(fileName: string, conten: ContentModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}
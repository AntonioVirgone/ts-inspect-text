import { ContentModel } from "../../model/ContentModel";
import { FileManager } from "../FileManager";
import { ICreateRepository } from "./ICreateRepository";

export class CreateRepository implements ICreateRepository {
    async create(fileName: string, content: ContentModel): Promise<void> {
        const fileManager: FileManager = FileManager.getInstance();
        await fileManager.writeFile(fileName, content.content)
    }
    
}
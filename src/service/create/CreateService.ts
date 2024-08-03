import { ContentModel } from "../../model/ContentModel";
import { CreateRepository } from "../../repository/create/CreateRepository";
import { ICreateRepository } from "../../repository/create/ICreateRepository";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
    createRepository: ICreateRepository = new CreateRepository();

    async create(fileName: string, content: ContentModel): Promise<void> {
        await this.createRepository.create(fileName, content)
    }
}
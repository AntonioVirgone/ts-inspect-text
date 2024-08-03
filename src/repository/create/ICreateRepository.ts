import { ContentModel } from "../../model/ContentModel";

export interface ICreateRepository {
    create(fileName: string, conten: ContentModel): Promise<void>
}
import { ContentModel } from "../../model/ContentModel";

export interface ICreateService {
  create(fileName: string, content: ContentModel): Promise<void>;
}

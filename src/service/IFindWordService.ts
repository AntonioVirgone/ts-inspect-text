import { WordModel } from "../model/WordModel";

export interface IFindWordService {
    find(fileName: string): Promise<WordModel>;
}
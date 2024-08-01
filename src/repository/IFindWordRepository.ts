import { WordModel } from "../model/WordModel";

export interface IFindWordRepository {
    find(fileName: string): Promise<WordModel>;
}
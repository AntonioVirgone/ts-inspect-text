import { WordModel } from "../model/WordModel";
import { IFindWordRepository } from "./IFindWordRepository";

export class FindWordFromFileRepository implements IFindWordRepository {
    async find(fileName: string): Promise<WordModel> {
        throw new Error("Method not implemented.");
    }
}
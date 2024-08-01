import { WordModel } from "../model/WordModel";
import { FindWordFromFileRepository } from "../repository/FindWordFromFileRepository";
import { IFindWordRepository } from "../repository/IFindWordRepository";
import { IFindWordService } from "./IFindWordService";

export class FindWordService implements IFindWordService {
  findWordRepository: IFindWordRepository | undefined;

  async find(fileName: string): Promise<WordModel> {
    this.findWordRepository = new FindWordFromFileRepository();
    return await this.findWordRepository.find(fileName);
  }
}

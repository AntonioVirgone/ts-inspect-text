import { WordModel } from "../model/WordModel";
import { FindWordFromFileRepository } from "../repository/FindWordFromFileRepository";
import { IFindWordRepository } from "../repository/IFindWordRepository";
import { IFindWordService } from "./IFindWordService";
import { WordCounterService } from "./WordCounterService";

export class FindWordService implements IFindWordService {
  wordCounterService: WordCounterService = new WordCounterService();
  findWordRepository: IFindWordRepository | undefined;

  async find(fileName: string): Promise<WordModel> {
    this.findWordRepository = new FindWordFromFileRepository();
    const wordEntity: string = await this.findWordRepository.find(fileName);
    return this.wordCounterService.counter(wordEntity);
  }
}

import { WordModel } from "../model/WordModel";

export interface IWordCounterService {
    counter(text: string): WordModel;
}
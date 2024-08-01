import { WordModel } from "../model/WordModel";
import { IWordCounterService } from "./IWordCounterService";

export class WordCounterService implements IWordCounterService {
  counter(text: string): WordModel {
    const emptySpaceCounter = text.search(" ");
    const letterCounter = text.match(/[^aeiouAEIOU\s]/g);
    const textSplit = text.split(/[.,:;\s]/g).filter(str => str.trim() !== '');
    const mostRepeatedWord: string[] = textSplit.filter(str => str.length > 10);

    return {
      totalWord: textSplit.length,
      totalSpace: emptySpaceCounter,
      totalLetter: letterCounter != null ? letterCounter.length : 0,
      mostRepeatedWord: mostRepeatedWord,
    };
  }
}

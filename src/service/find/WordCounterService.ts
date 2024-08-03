import { WordModel, WordRepetedModel } from "../../model/WordModel";
import { IWordCounterService } from "./IWordCounterService";

export class WordCounterService implements IWordCounterService {
  counter(text: string): WordModel {
    // Conta il numero di parole distinte nella frase
    const textSplit = text
      .split(/[.,:;\s]/g)
      .filter((str) => str.trim() !== "");

    // Conta il numero di spazi vuoti nella frase
    const emptySpaceCounter = text.match(/[\s]/g);

    // Conta il numero di lettere nella frase
    const letterCounter = text.match(/[a-zA-Z]/g);

    let wordMap: Map<string, number> = new Map();
    let mostRepeatedWordList: WordRepetedModel[] = [];

    textSplit.forEach((word) => {
      if (wordMap.has(word)) {
        wordMap.set(word, (wordMap.get(word) ?? 0) + 1);
      } else {
        wordMap.set(word, 1);
      }
    });

    wordMap.forEach((value, key) => {
      if (value >= 10) {
        mostRepeatedWordList.push({
          word: key,
          repetitions: value
        });
      }
    });

    return {
      totalWord: textSplit.length,
      totalSpace: emptySpaceCounter != null ? emptySpaceCounter.length : 0,
      totalLetter: letterCounter != null ? letterCounter.length : 0,
      mostRepeatedWord: mostRepeatedWordList,
    };
  }
}

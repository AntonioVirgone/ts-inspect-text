import { WordModel } from "../model/WordModel";

export class WordCounterService {
  counter(text: string): WordModel {
    let emptySpaceCounter = 0;
    let letterCounter = 0;
    let mostRepeatedWord: string[] = [];

    const vowels: string[] = ["a", "i", "e", "o", "u"];

    for (let i: number = 0; i < text.length; i++) {
      const word = text.charAt(i);
      if (text.charAt(i) === " ") {
        emptySpaceCounter++;
      } else if (!vowels.includes(word)) {
        letterCounter++;
      }
    }

    const textSplit = text.split(" ");
    let totalWord = textSplit.length;
    for (let i = 0; i < totalWord; i++) {
      if (textSplit[i].length >= 10) {
        mostRepeatedWord.push(textSplit[i]);
      }
    }

    return {
      totalWord: totalWord,
      totalSpace: emptySpaceCounter,
      totalLetter: letterCounter,
      mostRepeatedWord: mostRepeatedWord,
    };
  }
}

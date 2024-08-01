import { WordModel } from "../../src/model/WordModel";
import { IWordCounterService } from "../../src/service/IWordCounterService";
import { WordCounterService } from "../../src/service/WordCounterService";

describe("WordCounterService", () => {
  let service: IWordCounterService;

  beforeEach(() => {
    service = new WordCounterService();
  });

  it("should return word model from file content", async () => {
    const mockContent =
      "hello world\nciao mondo  dd\t\t\nabc abc abc abc abc abc abc abc abc ciao mondo ciao mondo ciao mondo ciao mondo ciao mondo ciao mondo ciao mondo ciao mondo ciao mondo ciao mondo abc";

    const result: WordModel = service.counter(mockContent);

    expect(result.totalWord).toBe(35);
    expect(result.totalSpace).toBe(37);
    expect(result.totalLetter).toBe(141);
    expect(result.mostRepeatedWord).toEqual(
      expect.arrayContaining([
        { word: "abc", repetitions: 10 },
        { word: "ciao", repetitions: 11 },
        { word: "mondo", repetitions: 11 },
      ])
    );
  });
});

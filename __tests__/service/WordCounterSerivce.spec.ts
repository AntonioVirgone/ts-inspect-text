import { WordModel } from "../../src/model/WordModel";
import { IWordCounterService } from "../../src/service/IWordCounterService";
import { WordCounterService } from "../../src/service/WordCounterService";

describe("WordCounterService", () => {
    let service: IWordCounterService;
  
    beforeEach(() => {
      service = new WordCounterService();
    });
  
    it('should return word model from file content', async () => {
      const mockContent = 'abc def, .ghi\n lmnopqrstuvz';
  
      const result: WordModel = service.counter(mockContent);
  
      expect(result.totalWord).toBe(4); // Adjust these numbers based on your mock content
      expect(result.totalSpace).toBe(3);
      expect(result.totalLetter).toBe(18); // Count vowels in mockContent
      expect(result.mostRepeatedWord).toEqual(['lmnopqrstuvz']);
    });
  });
  
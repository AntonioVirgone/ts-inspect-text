import { WordModel } from "../../src/model/WordModel";
import { FindWordFromFileRepository } from "../../src/repository/FindWordFromFileRepository";
import { IFindWordRepository } from "../../src/repository/IFindWordRepository";
import { FindWordService } from "../../src/service/FindWordService";
import { WordCounterService } from "../../src/service/WordCounterService";

jest.mock("../../src/repository/FindWordFromFileRepository");
jest.mock("../../src/service/WordCounterService");

describe("FindWordService", () => {
  let service: FindWordService;
  let mockWordCounterService: jest.Mocked<WordCounterService>;
  let mockFindWordRepository: jest.Mocked<IFindWordRepository>;

  beforeEach(() => {
    service = new FindWordService();

    mockFindWordRepository =
      new FindWordFromFileRepository() as jest.Mocked<IFindWordRepository>;
    mockWordCounterService =
      new WordCounterService() as jest.Mocked<WordCounterService>;

    service.findWordRepository = mockFindWordRepository;
    service.wordCounterService = mockWordCounterService;
  });

  it("should return word model from file content", async () => {
    const fileName = "testFile.txt";
    const mockWordEntity = await mockFindWordRepository.find(fileName);
    const mockWordModel = mockWordCounterService.counter(mockWordEntity);

    const result: WordModel = await service.find(fileName);

    expect(result).toEqual(mockWordModel);
  });
});

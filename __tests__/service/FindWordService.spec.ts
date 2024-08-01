import { WordModel } from "../../src/model/WordModel";
import { IFindWordRepository } from "../../src/repository/IFindWordRepository";
import { FindWordService } from "../../src/service/FindWordService";
import { IFindWordService } from "../../src/service/IFindWordService";
import { IWordCounterService } from "../../src/service/IWordCounterService";

jest.mock("../../src/repository/FindWordFromFileRepository");
jest.mock("../../src/service/WordCounterService");

describe("FindWordService", () => {
  let service: IFindWordService;
  let mockWordCounterService: jest.Mocked<IWordCounterService>;
  let mockFindWordRepository: jest.Mocked<IFindWordRepository>;

  beforeEach(() => {
    service = new FindWordService();

    mockFindWordRepository = {
      find: jest.fn(),
    };

    mockWordCounterService = {
      counter: jest.fn(),
    };
  });

  it("should return word model from file content", async () => {
    // given
    const fileName = "testFile.txt";
    const mockWordEntity = await mockFindWordRepository.find(fileName);
    const mockWordModel = mockWordCounterService.counter(mockWordEntity);

    // when
    const result: WordModel = await service.find(fileName);

    // then
    expect(result).toEqual(mockWordModel);
  });
});

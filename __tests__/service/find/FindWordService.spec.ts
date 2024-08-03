import { WordModel } from "../../../src/model/WordModel";
import { IFindWordRepository } from "../../../src/repository/IFindWordRepository";
import { FindWordService } from "../../../src/service/find/FindWordService";
import { IFindWordService } from "../../../src/service/find/IFindWordService";
import { IWordCounterService } from "../../../src/service/find/IWordCounterService";

jest.mock("../../../src/repository/FindWordFromFileRepository");
jest.mock("../../../src/repository/FindWordFromPathRepository");
jest.mock("../../../src/service/find/WordCounterService");

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

  it("should return word model from file content", async () => {
    // given
    const externalPath = "www.txt.com";
    const mockWordEntity = await mockFindWordRepository.find(externalPath);
    const mockWordModel = mockWordCounterService.counter(mockWordEntity);

    // when
    const result: WordModel = await service.findExternal(externalPath);

    // then
    expect(result).toEqual(mockWordModel);
  });
});

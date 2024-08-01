import { WordModel } from "../../src/model/WordModel";
import { IFindWordRepository } from "../../src/repository/IFindWordRepository";
import { FindWordService } from "../../src/service/FindWordService";
import { IFindWordService } from "../../src/service/IFindWordService";

jest.mock("../../src/repository/FindWordFromFileRepository");

describe("FindWordService", () => {
  let findWordService: IFindWordService;
  let findWordRepository: jest.Mocked<IFindWordRepository>;

  const fileName = "test";

  beforeEach(() => {
    findWordService = new FindWordService();

    findWordRepository = {
      find: jest.fn(),
    };
  });

  it("should find word from file", async () => {
    // given
    const mockResult: WordModel = await findWordRepository.find(fileName);

    // when
    const result = await findWordRepository.find(fileName);

    // then
    expect(result).toEqual(mockResult);
  });
});

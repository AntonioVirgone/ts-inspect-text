import axios from "axios";
import { IFindWordRepository } from "../../src/repository/IFindWordRepository";
import { FindWordFromPathRepository } from "../../src/repository/FindWordFromPathRepository";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("FindWordService", () => {
  let repository: IFindWordRepository;

  beforeEach(() => {
    repository = new FindWordFromPathRepository();
  });

  it("should read conten from file", async () => {
    // given
    const externalPath = "www.test.com";
    const mockData = "content";
    mockedAxios.get.mockResolvedValue({ data: mockData });

    // when
    const result: string = await repository.find(externalPath);

    // then
    expect(result).toBe(mockData);
  });
});

import { IFindWordRepository } from "../../src/repository/IFindWordRepository";
import { FileManager } from "../../src/repository/FileManager";
import { FindWordFromFileRepository } from "../../src/repository/FindWordFromFileRepository";

jest.mock("../../src/repository/FileManager", () => {
    return {
        FileManager: {
            getInstance: jest.fn()
        }
    }
});

describe("FindWordService", () => {
  let repository: IFindWordRepository;
  let singletonMock: jest.Mocked<typeof FileManager>;

  beforeEach(() => {
    repository = new FindWordFromFileRepository();
    singletonMock = FileManager as jest.Mocked<typeof FileManager>;
  });

  it("should read conten from file", async () => {
    // given
    const reafFileMock = jest.fn().mockResolvedValue('mocked value');
    singletonMock.getInstance.mockReturnValue({
        readFile: reafFileMock,
    } as unknown as FileManager);

    // when
    const result: string = await repository.find("testFile.txt");

    // then
    expect(singletonMock.getInstance).toHaveBeenCalled();
    expect(reafFileMock).toHaveBeenCalled();
    expect(result).toBe('mocked value');
  });
});

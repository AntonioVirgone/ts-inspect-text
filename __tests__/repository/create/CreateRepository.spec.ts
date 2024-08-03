import { ICreateRepository } from "../../../src/repository/create/ICreateRepository";
import { FileManager } from "../../../src/repository/FileManager";
import { CreateRepository } from "../../../src/repository/create/CreateRepository";

jest.mock("../../../src/repository/FileManager", () => {
    return {
        FileManager: {
            getInstance: jest.fn()
        }
    }
});

describe("CreateRepository", () => {
  let repository: ICreateRepository;
  let singletonMock: jest.Mocked<typeof FileManager>;
  
  const mockContent = {
    content: "Lorem ipsum dolor sit amet"
  };

  beforeEach(() => {
    repository = new CreateRepository();
    singletonMock = FileManager as jest.Mocked<typeof FileManager>;
  });

  it("should write content in file", async () => {
    // given
    const reafFileMock = jest.fn().mockResolvedValue('mocked value');
    singletonMock.getInstance.mockReturnValue({
        writeFile: reafFileMock,
    } as unknown as FileManager);

    // when
    await repository.create("testFile", mockContent);

    // then
    expect(singletonMock.getInstance).toHaveBeenCalled();
    expect(reafFileMock).toHaveBeenCalled();
  });
});
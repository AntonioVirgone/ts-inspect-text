import path from "path";
import { ROUTE_FILE } from "../../src/config/Resources";
import { FileManager } from "../../src/repository/FileManager";
import { promises as fs } from "fs";

jest.mock("fs", () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
  },
}));

describe("FileManager", () => {
  const mockFilePath = "mockFilePath";
  const mockContent = "mockContent";
  const filePath = `${path.join(__dirname, ROUTE_FILE)}/${mockFilePath}.txt`;

  beforeEach(() => {
    (FileManager as any).instance = null;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return instance", () => {
    const instance1 = FileManager.getInstance();
    const instance2 = FileManager.getInstance();

    expect(instance1).toBe(instance2);
  });

  // Test Read File
  it("should call readFile amd return string", async () => {
    // given
    const singleton = FileManager.getInstance();
    const spy = jest.spyOn(singleton, "readFile");
    (fs.readFile as jest.Mock).mockResolvedValue(mockContent);

    // when
    const result = await singleton.readFile(mockFilePath);

    // then
    expect(spy).toHaveBeenCalled();
    expect(fs.readFile).toHaveBeenCalledWith(filePath, "utf-8");
    expect(result).toBe(mockContent);
  });

  it("should throw error if readFile fails", async () => {
    // given
    const singleton = FileManager.getInstance();
    const mockError = new Error("read failed");
    (fs.readFile as jest.Mock).mockRejectedValue(mockError);

    // when-then
    await expect(singleton.readFile(mockFilePath)).rejects.toThrow(
      "Read file failed"
    );
    expect(fs.readFile).toHaveBeenCalledWith(filePath, "utf-8");
  });

  // Test Write File
  it("should call writeFile and write on file", async () => {
    // given
    const singleton = FileManager.getInstance();
    const spy = jest.spyOn(singleton, 'writeFile');
    (fs.writeFile as jest.Mock).mockResolvedValue(undefined);

    // when
    await singleton.writeFile(mockFilePath, mockContent);

    // then
    expect(spy).toHaveBeenCalled();
    expect(fs.writeFile).toHaveBeenCalledWith(filePath, mockContent, 'utf-8');
  })

  it("should throw error if writeFile fails", async () => {
    // given
    const singleton = FileManager.getInstance();
    const mockError = new Error('write error');
    (fs.writeFile as jest.Mock).mockRejectedValue(mockError);

    // when-then
    await expect(singleton.writeFile(mockFilePath, mockContent)).rejects.toThrow(
        "Write on file failed"
      );
    expect(fs.writeFile).toHaveBeenCalledWith(filePath, mockContent, 'utf-8');
  })
});

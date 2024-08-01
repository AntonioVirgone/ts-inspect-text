import { FileManager } from "./FileManager";
import { IFindWordRepository } from "./IFindWordRepository";

export class FindWordFromFileRepository implements IFindWordRepository {
  async find(fileName: string): Promise<string> {
    const fileManager: FileManager = FileManager.getInstance();
    return await fileManager.readFile(fileName);
  }
}

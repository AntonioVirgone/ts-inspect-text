import { promises as fs } from "fs";
import path from "path";
import { ROUTE_FILE } from "../config/Resources";

export class FileManager {
  private static instance: FileManager;

  private constructor() {}

  public static getInstance(): FileManager {
    if (!FileManager.instance) {
      FileManager.instance = new FileManager();
    }
    return FileManager.instance;
  }

  public async readFile(fileName: string): Promise<string> {
    try {
      const filePath = `${path.join(__dirname, ROUTE_FILE)}/${fileName}.txt`;
      return await fs.readFile(filePath, "utf-8");
    } catch (error) {
      throw new Error("Read file failed");
    }
  }

  public async writeFile(fileName: string, content: string): Promise<void> {
    try {
      const filePath = `${path.join(__dirname, ROUTE_FILE)}/${fileName}.txt`;
      await fs.writeFile(filePath, content, "utf-8");
    } catch (error) {
      throw new Error("Write on file failed")
    }
  }
}

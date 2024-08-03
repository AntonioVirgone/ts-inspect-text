import axios from "axios";
import { IFindWordRepository } from "./IFindWordRepository";

export class FindWordFromPathRepository implements IFindWordRepository {
  async find(externalPath: string): Promise<string> {
    try {
      const response = await axios.get<string>(externalPath);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

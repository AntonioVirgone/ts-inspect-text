export interface IFindWordRepository {
    find(fileName: string): Promise<string>;
}
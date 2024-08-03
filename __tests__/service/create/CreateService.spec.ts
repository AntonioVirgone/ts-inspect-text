import { ICreateRepository } from "../../../src/repository/create/ICreateRepository";
import { CreateService } from "../../../src/service/create/CreateService";
import { ICreateService } from "../../../src/service/create/ICreateService";

jest.mock("../../../src/repository/create/CreateRepository");

describe("CreateService", () => {
  let service: ICreateService;
  let mockCreateRepository: jest.Mocked<ICreateRepository>;

  const fileName = "testFile.txt";
  const mockContent = {
    content: "Lorem ipsum dolor sit amet"
  };

  beforeEach(() => {
    service = new CreateService();

    mockCreateRepository = {
      create: jest.fn(),
    };
  });

  it("should return word model from file content", async () => {
    // given
    await mockCreateRepository.create(fileName, mockContent);
    
    // when
    await service.create(fileName, mockContent);

    // then
    expect(mockCreateRepository.create).toHaveBeenCalled();
  });
});

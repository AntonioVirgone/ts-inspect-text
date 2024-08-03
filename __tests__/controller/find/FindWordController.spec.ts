import { Request, Response, NextFunction } from "express";
import { FindWordController } from "../../../src/controller/find/FindWordController";
import { WordModel } from "../../../src/model/WordModel";
import { X_SERVICE_TOKEN } from "../../../src/config/Secrets";
import { IFindWordService } from "../../../src/service/find/IFindWordService";
import { IFindWordController } from "../../../src/controller/find/IFindWordController";

jest.mock("../../../src/service/find/FindWordService");

describe("FindWordController", () => {
  let findWordController: IFindWordController;
  let findWordService: jest.Mocked<IFindWordService>;

  const fileName = "test";
  const externalPath = "www.test.com"
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    findWordController = new FindWordController();

    findWordService = {
      find: jest.fn(),
      findExternal: jest.fn(),
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    next = jest.fn();
  });

  it("should use service to find word in text", async () => {
    // given
    const mockResult: WordModel = await findWordService.find(fileName);
    req = {
      params: {
        fileName: fileName,
      },
      headers: { "x-service-token": X_SERVICE_TOKEN },
    };

    // when
    await findWordController.find(req as Request, res as Response, next);

    // then
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResult);
  });

  it("should failed find because token is not valid", async () => {
    // given
    req = {
      params: {
        fileName: fileName,
      },
      headers: { "x-service-token": "token not valid" },
    };

    // when
    await findWordController.find(req as Request, res as Response, next);

    // then
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      message: "Token not valid",
    });
  });

  it("should use service to find word by external web page", async () => {
    // given
    const mockResult: WordModel = await findWordService.findExternal(externalPath);
    req = {
      query: {
        path: externalPath,
      },
      headers: { "x-service-token": X_SERVICE_TOKEN },
    };

    // when
    await findWordController.findExternal(req as Request, res as Response, next);

    // then
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResult);
  });

  it("should failed find on web page because token is not valid", async () => {
    // given
    req = {
      params: {
        fileName: fileName,
      },
      headers: { "x-service-token": "token not valid" },
    };

    // when
    await findWordController.findExternal(req as Request, res as Response, next);

    // then
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      message: "Token not valid",
    });
  });
});

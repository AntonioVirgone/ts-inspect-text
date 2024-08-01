import { Request, Response, NextFunction } from "express";
import { FindWordController } from "../../src/controller/FindWordController";
import { WordModel } from "../../src/model/WordModel";
import { X_SERVICE_TOKEN } from "../../src/config/Secrets";
import { IFindWordService } from "../../src/service/IFindWordService";
import { IFindWordController } from "../../src/controller/IFindWordController";

jest.mock("../../src/service/FindWordService");

describe("FindWordController", () => {
  let findWordController: IFindWordController;
  let findWordService: jest.Mocked<IFindWordService>;

  const fileName = "test";
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    findWordController = new FindWordController();

    findWordService = {
      find: jest.fn(),
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    next = jest.fn();
  });

  it("should find word in text", async () => {
    // given
    const mockResult: WordModel = await findWordService.find(fileName);
    req = {
      params: {
        fileName: "some file name",
      },
      headers: { "x-service-token": X_SERVICE_TOKEN },
    };

    // when
    const result = await findWordController.find(
      req as Request,
      res as Response,
      next
    );

    // then
    // then
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResult);
  });

  it("should token is not valid", async () => {
    // given
    const mockResult: WordModel = await findWordService.find(fileName);
    req = {
      params: {
        fileName: "some file name",
      },
      headers: { "x-service-token": "token not valid" },
    };

    // when
    const result = await findWordController.find(
      req as Request,
      res as Response,
      next
    );

    // then
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      message: "Token not valid",
    });
  });
});

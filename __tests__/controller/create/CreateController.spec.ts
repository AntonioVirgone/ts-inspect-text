import { Request, Response, NextFunction } from "express";
import { ICreateController } from "../../../src/controller/create/ICreateController";
import { CreateController } from "../../../src/controller/create/CreateController";
import { X_SERVICE_TOKEN } from "../../../src/config/Secrets";
import { ICreateService } from "../../../src/service/create/ICreateService";

jest.mock("../../../src/service/create/CreateService");

describe("CreateController", () => {
  let createController: ICreateController;
  let createService: jest.Mocked<ICreateService>;

  const fileName = "test";
  const mockContent = {
    content: "Lorem ipsum dolor sit amet"
  };
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    createController = new CreateController();

    createService = {
      create: jest.fn(),
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    next = jest.fn();
  });

  it("should use service to create new file with text", async () => {
    // given
    await createService.create(fileName, mockContent)
    req = {
      params: {
        fileName: fileName,
      },
      body: {
        content: mockContent
      },
      headers: { "x-service-token": X_SERVICE_TOKEN },
    };

    // when
    await createController.create(req as Request, res as Response, next);

    // then
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(undefined);
  });


  it("should failed find because token is not valid", async () => {
    // given
    req = {
      params: {
        fileName: fileName,
      },
      headers: { "x-service-token": X_SERVICE_TOKEN },
    };

    // when
    await createController.create(req as Request, res as Response, next);

    // then
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      status: 401,
      message: "Token not valid",
    });
  });
});

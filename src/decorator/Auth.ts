import { Request, Response, NextFunction } from "express";
import { X_SERVICE_TOKEN } from "../config/Secrets";

export function Auth(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const token = req.headers["x-service-token"];

    if (token === undefined || token.length === 0) {
      res
        .status(401)
        .json({ status: 401, message: "Unauthorized, token is mandatory" });
      return;
    } else if (token !== X_SERVICE_TOKEN) {
      res.status(401).json({ status: 401, message: "Token not valid" });
      return;
    }

    return originalMethod.apply(this, [req, res, next]);
  };

  return descriptor;
}

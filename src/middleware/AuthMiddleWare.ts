import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../database/models/userModel";
import { userInfo } from "os";

interface AuthRequest extends Request {
  user?: {
    userName: string;
    email: string;
    role: string;
    password: string;
    id: string;
  };
}

enum Role {
  Admin = "admin",
  Customer = "customer",
}

class AuthMiddleWare {
  async isAuthenticated(
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    // get token from user

    /* 
        body
        parameter
        cookies
        headers
    */
    const token = req.headers.authorization;

    if (!token || token === undefined) {
      res.status(403).json({
        message: "Token not provided",
      });
      return;
    }

    // verify token if it is legit or tampered

    jwt.verify(
      token,
      process.env.SECRET_KET as string,
      async (err, decoded: any) => {
        if (err) {
          res.status(403).json({
            message: "Invalid Token",
          });
        } else {
          // check if that decoded object id user exit of not
          try {
            const userData = await User.findByPk(decoded.id);

            if (!userData) {
              res.status(404).json({
                message: "No user with currect token",
              });
              return;
            }
            req.user = userData;
            next();
          } catch (error) {
            res.status(500).json({
              message: "something went wrong",
            });
          }
        }
      }
    );

    // next
  }
  restrictTo(...roles: Role[]) {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
      let userRole = req.user?.role as Role;

      if (!roles.includes(userRole)) {
        res.status(403).json({
          message: "You don't have permission",
        });
      } else {
        next();
      }
    };
  }
}

export default new AuthMiddleWare();

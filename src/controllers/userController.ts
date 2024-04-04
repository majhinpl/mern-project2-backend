import e, { Request, Response } from "express";
import User from "../database/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
  public static async registerUser(req: Request, res: Response): Promise<void> {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({
        message: "Please provide username, email, password",
      });
      return;
    }
    // Check if the email already exists in the database
    const existingUser = await User.findAll({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      res.status(400).json({
        message: "Email address already exists",
      });
      return;
    }

    // if email is unique, create a new user
    await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 12),
      role: role,
    });
    res.status(200).json({
      message: "User register successfully",
    });
  }

  public static async loginUser(req: Request, res: Response): Promise<void> {
    // user input
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Please provide email, password",
      });
      return;
    }
    // check whether user with above email exist or not

    const [data] = await User.findAll({
      where: {
        email: email,
      },
    });
    if (!data) {
      res.status(404).json({
        message: "No user with that email",
      });
      return;
    }

    // check password now
    const isMatched = bcrypt.compareSync(password, data.password);
    
    if (!isMatched) {
      res.status(403).json({
        message: "Invalid email or password",
      });
      return;
    }

    // generate token
    const token = jwt.sign({ id: data.id }, "Hello", {
      expiresIn: "20d",
    });
    res.status(200).json({
      message: "Logged in successfully",
      data: token,
    });
  }
}

export default AuthController;

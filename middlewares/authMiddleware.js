import Jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = Jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const id = await userModel.findById(req.user._id);
    if (id.role == 1) {
      next();
    } else {
      return res.status(400).send({
        message: "Invalid Authorization",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

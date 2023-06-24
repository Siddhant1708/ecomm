import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "phone number is required" });
    }
    if (!address) {
      return res.send({ error: "address is required" });
    }

    //check if the registering user is already in the database
    const existinguser = await userModel.find({ email });
    if (existinguser.length != 0) {
      return res.status(200).send({
        success: true,
        message: "User is already registered Please login!",
      });
    }

    //if the registering user is a new user
    const hashedPassword = await hashPassword(password);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User succesfully registered",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

import { signinUserService } from "../service/userService.js";

import { signupUserService } from '../service/userService.js';

export const signup = async (req, res) => {
  try {
    const user = await signupUserService(req.body);
    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data:user
    });
  } catch (error) {
    console.error('Signup Error:', error);
    return res.status(error.status || 500).json({
      success: false,
      message: error.message || 'Internal Server Error',
    });
  }
};

export const signin = async (req, res) => {
  try {
    const response = await signinUserService(req.body);
    return res.status(200).json({
      success: true,
      message: "User signed in successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

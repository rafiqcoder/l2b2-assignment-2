/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express"
import { userServices } from "./user.service"

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    console.log(userData)

    const result = await userServices.createUser(userData)
    res.status(201).json({
      message: "User created successfully",
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    })
  }
}

const getAlluser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAlluser()
    console.log(result)

    res.status(201).json({
      message: "got users",
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await userServices.getSingleUser(userData)
    res.status(201).json({
      message: "User created successfully",
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const id = req.params.id
    const result = await userServices.updateUser(id, userData)
    res.status(201).json({
      message: "User created successfully",
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    })
  }
}

// const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const userData = req.body
//     const result = await userServices.deleteUser(userData)
//     res.status(201).json({
//       message: "User created successfully",
//       data: result,
//     })
//   } catch (error: any) {
//     console.log(error)
//     res.status(500).json({
//       status: "fail",
//       message: "Something went wrong",
//     })
//   }
// }

export const userController = {
  createUser,
  getAlluser,
  getSingleUser,
  updateUser
//   deleteUser,
}

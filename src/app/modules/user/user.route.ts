import express from "express"
import { userController } from "./user.controller"

const router = express.Router()

router.route("/")
.post(userController.createUser)
.get(userController.getAlluser)
router
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
//   .delete(userController.deleteUser)

export const userRoutes = router

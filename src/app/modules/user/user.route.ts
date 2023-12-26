import express, { Router } from "express"
import validateRequest from "../../middleware/validateRequest"
import { userController } from "./user.controller"
import { validateUserSchema } from "./user.validation"
const router: Router = express.Router()

router.post(
  "/",
  validateRequest(validateUserSchema.createUserSchemaValidation),
  userController.createUser,
)

router.get("/", userController.getAllUser)

router.get("/:userId", userController.getUser)

router.put(
  "/:userId",
  validateRequest(validateUserSchema.updateUserSchemaValidation),
  userController.updateOneUser,
)
router.delete("/:userId", userController.deleteOneUser)

router.put("/:userId/orders", userController.createOrder)

export const userRouter = router

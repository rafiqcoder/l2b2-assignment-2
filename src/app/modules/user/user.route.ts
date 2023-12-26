import express, { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { userController } from './user.controller';
import { validateUserSchema } from './user.validation';
const router: Router = express.Router();

router.post(
  '/users',
  validateRequest(validateUserSchema.createUserSchemaValidation),
  userController.createUser,
);

router.get('/users', userController.getAllUser);

router.get('/users/:userId', userController.getUser);

router.put(
  '/users/:userId',
  validateRequest(validateUserSchema.updateUserSchemaValidation),
  userController.updateOneUser,
);
router.delete('/users/:userId', userController.deleteOneUser);

router.put('/users/:userId/orders', userController.createOrder);

export const userRouter = router;

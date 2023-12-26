import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TUser } from './user.interface';
import { userServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await userServices.createUserToDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUserToDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users fetched successfully!',
    data: result,
  });
});

const getUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const result = await userServices.getUserToDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully!',
    data: result,
  });
});

const updateOneUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const userData: Partial<TUser> = req.body;

  const result = await userServices.updateOneUserToDB(
    userId,
    userData as TUser,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully!',
    data: result,
  });
});

const deleteOneUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.deleteOneUserToDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully!',
    data: result,
  });
});

const createOrder = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const result = await userServices.createOrderToDB(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getUser,
  updateOneUser,
  deleteOneUser,
  createOrder,
};

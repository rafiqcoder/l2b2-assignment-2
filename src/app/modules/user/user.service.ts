import { TOrder, TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserToDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserToDB = async () => {
  const result = await UserModel.find().select(
    '-hobbies -isActive -password -userId -_id',
  );
  return result;
};

const getUserToDB = async (userId: string | number) => {
  // find data exist or not
  const isExist = await UserModel.findOne({ userId: userId });

  if (!isExist) {
    throw new Error('This user is not exist!');
  }

  const result = await UserModel.findOne({ userId: userId }).select(
    '-password -_id',
  );
  return result;
};

const updateOneUserToDB = async (userId: string | number, userData: TUser) => {
  const isExist = await UserModel.findOne({ userId: userId });

  if (!isExist) {
    throw new Error('This user is not exists');
  }

  const result = await UserModel.findOneAndUpdate(
    {
      userId: userId,
    },
    userData,
    { new: true },
  );
  return result;
};

const deleteOneUserToDB = async (userId: string | number) => {
  const isExist = await UserModel.findOne({ userId: userId });

  if (!isExist) {
    throw new Error('this user is not exist!');
  }

  const result = await UserModel.findOneAndDelete({ userId: userId });
  return result;
};

const createOrderToDB = async (userId: string | number, orderData: TOrder) => {
  const isUserExist = await UserModel.findOne({ userId: userId });

  if (!isUserExist) {
    throw new Error('this user is not exist!');
  }

  const result = await UserModel.findOneAndUpdate(
    { userId: userId },
    { orders: [orderData] },
    { new: true },
  );

  return result;
};

export const userServices = {
  createUserToDB,
  getAllUserToDB,
  getUserToDB,
  updateOneUserToDB,
  deleteOneUserToDB,
  createOrderToDB,
};

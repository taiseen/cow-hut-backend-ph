import { TUser } from './interface';
import { UserModel } from './model';

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

const createUser = async (payload: TUser): Promise<TUser> => {
  const result = await UserModel.create(payload);

  return result;
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const getSingleUser = async (id: string): Promise<TUser | null> => {
  const result = await UserModel.findById(id);

  return result;
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const updateUser = async (
  id: string,
  payload: Partial<TUser>
): Promise<TUser | null> => {
  const result = await UserModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const deleteUser = async (id: string): Promise<TUser | null> => {
  const result = await UserModel.findByIdAndDelete(id);

  return result;
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const getAllUser = async (): Promise<TUser[]> => {
  const result = await UserModel.find();

  return result;
};

export const userService = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

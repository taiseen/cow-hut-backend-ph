import { sendResponse } from '../../../shared/sendResponse';
import { Request, Response } from 'express';
import { userService } from './service';
import { TUser } from './interface';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body;

  const result = await userService.createUser(userData);

  const responseData = {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User signup successfully',
    data: result,
  };

  sendResponse<TUser>(res, responseData);
});

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUser();

  sendResponse<TUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All User retrieved successfully',
    data: result,
  });
});

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await userService.getSingleUser(id);

  sendResponse<TUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Selected User retrieved successfully',
    data: result,
  });
});

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await userService.updateUser(id, updateData);

  const responseData = {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  };

  sendResponse<TUser>(res, responseData);
});

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await userService.deleteUser(id);

  const responseData = {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User delete successfully',
    data: result,
  };

  sendResponse<TUser>(res, responseData);
});

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

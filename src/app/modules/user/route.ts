import validationRequest from '../../middleware/validateRequest';
import express from 'express';
import { userValidation } from './validation';
import { userController } from './controller';

const router = express.Router();

const path = {
  updateUser: '/:id',
  deleteUser: '/:id',
  singleUser: '/:id',
  allUser: '/',
};

// this router operation orders are very important...

router.patch(
  path.updateUser,
  validationRequest(userValidation.update_User_ZodSchema),
  userController.updateUser
);

router.delete(path.deleteUser, userController.deleteUser);

router.get(path.singleUser, userController.getSingleUser);

router.get(path.allUser, userController.getAllUser);

export const userRoutes = router;

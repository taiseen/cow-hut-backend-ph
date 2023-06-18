import validationRequest from '../../../middleware/validateRequest';
import express from 'express';
import { userController } from '../controller';
import { userValidation } from '../validation';

const router = express.Router();

const path = {
  createUser: '/signup',
};

router.post(
  path.createUser,
  validationRequest(userValidation.create_User_ZodSchema),
  userController.createUser
);

export const authRoutes = router;

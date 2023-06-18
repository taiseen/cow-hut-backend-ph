import validationRequest from '../../middleware/validateRequest';
import express from 'express';
import { cowValidation } from './validation';
import { cowController } from './controller';

const router = express.Router();

const path = {
  createCow: '/',
  updateCow: '/:id',
  deleteCow: '/:id',
  singleCow: '/:id',
  allCow: '/',
};

router.post(
  path.createCow,
  validationRequest(cowValidation.create_Cow_ZodSchema),
  cowController.createCow
);

// this router operation orders are very important...

router.patch(
  path.updateCow,
  validationRequest(cowValidation.update_Cow_ZodSchema),
  cowController.updateCow
);

router.delete(path.deleteCow, cowController.deleteCow);

router.get(path.singleCow, cowController.getSingleCow);

router.get(path.allCow, cowController.getAllCow);

export const cowRoutes = router;

import { Model } from 'mongoose';

export type TRole = 'seller' | 'buyer';

export type TUser = {
  role: TRole;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

// Create a new Model
export type TUserModel = Model<TUser, Record<string, unknown>>;

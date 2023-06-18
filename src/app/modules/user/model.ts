import { TUser, TUserModel } from './interface';
import { Schema, model } from 'mongoose';
import { UserRole } from './constants';

// Create User Schema
const UserSchema = new Schema<TUser>(
  {
    role: { type: String, required: true, enum: UserRole },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    phoneNumber: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    budget: { type: Number, required: true },
    income: { type: Number, required: true, default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// Create User Model
export const UserModel = model<TUser, TUserModel>('Users', UserSchema);

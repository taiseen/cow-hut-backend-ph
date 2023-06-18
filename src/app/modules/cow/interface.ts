/* eslint-disable no-unused-vars */
import { TUser } from '../user/interface';
import { Model, Types } from 'mongoose';

// 🟩🟩🟩🟩 Type === T 🟩🟩🟩🟩

export type TLocation =
  | 'Dhaka'
  | 'Chattogram'
  | 'Barishal'
  | 'Rajshahi'
  | 'Sylhet'
  | 'Comilla'
  | 'Rangpur'
  | 'Mymensingh';

export type TBreed =
  | 'Brahman'
  | 'Nellore'
  | 'Sahiwal'
  | 'Gir'
  | 'Indigenous'
  | 'Tharparkar'
  | 'Kankrej';

export type TLabel = 'for sale' | 'sold out';

export type TCowCategory = 'Dairy' | 'Beef' | 'Dual Purpose';

export type TCow = {
  name: string;
  age: number;
  price: number;
  location: TLocation;
  breed: TBreed;
  weight: number;
  label: TLabel;
  category: TCowCategory;
  seller: Types.ObjectId | TUser;
};

export type TCowFilter = { searchTerm?: string };

// 🟢🟢🟢 Create a new Model 🟢🟢🟢
export type TCowModel = Model<TCow, Record<string, unknown>>;

import { cowCategory, location, label, breed } from './constants';
import { TCow, TCowModel } from './interface';
import { Schema, model } from 'mongoose';

// Create Cow Schema
const CowSchema = new Schema<TCow>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true, enum: location },
    breed: { type: String, required: true, enum: breed },
    weight: { type: Number, required: true },
    label: { type: String, required: true, enum: label, default: label[0] },
    category: { type: String, required: true, enum: cowCategory },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// Create Cow Model
export const CowModel = model<TCow, TCowModel>('Cows', CowSchema);

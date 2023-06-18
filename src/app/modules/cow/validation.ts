import { breed, cowCategory, location } from './constants';
import { z } from 'zod';

// Router utilized this file...

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const create_Cow_ZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),

    age: z.number({ required_error: 'Age is required' }),

    price: z.number({ required_error: 'Price is required' }),

    location: z.enum([...location] as [string, ...string[]], {
      required_error: 'Location is required',
    }),

    breed: z.enum([...breed] as [string, ...string[]], {
      required_error: 'Breed is required',
    }),

    weight: z.number({ required_error: 'Weight is required' }),

    // label: z.enum([...Label] as [string, ...string[]], {
    //   required_error: 'Label is required',
    // }),

    category: z.enum([...cowCategory] as [string, ...string[]], {
      required_error: 'Category is required',
    }),

    seller: z.string({ required_error: 'Seller is required' }),
  }),
});

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const update_Cow_ZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    age: z.number().optional(),
    price: z.number().optional(),
    location: z.string().optional(),
    breed: z.string().optional(),
    weight: z.number().optional(),
    label: z.string().optional(),
    category: z.string().optional(),
    seller: z.string().optional(),
  }),
});

export const cowValidation = {
  create_Cow_ZodSchema,
  update_Cow_ZodSchema,
};

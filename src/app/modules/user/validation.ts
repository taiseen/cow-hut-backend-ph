import { z } from 'zod';
import { UserRole } from './constants';

// Router utilized this file...
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const create_User_ZodSchema = z.object({
  body: z.object({
    role: z.enum([...UserRole] as [string, ...string[]], {
      required_error: 'Role is required',
    }),

    password: z.string({ required_error: 'Password is required' }),

    name: z.object({
      firstName: z.string({ required_error: 'First Name is required' }),
      lastName: z.string({ required_error: 'Last Name is required' }),
    }),

    phoneNumber: z.string({ required_error: 'Phone Number is required' }),
    address: z.string({ required_error: 'Address is required' }),

    budget: z.number({ required_error: 'Budget is required' }),
    income: z.number({ required_error: 'Income is required' }),
  }),
});

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const update_User_ZodSchema = z.object({
  body: z.object({
    role: z.string().optional(),
    password: z.string().optional(),

    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),

    phoneNumber: z.string().optional(),
    address: z.string().optional(),

    budget: z.number().optional(),
    income: z.number().optional(),
  }),
});

export const userValidation = {
  create_User_ZodSchema,
  update_User_ZodSchema,
};

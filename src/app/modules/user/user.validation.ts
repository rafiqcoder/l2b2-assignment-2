import z from 'zod';

const fullNameSchemaValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const addressSchemaValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const updateFullNameSchemaValidation = z
  .object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  })
  .optional();

const updateAddressSchemaValidation = z
  .object({
    street: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
  })
  .optional();

const orderSchemaValidation = z
  .object({
    productName: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
  })
  .optional();

const createUserSchemaValidation = z.object({
  body: z.object({
    userId: z.number(),
    username: z.string(),
    fullName: fullNameSchemaValidation,
    age: z.number(),
    email: z.string(),
    password: z.string(),
    isActive: z.boolean(),
    hobbies: z.array(z.string()),
    address: addressSchemaValidation,
    orders: orderSchemaValidation.optional(),
  }),
});

const updateUserSchemaValidation = z.object({
  body: z.object({
    userId: z.number().optional(),
    username: z.string().optional(),
    fullName: updateFullNameSchemaValidation,
    age: z.number().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    isActive: z.boolean().optional(),
    hobbies: z.array(z.string()).optional(),
    address: updateAddressSchemaValidation,
    orders: orderSchemaValidation.optional(),
  }),
});

export const validateUserSchema = {
  createUserSchemaValidation,
  updateUserSchemaValidation,
  orderSchemaValidation,
};

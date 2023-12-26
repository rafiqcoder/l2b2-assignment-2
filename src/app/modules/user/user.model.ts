import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';

import config from '../../config';
import { TOrder, TUser } from './user.interface';

const orderSchema = new Schema<TOrder>([
  {
    productName: { type: String },
    price: { type: Number },
    quantity: { type: Number },
  },
]);

const userSchema = new Schema<TUser>(
  {
    userId: {
      type: Number,
      required: [true, 'User id is required!'],
      trim: true,
      unique: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required!'],
      trim: true,
      unique: true,
    },
    fullName: {
      firstName: {
        type: String,
        required: [true, 'firstname is required!'],
        maxlength: [8, 'Name should be 8 charectar'],
        trim: true,
      },
      lastName: {
        type: String,
        required: [true, 'lastname is required!'],
        trim: true,
      },
    },
    age: { type: Number, required: [true, 'Age is required!'] },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      maxlength: 20,
      trim: true,
    },
    isActive: {
      type: Boolean,
      required: [true, 'IsActive is required!'],
      trim: true,
    },
    hobbies: { type: [String], required: [true, 'Hobbies is required!'] },
    address: {
      street: { type: String, required: [true, 'Street is required!'] },
      city: { type: String, required: [true, 'City is required!'] },
      country: {
        type: String,
        required: [true, 'Conuntry is required!'],
        trim: true,
      },
    },
    orders: [orderSchema],
  },
  {
    versionKey: false,
  },
);

// use middleware

userSchema.pre('save', async function (next) {
  const student = this;
  student.password = await bcrypt.hash(
    student.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<TUser>('Users', userSchema);

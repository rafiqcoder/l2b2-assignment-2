import mongoose, { Schema, model } from "mongoose"
import { IUser } from "./user.interface"
import bcrypt from "bcrypt"

const userSchema: Schema<IUser> = new Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
  fullName: {
      firstName: {
          type: String,
          required: true
      },
      lastName: {
          type: String,
          required: true
      },
  },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    hobbies: {
        type: [String],
        default: []
    },
  address: {
      street: {
          type: String,
          required: true
      },
      city: {
          type: String,
          required: true
      },
    country: { type: String, required: true },
  }
//   orders: [
//      { type: mongoose.Schema.ObjectId,
//           ref: "user"
//       }
//   ],
})

userSchema.pre("save", async function (next) {
  if (!this.password) return next()
  // console.log("before hash",this.password);
  this.password = await bcrypt.hashSync(this.password, 12)
  // console.log("after hash",this.password);
  next()
})

userSchema.methods.checkPassword = async function (
  candidatePassword: string,
  userPassword: string,
) {
  // console.log("checking",candidatePassword,userPassword)
  return await bcrypt.compareSync(userPassword, candidatePassword)
}

const User = model<IUser>("User", userSchema)
export default User


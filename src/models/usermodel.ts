import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    mobile: String,
    password: String,
    tokenotp: String,
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true, versionKey: false }
);

const usermodel = model("user", userSchema);
export default usermodel;

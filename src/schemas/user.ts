import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  socialId: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

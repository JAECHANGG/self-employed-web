import mongoose, { Schema } from "mongoose";

const keywordSchema = new Schema(
  {
    keyword: { type: String },
  },
  { timestamps: true }
);

keywordSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

keywordSchema.set("toJSON", {
  virtuals: true,
});

const userSchema = new Schema(
  {
    socialId: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    collections: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    keywords: { type: [keywordSchema] },
  },
  { timestamps: true }
);

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

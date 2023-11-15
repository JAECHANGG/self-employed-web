import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comment: { type: String, required: true },
    like: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    photos: { type: String },
    like: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    comments: { type: [commentSchema] },
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

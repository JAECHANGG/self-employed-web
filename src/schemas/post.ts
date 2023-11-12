import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  comment: { type: String, required: true },
  createdAt: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

const postSchema = new Schema({
  createdAt: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  photos: { type: String },
  like: { type: Number, default: 0 },
  view: { type: Number, default: 0 },
  comments: [commentSchema],
});

export const Post = mongoose.model("Post", postSchema);

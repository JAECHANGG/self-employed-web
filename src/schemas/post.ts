import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comment: { type: String, required: true },
    like: {
      type: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    },
  },
  { timestamps: true }
);

commentSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

commentSchema.set("toJSON", {
  virtuals: true,
});

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    photos: { type: String },
    like: {
      type: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    },
    view: { type: Number, default: 0 },
    comments: { type: [commentSchema] },
  },
  { timestamps: true }
);

postSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

postSchema.set("toJSON", {
  virtuals: true,
});

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    catName: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      lowercase: true,
    },
    status: {
      type: String,
      enum: ["live", "pending"],
      default: "live",
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
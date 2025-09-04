import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    propertyType: {
      type: String,
      enum: ["Apartment", "House", "Villa", "Plot", "Commercial"],
      required: true,
    },
    location: { type: String, required: true },
    owner: { type: String, required: true },
    ownerContact: { type: String, required: true },
    imageUrl: { type: String, default: "" }, // ✅ URL from Cloudinary
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);
export default Property;

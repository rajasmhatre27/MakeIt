import express from "express";
import Property from "../models/Property.js";
import upload from "../config/multer.js";

const router = express.Router();

// ✅ GET all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ POST new property with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newProperty = new Property({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      propertyType: req.body.propertyType,
      location: req.body.location,
      owner: req.body.owner,
      ownerContact: req.body.ownerContact,
      imageUrl: req.file?.path || "", // ✅ Cloudinary returns URL in file.path
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;

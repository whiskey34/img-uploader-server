const router = require("express").Router();
const path = require('path')
const cloudinary = require(path.join(__dirname, "./utils/cloudinary.cjs"));
const upload = require(path.join(__dirname, "./utils/multer.cjs"));
const Upload = require(path.join(__dirname, "./model/upload.cjs"));

router.post("/", upload.single("file"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // create new upload
    let upload = new Upload({
      url: result.secure_url,
      cloudinary_id: result.public_id,
    });

    await upload.save();
    res.status(200).json(upload);
  } catch (err) {
    console.log(err);
    res.status(400).send("Failed to upload image file");
  }
});

router.get("/", async (req, res) => {
  try {
    let upload = await Upload.find();
    res.json(upload);
  } catch (err) {
    console.log(err);
    res.status(404).send("File or Image Not Found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find uploaded image file by id
    let upload = await Upload.findById(req.params.id);
    res.json(upload);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

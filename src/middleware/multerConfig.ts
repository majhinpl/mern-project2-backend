import multer from "multer";

// Define multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/storage"); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate unique filename
  },
});

// Initialize multer middleware with the defined storage configuration
const upload = multer({ storage: storage });

export { upload }; // Export only the upload instance

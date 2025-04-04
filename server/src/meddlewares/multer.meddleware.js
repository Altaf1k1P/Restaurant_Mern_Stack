import multer from "multer"

// Multer configuration for uploading images and other files
const storage = multer.diskStorage({
    destination:  (req, file, cb) => cb(null, "./public/temp"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  })
  
  const upload = multer({ storage: storage })
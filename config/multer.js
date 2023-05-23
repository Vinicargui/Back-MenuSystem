const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${file.originalname}`);
    },
  }),
});

// const upload = multer({ storage });

// module.exports = upload;

//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

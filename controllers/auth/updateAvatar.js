const { User } = require("../../models/user");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const extention = originalname.split(".").pop();
  const filename = `${_id}.${extention}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  console.log(avatarURL);
  await User.findByIdAndUpdate(_id, { avatarURL });

  /*  Jimp.read("filename", (err, filename) => {
    if (err) throw err;
    filename.resize(250, 250);
  }); */

  Jimp.read("lenna.png", (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write("lena-small-bw.jpg"); // save
  });

  res.json({
    avatarURL: avatarURL,
  });
};

module.exports = updateAvatar;

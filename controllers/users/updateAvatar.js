const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, filename } = req.file;
  const avatarName = `${_id}_${filename}`;
  const resultUpload = path.join(avatarDir, avatarName);
  await fs.rename(tempUpload, resultUpload);

  const newAvatar = await Jimp.read(resultUpload);
  newAvatar.resize(250, 250).write(resultUpload);
 
  const avatarURL = path.join("avatars", avatarName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;

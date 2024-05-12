const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, "AyushSecretKeyForThisWebsite", { expiresIn: "3d" });
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!validator.isEmail(email)) {
      return res.status(400).json({ data: "Email is not proper" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ data: "Password is not strong" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ data: "User Already Registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const userDetail = await User.create({ email, password: hash });
    const token = createToken(userDetail._id);
    return res.status(200).json({ email, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const signinUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ data: "User Denied" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = createToken(user._id);
      return res.status(200).json({ email, token });
    } else {
      return res.status(400).json({ data: "User Password Denied" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getUserData = async (req, res) => {
  const { token } = req.body;
  try {
    let data = jwt.verify(token, "AyushSecretKeyForThisWebsite");
    const user = await User.findById(data);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const bookmarkNews = async (req, res) => {
  const { url, img, title, type, time, token } = req.body;
  try {
    let userId = jwt.verify(token, "AyushSecretKeyForThisWebsite");
    User.findByIdAndUpdate(
      userId,
      {
        $push: {
          news: {
            url: url,
            img: img,
            title: title,
            type: type,
            time: time,
          },
        },
      },
      { new: true }
    )
      .then((user) => {
        console.log("User with updated news array:", user);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
    return res.status(200).json({ data: "Data Added" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const unbookmarkNews = async (req, res) => {
  const { title, token } = req.body;
  try {
    let userId = jwt.verify(token, "AyushSecretKeyForThisWebsite");
    // Find a user by ID and pull the news item with title "Ayush" from their news array
    User.findOneAndUpdate(
      { _id: userId },
      { $pull: { news: { title: title } } },
      { new: true }
    )
      .then((user) => {
        if (user) {
          console.log("User with updated news array:", user);
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
    return res.status(200).json({ data: "Data Removed" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getBookMarkData = async (req, res) => {
  const { token } = req.body;
  try {
    let data = jwt.verify(token, "AyushSecretKeyForThisWebsite");
    const user = await User.findById(data);
    return res.status(200).json({ data: user.news });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  signinUser,
  getUserData,
  getBookMarkData,
  bookmarkNews,
  unbookmarkNews
};

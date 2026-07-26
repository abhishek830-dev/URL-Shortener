const Url = require("../models/url");
const { nanoid } = require("nanoid");

const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({
        message: "Original URL is required",
      });
    }

    const shortCode = nanoid(6);

    const newUrl = await Url.create({
      originalUrl,
      shortCode,
    });
    return res.status(201).json({
      message: "Short URL created successfully",
      data: newUrl,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createShortUrl,
};

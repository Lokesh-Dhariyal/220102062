import { app } from "../app.js";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config();

const urlDatabase = new Map();

// Generate a unique shortcode or use the provided one
const generateShortcode = (customCode) => {
  if (customCode) {
    if (urlDatabase.has(customCode)) {
      return null; // Custom code already exists
    }
    return customCode;
  }
  // Generate a random 5-character shortcode
  let shortcode;
  do {
    shortcode = nanoid(5); // Generate a 5-character ID
  } while (urlDatabase.has(shortcode));

  return shortcode;
};

// Endpoint to create a shortened URL
export const shortningUrl = (req, res) => {
  const { url, shortcode } = req.body;
  // Validate the URL
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Generate or validate shortcode
  const generatedShortcode = generateShortcode(shortcode);

  if (!generatedShortcode) {
    return res
      .status(409)
      .json({ error: "Requested shortcode is already in use" });
  }

  // Set expiry time
  const validityMinutes = 30; // Default to 30 minutes
  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + validityMinutes);

  // Store the URL data
  urlDatabase.set(generatedShortcode, {
    originalUrl: url,
    expiry: expiryDate,
  });

  // Construct the shortened URL
  const PORT = process.env.PORT || 3000;
  const shortLink = `http://localhost:${PORT}/shorturls/${generatedShortcode}`;

  // Return the response
  res.status(201).json({
    shortLink,
    expiry: expiryDate.toISOString(),
  });
};

// Redirect endpoint for short URLs
export const getUrl = (req, res) => {
  const { shortcode } = req.params;

  // Check if shortcode exists
  if (!urlDatabase.has(shortcode)) {
    return res.status(404).json({ error: "Short link not found" });
  }

  const urlData = urlDatabase.get(shortcode);

  // Check if link has expired
  if (new Date() > new Date(urlData.expiry)) {
    urlDatabase.delete(shortcode); // Clean up expired link
    return res.status(410).json({ error: "Short link has expired" });
  }

  // Redirect to original URL
  res.redirect(urlData.originalUrl);
};

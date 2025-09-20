import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Import controller route handlers
import { registerUser,loginUser } from "./controller/user.controller.js";
import { shortningUrl,getUrl } from "./controller/urlShortner.controller.js";
import "./controller/urlShortner.controller.js"

// Register user routes
app.post("/register", registerUser);
app.post("/login", loginUser);
app.post("/shorturls",shortningUrl);
app.get("/shorturls/:shortcode",getUrl);

export { app };

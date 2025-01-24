import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import { rateLimit } from "express-rate-limit";
import { connectDB } from "./configs/db/mongooseDB.js";
import authRouter from "./routes/authRoutes.js";
import healthRouter from "./routes/healthRecordRoutes.js";
import patientRouter from "./routes/patientRoutes.js";
configDotenv();

// Initialize the Express app
const app = express();

// Database Connection
(async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
})();

// Middleware setup
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true, // Allow cookies
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session management (ensure secure cookies for production)
app.use(
  session({
    secret: "mysecret", // Choose a better secret in production
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to false for development (when using HTTP)
      httpOnly: true, // Ensure that cookies can't be accessed by JavaScript
      maxAge: 3600000, // Set cookie expiration time (optional)
    },
  })
);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});
app.use(limiter);

// auth router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/health-records", healthRouter);
app.use("/api/v1/user", patientRouter);

app.get("/", (req, res) => {
  res.send("Im a HealthCare Backend ");
});

//sercer start
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});

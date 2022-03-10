const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const schoolRouter = require("./routes/schoolRoutes");
const bookRouter = require("./routes/bookRoutes");
const teacherRouter = require("./routes/teacherRoutes");
const privateTeacherRouter = require("./routes/privateTeacherRoutes");
const orderRouter = require("./routes/orderRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const app = express();

/* === GLOBAL MIDDLEWARE ===*/
//Cross Origin Resource Sharing
app.use(cors());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 1 hour window
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: true, limit: "50kb" }));
//Reading cookies
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

//Default get request
app.use("/api/users", userRouter);
app.use("/api/schools", schoolRouter);
app.use("/api/books", bookRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/privateTeachers", privateTeacherRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api", orderRouter);

//For serving static files
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// If no routes are matched, send 404
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
// Global error handler
app.use(globalErrorHandler);
module.exports = app;

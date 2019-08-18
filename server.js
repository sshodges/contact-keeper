const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const app = express();

//Cors Settings
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST, DELETE, OPTIONS",
  preflightContinue: true,
  optionsSuccessStatus: 204,
  exposedHeaders: "x-auth-token"
};

app.use(cors(corsOptions));

// connect to DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/users", require("./routes/users.js"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve static assets in production
if ((process.env.NODE_ENV = "production")) {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (res, req) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port: " + PORT));

// TODO
// -  email lowercase
// -  encrypt jwt token

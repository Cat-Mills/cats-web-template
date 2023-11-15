// Import your packages
import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import session from "express-session";
import Stripe from "stripe";
import { configDotenv } from "dotenv";
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import authCtrl from "./Controllers/authCtrl.js";
const { login, register, updateUser, logout, getUser } = authCtrl;

import adminCtrl from "./Controllers/adminCtrl.js";
const { getAllUsers } = adminCtrl;

const __dirname = dirname(fileURLToPath(import.meta.url));

// configures dotenv
configDotenv();

// configure AWS S3 Client
export const client = new S3Client({
  region: process.env.region,
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
  },
});

// Set up app instance
const app = express();
const PORT = 3000;

const stripe = new Stripe(
  'sk_test_51OCUAVDgkjCJ2ux231h8dmXmOW9Usvw3v6BEhDUjgnwonfoDBt7bXmByOdMEGpo5CVejGxa7gTHrVAbeR8ghQQra00DfTf6ay2'
);

// Set up middleware
// app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(
  session({
    secret: "helloworld",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 48,
    },
  })
);

// auth endpoints
app.post("/login", login);
app.post("/register", register);
app.put("/updateUser", updateUser);
app.delete("/logout", logout);
app.get("/getUser", getUser);

// Admin endpoints
app.get("/getAllUsers", getAllUsers);

app.post("/checkout", async (req, res) => {
  try {
    console.log("checkout");
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
      lineItems.push({
        price: item.priceId,
        quantity: item.quantity,
      });
    });

    const stripeSession = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:${PORT}/success`,
      cancel_url: `http://localhost:${PORT}/cancel`,
    });

    res.send(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log(error);
  }
});

// Open up door to server
ViteExpress.listen(app, `${PORT}`, () =>
  console.log(`Listening on port ${PORT}. Go to http://localhost:${PORT}`)
);

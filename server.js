const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

// Initialize Express
const app = express();


// this is our MongoDB database
const dbRoute = "mongodb://localhost/googlebooks";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));


// Define middleware here
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Add routes, both API and view
//6. Add the following Express routes for your app:

//* `/api/books` (get) - Should return all saved books as JSON.
app.get("/api/books", function(req, res) {
  db.Books.find({})
  .then(function(dbBooks) {
    res.json(dbBooks);
  })
  .catch(function(err) {
    res.json(err);
  });
});

//* `/api/books` (post) - Will be used to save a new book to the database.
app.post("/api/books", function(req, res) {
  db.Books.save({})
  .then(function(dbBooks) {
    res.json(dbBooks);
  })
  .catch(function(err) {
    res.json(err);
  });
});

//* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

//* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

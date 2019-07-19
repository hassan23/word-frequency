const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const fetchWordsWithFrequency = require("./utility");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API calls
app.get("/getFrequency", async (req, res) => {
  const frequencyList = await fetchWordsWithFrequency();
  const numberOfWords = parseInt(req.query.noOfWords);
  const FilteredList = frequencyList.slice(0, numberOfWords);
  res.send({ list: FilteredList });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

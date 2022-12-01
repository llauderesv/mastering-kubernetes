const express = require("express");

const app = express();

const { PORT = 3000 } = process.env;

app.get("/", (req, res) => res.json({ status: "ok", code: 200 }));
app.get("/healthz", (req, res) => res.write("healthy"));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

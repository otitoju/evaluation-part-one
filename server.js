const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static("./dist/evaluation"));

app.get("/*", (req, res) => {
    res.sendFile('index.html', {root:'dist/evaluation'});
});

app.listen(PORT, () => console.log(`Evaluation app started on ${PORT}`));
// "start": "ng serve",

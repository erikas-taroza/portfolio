import express from "express";
import path from "path";

const app = express();
const website = path.resolve(`${__dirname}/../../website/dist`);

app.use(express.static(website));

app.get("/", (_, res) => {
    res.sendFile(website + "/index.html");
});

app.post("/send_mail", (req, res) => {
    res.send("test");
});

app.listen(7777, () => {
    console.log("Started server.");
});
import express from "express";
import { convertCLTToPJ } from "./controllers/calculator-controller.js";
var server = express();
server.get("/health", function (req, res) {
    res.send("ok");
});
server.get("/calculator", convertCLTToPJ);
server.listen(4000, function () {
    console.log("Ta executando...");
});

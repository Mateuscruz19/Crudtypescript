import express from "express";
import { listAll, inputBook,updateBook, deleteBook } from "./controllers/books-controller.js";

const server = express();
server.use(express.json())

server.get("/books", listAll)

server.post("/books", inputBook)

server.put('/books', updateBook)

server.delete('/books', deleteBook)

server.listen(4000, () => {
    console.log("Ta executando...")
})
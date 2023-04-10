import { Request,Response } from "express";
import { lookBooks,insertBook, upBook, delBook } from "../repositories/book-repository.js"
import { Book } from "../protocols/Book.js";
import { BookSchema,UpdateBookSchema } from "../models/book-schemas.js"

async function listAll(req: Request,res: Response) {
    const result = await lookBooks();
    return res.send(result.rows).status(200);
    
}

async function inputBook(req: Request,res: Response){

    const newBook = req.body as Book;

    const { error } = BookSchema.validate(newBook)

    if(error) {
        return res.status(400).send({
            message: error.message
        })
    }

    try {
        insertBook(newBook)
        return res.sendStatus(200)
    } catch (error) {
        return res.sendStatus(400)
    }
    
}

function updateBook(req: Request,res: Response){

    const BooktoUpdate = req.body;

    const { error } = UpdateBookSchema.validate(BooktoUpdate)

    if(error) {
        return res.status(400).send({
            message: error.message
        })
    }

    try {
        upBook(BooktoUpdate.name, BooktoUpdate.id)
        return res.sendStatus(200)
    } catch (error) {
        return res.sendStatus(400)
    }
    
}

function deleteBook(req: Request,res: Response) {

const BooktoDelete = req.body;


    try {
        delBook(BooktoDelete.id)
        return res.sendStatus(200)
    } catch (error) {
        return res.sendStatus(400)
    }
    
}

export {
    listAll,
    inputBook,
    updateBook,
    deleteBook
}
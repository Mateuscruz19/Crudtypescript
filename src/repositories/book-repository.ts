import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Book } from "../protocols/Book.js";

async function lookBooks(): Promise<QueryResult<Book>> {
    return connection.query("select * FROM books;")
}

async function insertBook(book: Book): Promise<QueryResult<Book>> {
    return connection.query(`
    INSERT INTO books ("Name") VALUES ($1);`,[book.name]);
}

async function upBook(name:string,id:string): Promise<QueryResult>{
    return connection.query("UPDATE books SET Name=teste WHERE id=1;"[id])
}

async function delBook(number:number): Promise<QueryResult>{
    return connection.query("DELETE FROM books WHERE id=$1",[number])
}

export {
    insertBook,
    lookBooks,
    upBook,
    delBook,

}
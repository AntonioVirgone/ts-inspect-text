import express, { NextFunction, Request, Response } from "express";

const app = express();
const port = 3010;
app.use(express.json());

// Find total number of words in file


app.listen(port, () => {
    console.log(`Server ts-todo is running at http://localhost:${port}`);
  });
  
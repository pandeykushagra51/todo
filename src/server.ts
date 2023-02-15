import express from 'express';
import { NextFunction, Request, Response } from 'express';
import { config } from "../config";
import { getTextFromCache } from './lru';


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

/**
 * API to convert text to SSML where text is received in req body with key value text
 */
app.get('/', (req:Request, res: Response) =>{
    res.send(getTextFromCache(req.body.text));
} )
app.listen(config.port,()=>{
    console.log(`server started and listening on post ${config.port}`);
})



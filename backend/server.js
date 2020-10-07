import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req,res) => {
    res.send(data.jabones);
    res.send(data.homeSpray);
    res.send(data.flowers);
    res.send(data.velas);
    res.send(data.difussers);
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")});
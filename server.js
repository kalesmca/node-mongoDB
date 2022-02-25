import express from "express";

const app = express();

app.listen(1000);


app.get('/', (req, res) => {
    console.log('running success');
    res.send('HI done')
})
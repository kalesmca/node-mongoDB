import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config.json';

let app = express();
app.server = http.createServer(app);
app.get('/', function (req, res) {
    res.send("comming");
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});

export default app;
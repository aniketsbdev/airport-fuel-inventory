const express = require('express');
const app = express();
const fs = require('fs');

let rawdata = fs.readFileSync('SampleData.json');
let fileData = JSON.parse(rawdata);

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/login', (req, res) => {
    let users = fileData.user;
    for (const user of users) {
        if (req.body.email == user.email && req.body.password == user.password) {
            res.status(200).send({ userFound: true, userName: user.name });
            break;
        } else {
            res.status(403).send({ userFound: false });
        }
    }
});;

app.get('/airportData', (req, res) => {
    res.json({ data: fileData.airport } || {});
});;

console.log("HeyHessy");
app.listen(3031);
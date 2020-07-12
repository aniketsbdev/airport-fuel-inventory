const express = require('express');
const app = express();

const user1 = { userName: "Anni", password: "New" }

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/login', (req, res) => {
    if (req.body.name == user1.userName && req.body.password == user1.password) {
        res.status(200).send({ userFound: true, userName: user1.userName });
    }
});;

app.get('/logins', (req, res) => {
    res.json(users);
});;

console.log("HeyHessy");
app.listen(3031);
// Load in our dependencies
var express = require('express');
var jwt = require('jsonwebtoken');
var axios = require('axios');

// Register the route to get a new token
// In a real world scenario we would authenticate user credentials
// before creating a token, but for simplicity accessing this route
// will generate a new token that is valid for 2 minutes
app.get('/token', function (req, res, username, password) {
    var token = jwt.sign({ username: username }, password, { expiresIn: 120 });
    res.send(token);
})



// Register a route that requires a valid token to view data
app.get('/api', function (req, res, username, password) {
    var token = req.query.token;
    jwt.verify(token, 'supersecret', function (err, decoded) {
        if (!err) {
            var secrets = { 'accountNumber': '938291239', 'pin': '11289', 'account': 'Finance' };
            res.json(secrets);
        } else {
            res.send(err);
        }
    })
})

//------------------------------------------------------------------------------------//

const express = require("express");
const app = express();
const db = require("./models");
const { Users } = require("./models");

const bcrypt = require("bcrypt");
const { createTokens, validateToken } = require("./JWT");

app.use(express.json());

app.post("/register", (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        })
            .then(() => {
                res.json("USER REGISTERED");
            })
            .catch((err) => {
                if (err) {
                    res.status(400).json({ error: err });
                }
            });
    });
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) res.status(400).json({ error: "User Doesn't Exist" });

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res
                .status(400)
                .json({ error: "Wrong Username and Password Combination!" });
        } else {
            const accessToken = createTokens(user);

            res.json("LOGGED IN");
        }
    });
});

app.get("/profile", validateToken, (req, res) => {
    res.json("profile");
});

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
});



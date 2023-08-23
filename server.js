const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const crypto = require('crypto'); // Import crypto for secret key generation
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: generateSecretKey(), // Use the generated secret key
    resave: false,
    saveUninitialized: true
}));

const usersDB = './users.json';

if (!fs.existsSync(usersDB)) {
    fs.writeFileSync(usersDB, '[]');
}

app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Replace this with a secure authentication mechanism
    if (username === 'mohan' && password === '1234') {
        req.session.isLoggedIn = true;
        req.session.username = username;
        res.redirect('/chatbot.html');
    } else {
        res.status(401).send('Invalid credentials.');
    }
});

app.get('/chatbot.html', (req, res) => {
    if (!req.session.isLoggedIn) {
        res.redirect('/login.html');
        return;
    }

    res.sendFile(__dirname + '/public/chatbot.html');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Function to generate a random 32-character secret key
function generateSecretKey() {
    return crypto.randomBytes(16).toString('hex');
}

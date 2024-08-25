const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package

const app = express();

app.use(bodyParser.json());
app.use(cors());  // Use the cors middleware

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "john_doe_17091999";  // This should be dynamically generated
    const email = "john@xyz.com";
    const roll_number = "ABCD123";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercase_alphabets = data.filter(item => /^[a-z]$/.test(item));
    const highest_lowercase_alphabet = lowercase_alphabets.length ? [Math.max(...lowercase_alphabets)] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet
    });
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

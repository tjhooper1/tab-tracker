const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! You were registered! Have fun!`
    });
});

app.listen(process.env.PORT || 8081, () => {
    console.log('app started on port');
        
});
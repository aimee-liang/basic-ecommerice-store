const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe')('sk_test_51IIKpuG5DSaF9r7jz8YAOzk3E7GrtTXprJceOF1tAf33ISoGWokDTPsfuiTcjktT5dLk7SHs79fpVt5IDcxBwVPn00hclj6ir2'); // Add your Secret Key Here

const app = express();

// This will make our form data much more useful
app.use(bodyParser.urlencoded({ extended: true }));

// This will set express to render our views folder, then to render the files as normal html
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, './views')));

// Future Code Goes Here

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running...'));
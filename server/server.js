require('./config/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use(express.static(path.join(__dirname, '../') + '/build'));


// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../', '/EcommerceApp', 'index.html'));
//     // console.log(req);
//     // res.sendFile(path.join(__dirname, '../', '/public', 'index.html'));
//   });

app.use('/api/v1', require('./routes/authRoute'));

app.use((req, res, next) => {
    next(createError(404));
});


const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`${port} port is open`);
})
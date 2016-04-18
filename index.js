'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let htmlCode = '';

app.use(express.static('./static'));
app.use(bodyParser.json());

app.get('/getHtml', (req, res) => {
    res.send(htmlCode);
});

app.post('/changeHtml', (req, res) => {
    let data = req.body;
    let css = data.css;
    let js = data.js;
    let html = data.html;
    htmlCode =
        `<html>
            <head>
                <meta charset="utf-8" />
            </head>
            <style>
                ${css}
            </style>
            <body>
                ${html}
                <script type="text/javascript">${js}</script>
            </body>
        </html>`;
    res.send('ok');
});

app.listen(3000);
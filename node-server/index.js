let appInsights = require("applicationinsights");

appInsights.setup("YOUR_CONNECTION_STRING")
.enableWebInstrumentation(true)
.start();

const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async function (req, response) {
    await axios.get("http://127.0.0.1:8080/")
        .then((res) => {
            response.setHeader("Content-Type", "html");
            response.status(200);
            response.setHeader("Content-Length", res.data.length);

            response.write(res.data);
            response.end();
        });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
const express = require('express');
const app = express();
const port = 9090;

app.get('/', (req, res) => {

    console.log("request received");
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000

// GET /foo.js etc
app.use(express.static(__dirname + '/public'));

app.set('port', PORT);
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/pypy.html'));
})

app.listen(app.get('port'), ()=>{
    console.log('started press ctrl-c to stop');
});
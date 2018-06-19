const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 4000;


const app = express();


app.get('/', (req, res) => {


    res.json([
        {
            id: 1,
            name: 'Andrews',
            age: 30
        },

        {
            id: 2,
            name: 'Sam',
            age: 33
        },

        {
            id: 3,
            name: 'Eugene',
            age: 25
        },
    ])

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(PORT, () => {
   console.log('listening on port', PORT);
});




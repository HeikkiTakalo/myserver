import express from 'express';

var app = express();

app.listen(3001, () => {
    console.log('The server is running!!');
    
});

//Endpoint definition.
app.get('/', (req, res) => {
    //Here we go if this endpoint is called.
    res.send('You just called root!!');
});

//Another endpoint
app.get('/user', (req, res) => {
    res.send('Getting user information');
});

//Third endpoint
app.get('/account', (req, res) => {
    res.send('Waiting account information')
});
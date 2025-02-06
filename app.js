import express from 'express';

const app = express();

app.use(express.urlencoded({extended: true}));

const PORT = 3000;
const apptList = [];

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/send-form', (req, res) => {
    //console.log(req.body);
    apptList.push(req.body);
    res.send(`<h1>Confirmed! See you then ${req.body.fname}!</h1>`);
});

app.get('/admin/appointments', (req, res) => {
     res.send(apptList);
});

app.listen(PORT, () => {
    console.log(`Servers running at http://localhost:${PORT}`);
});
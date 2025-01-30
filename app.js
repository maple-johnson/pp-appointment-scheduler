import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.listen(PORT, () => {
    console.log(`Servers running at http://localhost:${PORT}`);
});
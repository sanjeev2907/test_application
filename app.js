const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 Development Environment</h1>
        <h2>Server: DEV</h2>
        <p>Branch: dev</p>
`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

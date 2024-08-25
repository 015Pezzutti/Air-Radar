const express = require('express');
const dotenv = require('dotenv');
const flightRoutes = require('./routes/flights');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/flights', flightRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

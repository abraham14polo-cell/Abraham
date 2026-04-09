const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('frontend'));

app.use('/api/tipos', require('./routes/tipoRoutes'));
app.use('/api/personas', require('./routes/personaRoutes'));

app.listen(3000, () => {
    console.log("🚀 Servidor en http://localhost:3000");
});
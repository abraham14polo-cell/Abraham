const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());

app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('frontend'));

// LOGIN
app.use('/api/auth', require('./routes/authRoutes'));

// PROTEGER
app.use('/api', (req, res, next) => {
    if (req.session.user) next();
    else res.status(401).json({ error: "No autorizado" });
});

// RUTAS
app.use('/api/tipos', require('./routes/tipoRoutes'));
app.use('/api/personas', require('./routes/personaRoutes'));
app.use('/api/clientes', require('./routes/clienteRoutes'));
app.use('/api/empleados', require('./routes/empleadoRoutes'));
app.use('/api/propietarios', require('./routes/propietarioRoutes'));

app.listen(3000, () => console.log("Servidor OK"));
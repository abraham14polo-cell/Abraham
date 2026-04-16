const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: true
}));

// LOGIN
app.use('/api/auth', require('./routes/authRoutes'));

// PROTEGER TODO
app.use((req, res, next) => {
    if (req.session.user || req.path.includes("login")) {
        next();
    } else {
        res.status(401).json({ error: "No autorizado" });
    }
});

// FRONTEND
app.use(express.static('frontend'));

// CRUDS
app.use('/api/tipos', require('./routes/tipoRoutes'));
app.use('/api/personas', require('./routes/personaRoutes'));
app.use('/api/empleados', require('./routes/empleadoRoutes'));
app.use('/api/clientes', require('./routes/clienteRoutes'));
app.use('/api/propietarios', require('./routes/propietarioRoutes'));

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
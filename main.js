const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth.route.js');

const app = express();

app.use(cors());

// ESTAS DUAS LINHAS SÃO OBRIGATÓRIAS PARA LER O REQ.BODY:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoute);

const port = 3000;
app.listen(port, () => console.log(`Servidor online em localhost:${port}`));
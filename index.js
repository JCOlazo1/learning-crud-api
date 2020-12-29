import express from 'express';
import bodyParser from 'body-parser';
import usersRouters from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRouters);

// Routes:
app.get('/', (req, res) => res.send('Hello World'));



app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
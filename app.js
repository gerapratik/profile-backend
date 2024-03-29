require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');
const profileRouter = require('./routes/profileRouter');
const { initialiseDb } = require('./utils/mongo');

const app = express();

app.use(cors(
    {
        methods: 'GET,PUT,POST,DELETE'
    }
));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/profile', profileRouter);

const port = 5000;

app.listen(port, () => {
    initialiseDb();
    console.log(`App listening at http://localhost:${port}`)
})
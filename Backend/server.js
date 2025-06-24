const express = require('express');

const dotenv =require('dotenv');
// const connection = require('./config/db');
const connectDB = require('./config/db');
const router = require('./routers/egROuters');   

dotenv.config();


const app = express();

const PORT = process.env.PORT;
connectDB();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

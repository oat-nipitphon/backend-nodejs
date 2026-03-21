require('dotenv').config();
const express = require();
const mongoose = require();

const app = express();
const POST = process.env.POST || 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected Success.');
}).catch((error) => {
    console.error('Connected Error -> ', error);
});
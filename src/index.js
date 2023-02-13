const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const dotenv = require('dotenv').config();
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', authRouter);
app.use('/api/products', productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

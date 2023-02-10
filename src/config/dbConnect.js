const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.set('strictQuery', false);

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));
};

module.exports = dbConnect;

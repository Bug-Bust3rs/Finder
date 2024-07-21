const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URI } = require('./configs/config');
const authRouter = require('./routes/authRouter');

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
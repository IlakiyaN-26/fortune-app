const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const fortuneRoute = require('./routes/fortune');
// const profileRoutes = require('./routes/profile');
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
/* mongoose.connect('mongodb+srv://ilakzilakzilakz:X2KhNgNipMEb2zoj@cluster0.f91qfqz.mongodb.net/?appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err)); */


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', signupRoute);
app.use('/api', loginRoute);
app.use('/api', fortuneRoute)
app.use('/api', userRoutes)
// app.use('/api', profileRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


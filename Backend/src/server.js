const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const pollRoutes = require('./routes/pollRoutes');
const userRoutes = require('./routes/userRoutes');
const { setupSocket } = require('./utils/socket');
const http = require('http');

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/polls', pollRoutes);
app.use('/users', userRoutes);

setupSocket(server);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});

const corsConfig = {
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:4000'],
  optionsSuccessStatus: 200,
  credentials: true,
};

module.exports = corsConfig;

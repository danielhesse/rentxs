import 'dotenv/config';

import express from 'express';

const server = express();

server.use(express.json());

server.listen(process.env.PORT || 3333, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 3333}!`);
});

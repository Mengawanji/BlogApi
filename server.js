import app, { initializeApp } from './src/app.js';
import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 3000;
await initializeApp();

app.listen(PORT, () => {
  logger.info({ port: PORT }, `Server running`);
});
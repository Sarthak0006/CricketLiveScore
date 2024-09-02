import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env.development
dotenv.config({ path: '.env.development' });

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

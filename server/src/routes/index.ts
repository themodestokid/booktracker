import type { Request, Response } from 'express';
import express from 'express';
const router = express.Router();

//import path from 'node:path';
//import { fileURLToPath } from 'node:url';
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

// serve up react front-end in production
router.use((req: Request, _res: Response) => {
  console.log('request for unknown path', req.url)
  //res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;

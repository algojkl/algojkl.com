import express from 'express';
import loginController from '../controllers/loginController.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { password } = req.body;

  if (password !== process.env.SECRET_PASSWORD)
    return res.status(401).json({ success: false, message: 'Väärä salasana' });

  const content = await loginController();
  if (!content)
    return res.status(404).json({ success: false, message: 'Sisältöä ei löytynyt' });

  res.json({ success: true, content });
});

export default router;

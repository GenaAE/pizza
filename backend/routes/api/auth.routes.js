const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');

router.post('/signIn', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email || password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        const newUser = {
          id: user.id,
          name: user.name,
          number: user.number,
          email: user.email,
          isAdmin: user.isAdmin,
          isAuthorized: user.isAuthorized,
        };
        req.session.userId = newUser.id;
        res.status(201).json({ user: newUser, message: 'ok' });
      } else {
        res.status(403).json({ message: 'Ваш email пароль не соответствуют' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post('/signUp', async (req, res) => {
  const { name, email, password, number } = req.body;

  try {
    if (name || email || password || number) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
        let newUser = await User.create({
          name,
          email,
          number,
          password: hash,
          isAdmin: false,
          isAuthorized: true,
        });
        newUser = {
          id: newUser.id,
          name: newUser.name,
          number: newUser.number,
          email: newUser.email,
          isAdmin: newUser.isAdmin,
          isAuthorized: newUser.isAuthorized,
        };

        req.session.userId = newUser.id;
        res.status(201).json({ user: newUser, message: 'ok' });
      } else {
        res.status(403).json({ message: 'Такой email уже существует' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res.clearCookie('user_sid').json({ message: 'Успешный выход' });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/checkUser', async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (userSession) {
      const user = await User.findOne({
        where: { id: userSession },
        attributes: { exclude: ['password'] },
      });
      res.status(201).json({ user, message: 'ok' });
    } else {
      res.end();
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;

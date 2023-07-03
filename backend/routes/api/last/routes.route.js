const { Priceroute, Route, User } = require('../../db/models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const priceRoutes = await Priceroute.findAll({ raw: true });
    const routes = await Route.findAll({ raw: true });
    res.json({ priceRoutes, routes });
  } catch (error) {
    console.log(error.message);
  }
});

router.put('/:id', async ({ body: { price }, params: id, session }, res) => {
  try {
    const userId = session.userId;
    const { dataValues: check } = await User.findOne({
      where: { id: userId },
    });
    if (check.isAdmin) {
      const priceRoute = await Priceroute.findOne({
        where: id,
      });
      priceRoute.price = price;
      await priceRoute.save();
      res.json({ priceRoute, message: 'ok' });
    } else {
      res.status(403).json({ message: 'Доступ запрещен' });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json(e.message);
  }
});

module.exports = router;

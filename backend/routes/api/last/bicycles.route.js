const router = require('express').Router();
const { Bicycle } = require('../../db/models');

router.get('/', (req, res) => {
  Bicycle.findAll({ raw: true })
    .then((bicycles) => res.json(bicycles))
    .catch((error) => console.log(error.message));
});

router.get('/:id', (req, res) => {
  const { BicycleId } = req.params;
  Bicycle.findOne({ where: { id: Number(BicycleId) } })
    .then((bicycle) => res.json(bicycle))
    .catch((error) => console.log(error.message));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const bicDel = await Bicycle.destroy({ where: { id } });
    if (bicDel > 0) {
      res.json(id);
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.post('/', async (req, res) => {
  const { name, description, image, price } = req.body;
  try {
    // создание в БД новой сущности
    const bicycle = await Bicycle.create({
      name: name,
      description: description,
      image: image,
      hour_price: price,
    });
    res.json(bicycle);
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;
    if (name && description && image) {
      const BicycleUpd = await Bicycle.findOne({
        where: { id: Number(id) },
      });
      BicycleUpd.name = name;
      BicycleUpd.description = description;
      BicycleUpd.image = image;
      (BicycleUpd.hour_price = price), BicycleUpd.save();
      res.json(BicycleUpd);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;

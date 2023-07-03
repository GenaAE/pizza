const router = require('express').Router();
const { House } = require('../../db/models');


router.get('/', (req, res) => {
  House.findAll({ raw: true })
    .then((houses) => res.json(houses))
    .catch((error) => console.log(error.message));
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  House.findOne({ where: { id } })
    .then((house) => res.json(house))
    .catch((error) => console.log(error.message));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  House.destroy({ where: { id: Number(id) } })
    .then((house) => res.json(house))
    .catch((error) => console.log(error.message));
});

router.post('/', async (req, res) => {
  const { type, description, image } = req.body;
  try {
    const house = await House.create({
      type: type,
      description: description,
      image: image,
    });
    res.json(house);
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { type, description, image } = req.body;
    if (type && description && image) {
      const houseUpd = await House.findOne({
        where: { id },
      });
      houseUpd.type = type;
      houseUpd.description = description;
      houseUpd.image = image;
      houseUpd.save();
      res.json(houseUpd);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
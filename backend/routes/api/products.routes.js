const router = require('express').Router();
const { Product_Card } = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const products = await Product_Card.findAll({
      order: [['path', 'DESC']],
    });
    res.status(200).json(products);
  } catch (message) {
    res.json(message);
  }
});
router.route('/:path').get(async (req, res) => {
  try {
    const products = await Product_Card.findAll({
      raw: true,
      order: [['path', 'ASC']],
    });

    res.status(200).json(products);
  } catch (message) {
    res.json(message);
  }
});

module.exports = router;

// --------------------------------------- КОМЕНТАРИИ ---------------------------------------//
// При записи на сервер именнофизически нужно await fs.rm(`${__dirname}/../../public${image}`);

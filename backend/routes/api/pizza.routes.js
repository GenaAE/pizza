const router = require('express').Router();
const { Product_Card } = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const products = await Product_Card.findAll({
      where: { product_category: 'Пицца' },
    });
    console.log(products);
    res.status(200).json(products);
  } catch (message) {
    res.json(message);
  }
});
module.exports = router;

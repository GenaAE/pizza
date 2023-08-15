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
router.route('/').post(async (req, res) => {
  console.log(req.body, 'ooopppp');
  const {
    product_category,
    product_name,
    image,
    path,
    weight,
    price,
    composition,
  } = req.body;
  //   if (product_category && product_name) {
  try {
    const product = await Product_Card.create({
      product_category,
      product_name,
      composition,
      image,
      path,
      weight,
      price,
    });
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
  //   }
});

// изменить на назв блюда по анг-ки
router.route('/:id').delete(async (req, res) => {
  // и вынимать натке название
  // const { id } = req.params;
  const { id } = req.params;

  try {
    const del = await Product_Card.findOne({ where: { id } });
    const doneDel = await Product_Card.destroy({ where: { id } });
    res.status(200).json(del.id);
  } catch (err) {
    // if (result) {
    //   res.status(500).json({id });
    // } else {
    //   res.status(500).json(err);
    // }
  }
});

module.exports = router;

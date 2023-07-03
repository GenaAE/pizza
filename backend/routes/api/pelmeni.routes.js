const router = require('express').Router();
const { Product_Card } = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const allPelmeni = await Product_Card.findAll({
      where: { product_category: 'Пельмени' },
    });

    res.status(200).json(allPelmeni);
  } catch (message) {
    res.json(message);
  }
});
router.route('/:id').delete(async (req, res) => {
  try {
    console.log(req.params.id, 'ooooooo');
    const idPelmen = req.params.id;
    const deletePelmen = await Product_Card.destroy({
      where: { id: req.params.id },
    });
    console.log(deletePelmen, '!!!!!');
    res.json(idPelmen);
  } catch (message) {
    res.json(message);
  }
});
module.exports = router;

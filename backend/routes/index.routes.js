const router = require('express').Router();
const authRoter = require('./api/auth.routes');
const main = require('./api/products.routes');
const pizza = require('./api/pizza.routes');
const admin = require('./api/admin.routes');
const pelmeni = require('./api/pelmeni.routes');

router.use('/pelmeni', pelmeni);
router.use('/auth', authRoter);
router.use('/products', main);
// раскидать одну таблицу по запросам на разные пути
// и обрабвтывать запрос тут а не отгружать все на фронт
router.use('/products/:path', pizza);
router.use('/admin', admin);

module.exports = router;

const router = require('express').Router();
const { Boat } = require('../../db/models');
const fs = require('fs/promises');

router.route('/')
  .get(async (req, res) => {
    try {
      const boats = await Boat.findAll({ raw: true, })
      res.status(200).json(boats)
    } catch (message) {
      res.json(message)
    }
  })
  .post(async (req, res) => {
    if (req.session?.userId !== 1) {
      return res.status(403).json({ msg: 'Forbidden' })
    }
    const file = req.files?.image;
    if (!file) {
      return res.status(400).json({ msg: 'No uploaded file' })
    }
    const fileMime = file.mimetype
    const fileLength = file.size
    const allowedMime = /image\/.*/
    if (!allowedMime.test(fileMime)) {
      return res.status(400).json({ msg: 'Unsupported extension !' })
    }
    if (fileLength > 5000000) {
      return res.status(400).json({ msg: 'File must be less than 5MB' })
    }
    const extension = file.name.split('.').pop()
    const currentName = encodeURI(Date.now() + '.' + extension);
    file.name = currentName;
    const URL = `/uploads/images/${currentName}`
    const dirToUpload = `${__dirname}/../../public/uploads/images/${currentName}`
    try {
      await file.mv(dirToUpload)
    } catch (err) {
      res.status(500).json(err)
    }
    const { type, description } = req.body
    if (type && URL) {
      try {
        const boat = await Boat.create({ type, image: URL, description })
        res.status(200).json(boat)
      } catch (err) {
        res.status(500).json(err)
      }
    }
  })

router.route('/:id')
  .put(async (req, res) => {
    if (req.session?.userId !== 1) {
      return res.status(403).json({ msg: 'Forbidden' })
    }
    const { id, type, description } = req.body;
    const imageToUpload = req.files?.image;
    let URL;

    if (imageToUpload) {
      const fileMime = imageToUpload.mimetype
      const fileLength = imageToUpload.size
      const allowedMime = /image\/.*/

      if (!allowedMime.test(fileMime)) {
        return res.status(400).json({ msg: 'Unsupported extension !' })
      }
      if (fileLength > 5000000) {
        return res.status(400).json({ msg: 'File must be less than 5MB' })
      }
      const extension = imageToUpload.name.split('.').pop()
      const currentName = encodeURI(Date.now() + '.' + extension);
      URL = `/uploads/images/${currentName}`
      const dirToUpload = `${__dirname}/../../public/uploads/images/${currentName}`
      try {
        await imageToUpload.mv(dirToUpload)
      } catch (err) {
        res.status(500).json(err)
      }
    }
    let result;
    try {
      const { image } = await Boat.findOne({ where: { id } });
      const [_, [boat]] = await Boat.update({ type, image: URL, description }, { where: { id }, returning: true })
      result = boat;
      await fs.rm(`${__dirname}/../../public${image}`);
      res.status(200).json(boat)
    } catch (err) {
      if (result) {
        res.status(500).json({ err, result })
      } else {
        res.status(500).json(err)
      }
    }

  })
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  let result;
  try {
    const { image } = await Boat.findOne({ where: { id } });
    result = await Boat.destroy({ where: { id }, returning: true });
    await fs.rm(`${__dirname}/../../public${image}`);
    res.status(200).json({ id })
  } catch (err) {
    if (result) {
      res.status(500).json({ err, id })
    } else {
      res.status(500).json(err);
    }
  }
})

module.exports = router;

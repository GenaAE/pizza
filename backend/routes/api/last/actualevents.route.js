const router = require('express').Router();
const { ActualEvent } = require('../../../db/models');
const fs = require('fs/promises');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const actualEvents = await ActualEvent.findAll({ raw: true });
      res.status(200).json(actualEvents);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    if (req.session?.userId !== 1) {
      return res.status(403).json({ msg: 'Forbidden' });
    }
    const file = req.files?.image;
    if (!file) {
      return res.status(400).json({ msg: 'No uploaded file' });
    }
    const fileMime = file.mimetype;
    const fileLength = file.size;
    const allowedMime = /image\/.*/;
    if (!allowedMime.test(fileMime)) {
      return res.status(400).json({ msg: 'Unsupported extension !' });
    }
    if (fileLength > 5000000) {
      return res.status(400).json({ msg: 'File must be less than 5MB' });
    }
    const extension = file.name.split('.').pop();
    const currentName = encodeURI(Date.now() + '.' + extension);
    file.name = currentName;
    const URL = `/uploads/images/${currentName}`;
    const dirToUpload = `${__dirname}/../../public/uploads/images/${currentName}`;
    try {
      await file.mv(dirToUpload);
    } catch (err) {
      res.status(500).json(err);
    }
    const { title, date, description } = req.body;
    if (title && date && URL) {
      try {
        const actualEvent = await ActualEvent.create({
          title,
          date,
          image: URL,
          description,
        });
        res.status(200).json(actualEvent);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  });

router
  .route('/:id')
  .put(async (req, res) => {
    if (req.session?.userId !== 1) {
      return res.status(403).json({ msg: 'Forbidden' });
    }
    const { id, title, date, description } = req.body;
    const imageToUpload = req.files?.image;
    let URL;

    if (imageToUpload) {
      const fileMime = imageToUpload.mimetype;
      const fileLength = imageToUpload.size;
      const allowedMime = /image\/.*/;

      if (!allowedMime.test(fileMime)) {
        return res.status(400).json({ msg: 'Unsupported extension !' });
      }
      if (fileLength > 5000000) {
        return res.status(400).json({ msg: 'File must be less than 5MB' });
      }
      const extension = imageToUpload.name.split('.').pop();
      const currentName = encodeURI(Date.now() + '.' + extension);
      const URL = `/uploads/images/${currentName}`;
      const dirToUpload = `${__dirname}/../../public/uploads/images/${currentName}`;
      try {
        await imageToUpload.mv(dirToUpload);
      } catch (err) {
        res.status(500).json(err);
      }
    }
    let result;
    if (URL && date) {
      try {
        const { image } = await ActualEvent.findOne({ where: { id } });
        const [_, [actualEvent]] = await ActualEvent.update(
          { title, date, image: URL, description },
          { where: { id }, returning: true }
        );
        result = actualEvent;
        await fs.rm(`${__dirname}/../../public${image}`);
        res.status(200).json(actualEvent);
      } catch (err) {
        if (result) {
          res.status(500).json({ err, result });
        } else {
          res.status(500).json(err);
        }
      }
    } else if (!URL && !date) {
      try {
        const [_, [actualEvent]] = await ActualEvent.update(
          { title, description },
          { where: { id }, returning: true }
        );
        res.status(200).json(actualEvent);
      } catch (err) {
        res.status(500).json(err);
      }
    } else if (!URL && date) {
      try {
        const [_, [actualEvent]] = await ActualEvent.update(
          { date, title, description },
          { where: { id }, returning: true }
        );
        res.status(200).json(actualEvent);
      } catch (err) {
        res.status(500).json(err);
      }
    } else if (URL && !date) {
      try {
        const [_, [actualEvent]] = await ActualEvent.update(
          { title, image: URL, description },
          { where: { id }, returning: true }
        );
        res.status(200).json(actualEvent);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  })

  .delete(async (req, res) => {
    if (req.session?.userId !== 1) {
      return res.status(403).json({ msg: 'Forbidden' });
    }
    const { id } = req.params;
    let result;
    try {
      const { image } = await ActualEvent.findOne({ where: { id } });
      result = await ActualEvent.destroy({ where: { id }, returning: true });
      await fs.rm(`${__dirname}/../../public${image}`);
      res.status(200).json({ id });
    } catch (err) {
      if (result) {
        res.status(500).json({ err, id });
      } else {
        res.status(500).json(err);
      }
    }
  });
module.exports = router;

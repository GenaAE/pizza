const router = require('express').Router();
const { Op } = require('sequelize');
const {
  User,
  routesApplication,
  routesApplicationList,
  Boat_Rent_Application,
  Boat_Rent_Application_List,
  Bicycle_Application,
  Bicycle_Application_List,
  House_Application,
  House_Application_List,
  RentPerDay,
} = require('../../db/models');

router.get('/routes', (req, res) => {
  User.findAll({
    raw: true,
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    include: [
      {
        model: routesApplication,
        where: {
          id: {
            [Op.not]: null,
          },
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
          model: routesApplicationList,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      },
    ],
  }).then((data) => res.json(data));
});

router.get('/boats', (req, res) => {
  User.findAll({
    raw: true,
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    include: [
      {
        model: Boat_Rent_Application,
        where: {
          id: {
            [Op.not]: null,
          },
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
          model: Boat_Rent_Application_List,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      },
    ],
  }).then((data) => res.json(data));
});

router.get('/houses', (req, res) => {
  User.findAll({
    raw: true,
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    include: [
      {
        model: House_Application,
        where: {
          id: {
            [Op.not]: null,
          },
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
          model: House_Application_List,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      },
    ],
  }).then((data) => res.json(data));
});

router.get('/bicycles', (req, res) => {
  User.findAll({
    raw: true,
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    include: [
      {
        model: Bicycle_Application,
        where: {
          id: {
            [Op.not]: null,
          },
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
          model: Bicycle_Application_List,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      },
    ],
  }).then((data) => res.json(data));
});

router.get('/users', (req, res) => {
  User.findAll({
    raw: true,
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  }).then((data) => res.json(data));
});

router.get('/rent', (req, res) => {
  RentPerDay.findAll({ raw: true }).then((data) => res.json(data));
});

router.post('/routes', async (req, res) => {
  try {
    const app = await routesApplication.create({
      user_id: req.body.id,
      status: 'Принята',
    });
    const appList = await routesApplicationList.create({
      routes_Application_Id: app.id,
      boat_id: req.body.boat_id,
      route_id: req.body.route_id,
      date: req.body.date,
    });

    const result = await User.findAll({
      raw: true,
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: routesApplication,
          where: {
            id: {
              [Op.not]: null,
            },
          },
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: {
            model: routesApplicationList,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        },
      ],
    });
    res.json(result);
  } catch (e) {
    res.json(e.message);
  }
});

router.post('/boats', async (req, res) => {
  try {
    const app = await Boat_Rent_Application.create({
      user_id: req.body.id,
      status: 'Принята',
    });

    const appList = await Boat_Rent_Application_List.create({
      boat_Rent_Application_id: app.id,
      boat_id: req.body.boat_id,
      date_start: req.body.date_start,
      date_end: req.body.date_end,
    });

    const result = await User.findAll({
      raw: true,
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Boat_Rent_Application,
          where: {
            id: {
              [Op.not]: null,
            },
          },
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: {
            model: Boat_Rent_Application_List,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        },
      ],
    });
    res.json(result);
  } catch (e) {
    res.json(e.message);
  }
});

router.post('/houses', async (req, res) => {
  try {
    const app = await House_Application.create({
      user_id: req.body.id,
      status: 'Принята',
    });
    const appList = await House_Application_List.create({
      house_Application_id: app.id,
      house_id: req.body.house_id,
      date_start: req.body.date_start,
      date_end: req.body.date_end,
    });

    const result = await User.findAll({
      raw: true,
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: House_Application,
          where: {
            id: {
              [Op.not]: null,
            },
          },
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: {
            model: House_Application_List,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        },
      ],
    });
    res.json(result);
  } catch (e) {
    res.json(e.message);
  }
});

router.post('/bicycles', async (req, res) => {
  try {
    const app = await Bicycle_Application.create({
      user_id: req.body.id,
      status: 'Принята',
    });
    const appList = await Bicycle_Application_List.create({
      bicycle_Application_id: app.id,
      bicycle_id: req.body.bicycle_id,
      date_start: req.body.date_start,
      date_end: req.body.date_end,
    });

    const result = await User.findAll({
      raw: true,
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      include: [
        {
          model: Bicycle_Application,
          where: {
            id: {
              [Op.not]: null,
            },
          },
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: {
            model: Bicycle_Application_List,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        },
      ],
    });
    res.json(result);
  } catch (e) {
    res.json(e.message);
  }
});

module.exports = router;

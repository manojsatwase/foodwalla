const express = require('express');
const { createUserVisitInfo } = require('../controllers/UserVisitController');

const router = express();

router.route("/saveuserapi").post(createUserVisitInfo);

module.exports = router;
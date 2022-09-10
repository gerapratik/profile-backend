const { getUserProfile, editProfile } = require('../controllers/profileController');
const { authenticateToken } = require('../utils/jwt');

const profileRouter = require('express').Router();

profileRouter.post('/editProfile',authenticateToken, editProfile);
profileRouter.get('/getUserProfile',authenticateToken, getUserProfile)

module.exports = profileRouter;
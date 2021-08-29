const express = require('express');
const NotificationController = require('../Controllers/Notification')

const router = express.Router()

router.post('/addNotification',NotificationController.addNotification)
router.get('/getNotification/:id_utilisateur',NotificationController.getNotificationById)
router.delete('/deleteNotification/:_id',NotificationController.delete)

module.exports = router;
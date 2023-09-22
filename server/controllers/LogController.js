const db = require('../models/LogModel');

const LogController = {
  async createLog(req, res, next) {
    console.log('inisde createLog')
    const { anxietyLevel, trigger, log } = req.body;

    try {
      const newLog = await db.create({
        anxietyLevel: anxietyLevel,
        trigger: trigger,
        log: log,
      });
      newLog.save();
      return next();
    } catch (error) {
      console.log(e);
    }
  },
};

module.exports = LogController;

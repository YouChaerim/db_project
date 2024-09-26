const pool = require('../db');

exports.getHome = async (req, res) => {
  const user_id = req.session.user_id;
  console.log("user_id: ", user_id);

  res.send({
    message: 'home',
    user_id: user_id,
  })
};

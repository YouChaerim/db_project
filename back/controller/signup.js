const pool = require('../db');

exports.postSignup = async (req, res) => {
    console.log('회원가입 페이지');

    const { user_id, password, name } = req.body;

    const saveUser = await pool.query(
        "insert into user(user_id, password, name) values (?, ?, ?)",
        [user_id, password, name]
    );

    return res.send('회원가입 완로');
}
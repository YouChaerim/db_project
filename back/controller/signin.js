const pool = require('../db');

exports.postSignIn = async (req, res) => {
    console.log('로그인 페이지');

    const { user_id, password } = req.body;

    const findByUserId = await pool.query(
        "select * from user where user_id = ?",
        [user_id]
    );

    const user = findByUserId[0][0];
    if (password != user.password) {
        res.send('비밀번호가 일치하지 않음')
    }

    req.session.user_id = user.user_id;
    req.session.name = user.name;

    console.log("!!!", req.session);

    return res.send('로그인 완료');
}


exports.getLogout = async (req, res) => {
    console.log('로그아웃');

    if(req.session.user_id) {
        req.session.destroy(()=> {
            res.redirect('/');
        });
    } else {
        console.log("세션이 없음");
    }
}
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wjdgoals',
    database: 'CEData'
});
connection.connect();

exports.checkToken = function (req, res, next) {
    var token = req.headers['x-access-token'];
    console.log(token);
    if (!token) {
        next();
    } else {
        connection.query("SELECT userSeq, email, name, phone, profileImageUrl, typeSeq, accessToken FROM User WHERE accessToken = ?"
            , token, function (err, userInfos) {
                if (err) {
                    console.log(err);
                    next();
                } else if (userInfos.length == 0) {
                    console.log(userInfos);
                    console.log("Expired! " +token);
                    next();
                } else {
                    req.userInfo = userInfos[0];
                    next();
                }
            });
    }
};
exports.connection = connection;
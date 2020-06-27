var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const hmUtil = require('../config/hmUtil');
const connection = hmUtil.connection;

function getJwtToken(payload) {
    const header = {
        "typ": "JWT",
        "alg": "HS256"
    };

    const encodedPayload = new Buffer(JSON.stringify(payload))
        .toString('base64')
        .replace('=', '');
    return encodedPayload;
}

/**
 *
 *  @api {get} /auth/checkToken Check User's AccessToken
 *  @apiName TokenLogin
 *  @apiGroup Auth
 *  @apiHeader {String} x-access-token 사용자 액세스 토큰
 *
 *  @apiSuccess {int} userSeq 사용자 번호
 *  @apiSuccess {String} email  사용자 이메일
 *  @apiSuccess {String} name 사용자 이름
 *  @apiSuccess {String} phone 전화번호
 *  @apiSuccess {long} joinTime 가입 일자
 *  @apiSuccess {String} profileImageUrl 프로필 이미지 링크
 *  @apiSuccess {int} typeSeq 사용자 권한 번호
 *  @apiSuccess {String} accessToken 사용자 액세스토큰
 */
router.get('/checkToken', function (req, res, next) {
    if (req.userInfo) {
        res.status(200).send(req.userInfo);
    } else {
        res.status(403).send({"message": "토큰이 만료되었습니다."});
    }
});

/**
 *
 * @api {post} /auth/emailLogin 이메일 로그인
 * @apiName EmailLogin
 * @apiGroup Auth
 * @apiParam {String} email 이메일
 * @apiParam {String} pw 패스워드
 *
 *  @apiSuccess {int} userSeq 사용자 번호
 *  @apiSuccess {String} email  사용자 이메일
 *  @apiSuccess {String} name 사용자 이름
 *  @apiSuccess {String} phone 전화번호
 *  @apiSuccess {long} joinTime 가입 일자
 *  @apiSuccess {String} profileImageUrl 프로필 이미지 링크
 *  @apiSuccess {int} typeSeq 사용자 권한 번호
 *  @apiSuccess {String} accessToken 사용자 액세스토큰
 */
router.post('/emailLogin', function (req, res, next) {
    var email = req.body.email;
    var pw = req.body.pw;
    var cryptoPw = crypto.createHash('sha512').update(pw).digest('base64');
    //Todo : 레인보우 테이블 방어가 필요함.
    connection.query("SELECT * FROM User WHERE email = ? and pw = ?", [email, cryptoPw], function (err, userInfo) {
        if (err) {
            console.log(err);
            next();
        } else {
            if (userInfo.length === 0) {
                res.status(403).send({"message": "이메일 혹은 비밀번호가 일치하지 않습니다."});
            } else {
                var token = getJwtToken([email, pw, Date.now()]);
                connection.query("UPDATE User SET accessToken = ? WHERE userSeq = ?", [token, userInfo.userSeq]);
                userInfo.accessToken = token;
                res.status(200).send(userInfo);
            }
        }
    });
});

/**
 * @api {post} /auth/register 회원가입
 * @apiName 회원가입
 * @apiGroup Auth
 * @apiParam {String} email 이메일
 * @apiParam {String} pw 패스워드
 * @apiParam {String} typeSeq 유저 타입 // 0 : normal, 1: 학생회
 *
 * @apiSuccess {int} userSeq 사용자 번호
 *  @apiSuccess {String} email  사용자 이메일
 *  @apiSuccess {String} name 사용자 이름
 *  @apiSuccess {String} phone 전화번호
 *  @apiSuccess {long} joinTime 가입 일자
 *  @apiSuccess {String} profileImageUrl 프로필 이미지 링크
 *  @apiSuccess {int} typeSeq 사용자 권한 번호
 *  @apiSuccess {String} accessToken 사용자 액세스토큰
 */
router.post('/register', function (req, res, next) {
    var params = {
        email: req.body.email,
        pw: req.body.pw
    }
    var cryptoPw = crypto.createHash('sha512').update(params.pw).digest('base64');
    params.pw = cryptoPw;
    //Todo : 레인보우 테이블 방어가 필요함.
    connection.query("INSERT INTO User SET ?", params, function (err, userInfo) {
        if (err) {
            console.log(err);
            next();
        } else {
            if (userInfo.length === 0) {
                res.status(403).send({"message": "이메일 혹은 비밀번호가 일치하지 않습니다."});
            } else {
                var token = getJwtToken([email, pw, Date.now()]);
                connection.query("UPDATE User SET accessToken = ? WHERE userSeq = ?", [token, userInfo.insertId]);
                userInfo.accessToken = token;
                res.status(200).send(userInfo);
            }
        }
    });
});
module.exports = router;

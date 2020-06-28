var express = require('express');
var router = express.Router();
const hmUtil = require('../config/hmUtil');
const connection = hmUtil.connection;

/**
 *  @api {post} /profile/info/:userSeq Check User's AccessToken
 *  @apiName 프로필 수정
 *  @apiGroup Profile
 *  @apiHeader {String} x-access-token 사용자 액세스 토큰
 *  @apiParam {String} phone 전화번호
 *  @apiParam {String} name 이름
 *
 *
 */
router.post('/info/:userSeq', function(req, res, next) {
    var params = {
        phone : req.body.phone,
        name : req.body.name
    };
    if(!req.userInfo){
        res.status(403).send({"message" : "AccessToken Expired!"});
    }else{
        connection.query("UPDATE User SET ? where userSeq = ?", [params, req.userInfo.userSeq],
            function (err, result) {
                if(err){
                    console.log(err);
                    res.status(500).send({"message" : "Internal Server Error!"});
                }else{
                    res.status(200).send("");
                }
            })
    }
});

/**
 *  @api {post} /profile/image/:userSeq Check User's AccessToken
 *  @apiName 프로필 이미지 업로드
 *  @apiGroup Profile
 *  @apiHeader {String} x-access-token 사용자 액세스 토큰
 *  @apiParam {File} file 이미지 파일 Part객체
 *
 *
 */

router.post('/image/:userSeq', function (req, res, next) {
    if(req.file){
        if(req.userInfo){
            connection.query("UPDATE User SET profileImageUrl = ? where userSeq = ?",['http://'+req.headers.host+'/uploads/'+req.file.filename, req.userInfo.userSeq],
                function (err, result) {
                    if(err){
                        console.log(err);
                        res.status(500).send({"message" : "internal server error"});
                    }else{
                        res.status(200).send({});
                    }
                })
        }else{
            console.log("Token Expired! 인것이와요");
            res.status(403).send({"message" : "Token Expired!"});
        }
    }else{
        res.status(400).send({"message" : "파일 형식이 올바르지 않습니다."});
    }
});


module.exports = router;

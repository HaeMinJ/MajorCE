var express = require('express');
var router = express.Router();
const hmUtil = require('../config/hmUtil');
const connection = hmUtil.connection;

const BOARD_SEQ = 1;
/**
 * @api {get} /community 이벤트 리스트
 * @apiName getCommunityList
 * @apiGroup Community
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 *
 */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM Post as post JOIN User as user WHERE post.boardSeq = ? and post.uploaderSeq = user.userSeq order by post.uploadTime desc', BOARD_SEQ, function (err, communityList) {
        if (err) {
            console.log(err);
            res.status(500).send({"message": "Internal Server SQL Error"});
        } else {
            res.status(200).send(communityList);
        }
    });
});

/**
 * @api {get} /community/posts/:postSeq
 * @apiName getCommunityItem
 * @apiGroup Community
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParam {String} postSeq 게시글 번호
 */
router.get('/posts/:postSeq', function (req, res, next){
    connection.query('SELECT * FROM Post as post JOIN User as user WHERE post.boardSeq = ? and post.postSeq = ? and post.uploaderSeq = user.userSeq order by post.uploadTime desc', [BOARD_SEQ,req.params.postSeq], function (err, postInfos) {
        if(err){
            console.log(err);
            res.status(500).send({"message" : "Internal Server SQL Errror!"});
        }else{
            res.status(200).send(postInfos[0]);
        }
    });
});

/**
 * @api {get} /community/comments/:postSeq 댓글 확인
 * @apiName getComments
 * @apiGroup Comments
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParam {String} postSeq 게시글 번호
 */
router.get('/comments/:postSeq', function (req, res, next) {
    connection.query("SELECT * FROM Comment AS co JOIN User AS us WHERE co.postSeq = ? and co.uploaderSeq = us.userSeq order by co.uploadTime desc",req.params.postSeq ,function (err, commentList) {
        if(err){
            console.log(err);
            res.status(500).send({"message" : "Internal Server SQL Error!"});
        }else{
            res.status(200).send(commentList);
        }
    })
});
/**
 * @api {post} /community/comments/ 댓글 작성
 * @apiName postComments
 * @apiGroup Comments
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParam {String} postSeq 게시글 번호
 *
 */
router.post('/comments/:postSeq', function (req, res, next) {
    if(req.userInfo){
        var params = {
            uploaderSeq : req.userInfo.userSeq,
            postSeq : req.params.postSeq,
            commentContents : req.body.commentContents,
            uploadTime : Date.now()
        };
        connection.query("INSERT INTO Comment SET ?",params, function (err, insertInfo) {
            if(err){
                console.log(err);
                res.status(500).send({"message" : "Internal SQL Error!"});
            }else{
                res.status(200).send({});
            }
        })
    }else{
        res.status(403).send({"message" : "토큰이 만료되었습니다."});
    }
});
/**
 *
 * @api {get} /community/files/:postSeq 커뮤니티 첨부된 파일 리스트
 * @apiName getCommunityFileList
 * @apiGroup Community
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParam {String} postSeq 게시글 번호
 */
router.get('/files/:postSeq',function (req, res, next) {
    connection.query('SELECT * FROM PostAttachFile WHERE postSeq = ?', req.params.postSeq, function (err, fileList) {
        if(err){
            console.log(err);
            res.status(500).send({"message":"Internal Server SQL Error!"});
        }else{
            res.status(200).send(fileList);
        }
    })
});
/**
 * @api {post} /community 커뮤니티 게시글 입력
 * @apiName postCommunityInfo
 * @apiGroup Community
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParam {String} title 제목
 * @apiParam {String} contents 내용
 *
 * @apiSuccess {String} postSeq 추가된 게시글 번호
 * @apiSuccess {String} title 추가된 게시글 제목
 * @apiSuccess {String} contents 추가된 게시글 내용
 */
router.post('/', function (req, res, next) {
    if(!req.userInfo){
        res.status(403).send({"message": "액세스 토큰이 만료되었습니다."});
    }else{
        var params = {
            title : req.body.title,
            contents : req.body.contents,
            boardSeq : BOARD_SEQ,
            uploaderSeq : req.userInfo.userSeq,
            uploadTime : Date.now()
        };
        connection.query("INSERT INTO Post SET ?", params, function (err, resultInfo) {
            if(err){
                console.log(err);
                res.status(400).send({});
            }else{
                params.postSeq = resultInfo.insertId;
                res.status(200).send(params);
            }
        })
    }
});

/**
 * @api {post} /event/files/:postSeq 이벤트 파일 첨부
 * @apiName postEventFileList
 * @apiGroup Event
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParam {File} file 첨부할 파일 -> 하나씩 여러번 호출한다.
 *
 */
router.post('/files/:postSeq', function (req, res, next) {
    if (!req.userInfo) {
        res.status(403).send({"message": "액세스 토큰이 만료되었습니다."});
    }else {
        var params = {
            postSeq: req.params.postSeq,
            fileUrl: 'http://' + req.headers.host + '/uploads/' + req.file.filename,
            fileName: req.file.filename,
            fileType: 'image',
            uploadTime: Date.now(),
            uploaderSeq: req.userInfo.userSeq
        };
        connection.query("INSERT INTO PostAttachFile SET ?", params, function (err, resultInfo) {
            if (err) {
                console.log(err);
                res.status(400).send({"message": "Bad Request"});
            } else {
                res.status(200).send({});
            }
        })
    }
});

module.exports = router;

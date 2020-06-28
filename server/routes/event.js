var express = require('express');
var router = express.Router();
const hmUtil = require('../config/hmUtil');
const connection = hmUtil.connection;

const BOARD_SEQ = 0;
/**
 * @api {get} /event 이벤트 리스트
 * @apiName getEventList
 * @apiGroup Event
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 *
 */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM Post as post JOIN User as user WHERE post.boardSeq = ? and post.uploaderSeq = user.userSeq order by post.uploadTime desc', BOARD_SEQ, function (err, eventList) {
        if (err) {
            console.log(err);
            res.status(500).send({"message": "Internal Server SQL Error"});
        } else {
            res.status(200).send(eventList);
        }
    });
});

/**
 * @api {get} /event/files/:postSeq 이벤트 첨부된 파일 리스트
 * @apiName getEventFileList
 * @apiGroup Event
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParam {String} postSeq 게시글 번호
 */
router.get('/files/:postSeq', function (req, res, next) {
    connection.query('SELECT * FROM PostAttachFile WHERE postSeq = ?', req.params.postSeq, function (err, fileList) {
        if (err) {
            console.log(err);
            res.status(500).send({"message": "Internal Server SQL Error!"});
        } else {
            res.status(200).send(fileList);
        }
    })
});

/**
 * @api {post} /event 이벤트 정보입력
 * @apiName postEventInfo
 * @apiGroup Event
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParam {String} title 제목
 * @apiParam {String} contents 내용
 *
 * @apiSuccess {String} postSeq 추가된 게시글 번호
 * @apiSuccess {String} title 추가된 게시글 제목
 * @apiSuccess {String} contents 추가된 게시글 내용
 */
router.post('/', function (req, res, next) {
    if (!req.userInfo) {
        res.status(403).send({"message": "액세스 토큰이 만료되었습니다."});
    } else if (req.userInfo.userType == 0) {
        res.status(403).send({"message": "학생회 등급 이상의 회원만 작성할 수 있습니다."});
    } else {
        var params = {
            title: req.body.title,
            contents: req.body.contents,
            uploadTime : Date.now(),
            uploaderSeq: req.userInfo.userSeq,
            boardSeq: BOARD_SEQ
        };
        connection.query("INSERT INTO Post SET ?", params, function (err, resultInfo) {
            if (err) {
                console.log(err);
                res.status(400).send({});
            } else {
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
    } else if (req.userInfo.userType == 0) {
        res.status(403).send({"message": "학생회 등급 이상의 회원만 작성할 수 있습니다."});
    } else {
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

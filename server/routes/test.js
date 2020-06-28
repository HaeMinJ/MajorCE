var express = require('express');
var router = express.Router();
const hmUtil = require('../config/hmUtil');
const connection = hmUtil.connection;
const BOARD_SEQ = 2;
/**
 * @api {get} /test 테스트 리스트
 * @apiName getTestList
 * @apiGroup Test
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 *
 */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM Post, User WHERE boardSeq = ? by userSeq', BOARD_SEQ, function (err, testList) {
        if (err) {
            console.log(err);
            res.status(500).send({"message": "Internal Server SQL Error"});
        } else {
            res.status(200).send(testList);
        }
    });
});
/**
 * @api {get} /test/files/:postSeq 시험에 첨부된 파일 리스트
 * @apiName getTestFileList
 * @apiGroup Test
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParams {String} postSeq 게시글 번호
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
 * @api {post} /test 테스트 정보입력
 * @apiName postTestInfo
 * @apiGroup Test
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParams {String} title 제목
 * @apiParams {String} contents 내용
 * @apiParams {String} testName 시험 이름
 * @apiParams {long} testTime 시험 시간
 * @apiParams {String} testRange 시험 범위
 * @apiParams {String} className 강의 이름
 *
 * @apiSuccess {String} postSeq 추가된 게시글 번호
 * @apiSuccess {String} title 추가된 게시글 제목
 * @apiSuccess {String} contents 추가된 게시글 내용
 */
router.post('/', function (req, res, next) {
    if (!req.userInfo) {
        res.status(403).send({"message": "액세스 토큰이 만료되었습니다."});
    } else {
        var params = {
            title: req.body.title,
            contents: req.body.contents,
            uploadTime : Date.now(),
            uploaderSeq: req.userInfo.userSeq
        };
        var testParams = {
            testName : req.body.testName,
            testTime : req.body.testTime,
            testRange : req.body.testRange,
            className : req.body.className
        };
        connection.query("INSERT INTO Post SET ?", params, function (err, resultInfo) {
            if (err) {
                console.log(err);
                res.status(400).send({});
            } else {
                connection.query("INSERT INTO TestInfo SET ?", testParams, function (err ,dummyData) {
                    if(err){
                        console.log(err);
                        res.status(400).send({});
                    }else{
                        params.postSeq = resultInfo.insertId;
                        res.status(200).send(params);
                    }
                });
            }
        });
    }
});

/**
 * @api {post} /test/files/:postSeq 테스트 파일 첨부
 * @apiName postTestFileList
 * @apiGroup Test
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParams {File} file 첨부할 파일 -> 하나씩 여러번 호출한다.
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
            updateTime: Date.now(),
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

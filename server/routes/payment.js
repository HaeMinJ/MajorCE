var express = require('express');
var router = express.Router();
const hmUtil = require('../config/hmUtil');
const connection = hmUtil.connection;
const BOARD_SEQ = 3;
/**
 * @api {get} /test 테스트 리스트
 * @apiName getTestList
 * @apiGroup Test
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 *
 */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM Post, User WHERE boardSeq = ? by userSeq', BOARD_SEQ, function (err, paymentList) {
        if (err) {
            console.log(err);
            res.status(500).send({"message": "Internal Server SQL Error"});
        } else {
            res.status(200).send(paymentList);
        }
    });
});
/**
 * @api {get} /payment/files/:postSeq 결제 목록 첨부된 파일 리스트
 * @apiName getPaymentFileList
 * @apiGroup Payment
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
 * @api {post} /payment 결제 정보입력
 * @apiName postPaymentInfo
 * @apiGroup Payment
 * @apiHeader {String} x-access-token 사용자 액세스 토큰
 * @apiParams {String} title 제목
 * @apiParams {String} contents 내용
 * @apiParams {String} paymentTitle 결제 제목
 * @apiParams {String} paymentContents 결제 내용
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
        var paymentParams = {
            testName : req.body.paymentTitle,
            testTime : req.body.paymentContents
        };
        connection.query("INSERT INTO Post SET ?", params, function (err, resultInfo) {
            if (err) {
                console.log(err);
                res.status(400).send({});
            } else {
                connection.query("INSERT INTO Payment SET ?", paymentParams, function (err ,dummyData) {
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
 * @api {post} /payment/files/:postSeq 결제정보 파일 첨부
 * @apiName postPaymentFileList
 * @apiGroup Payment
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

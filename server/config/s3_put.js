var multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
var upload = multer({ dest: '../uploads/' });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, "HM_"+parseInt(Date.now() /1000)+"_"+file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
});
exports.upload = multer({ storage: storage });
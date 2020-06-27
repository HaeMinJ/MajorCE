define({ "api": [
  {
    "type": "post",
    "url": "/auth/emailLogin",
    "title": "이메일 로그인",
    "name": "EmailLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>패스워드</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "userSeq",
            "description": "<p>사용자 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>사용자 이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>사용자 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "joinTime",
            "description": "<p>가입 일자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profileImageUrl",
            "description": "<p>프로필 이미지 링크</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "typeSeq",
            "description": "<p>사용자 권한 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>사용자 액세스토큰</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/auth/emailLogin"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/checkToken",
    "title": "Check User's AccessToken",
    "name": "TokenLogin",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 액세스 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "userSeq",
            "description": "<p>사용자 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>사용자 이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>사용자 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "joinTime",
            "description": "<p>가입 일자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profileImageUrl",
            "description": "<p>프로필 이미지 링크</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "typeSeq",
            "description": "<p>사용자 권한 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>사용자 액세스토큰</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/auth/checkToken"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "회원가입",
    "name": "회원가입",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>패스워드</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeSeq",
            "description": "<p>유저 타입 // 0 : normal, 1: 학생회</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "userSeq",
            "description": "<p>사용자 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>사용자 이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>사용자 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "joinTime",
            "description": "<p>가입 일자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profileImageUrl",
            "description": "<p>프로필 이미지 링크</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "typeSeq",
            "description": "<p>사용자 권한 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>사용자 액세스토큰</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/auth/register"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/read.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\read.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\read.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\json.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\json.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/raw.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\raw.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\raw.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\text.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\text.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\text.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\text.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\urlencoded.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\urlencoded.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\urlencoded.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\urlencoded.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\urlencoded.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\body-parser\\lib\\types\\urlencoded.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\commander\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\content-disposition\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\cookie-signature\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\cookie-signature\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\cookie-signature\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\cookie-signature\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\browser.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\debug.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\node.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\node.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\node.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\node.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\node.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\debug\\src\\node.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/etag/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\etag\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\etag\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/express.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\express.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\express.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/init.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\middleware\\init.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\middleware\\init.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/query.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\middleware\\query.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\middleware\\query.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\router\\layer.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\router\\layer.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\router\\layer.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\router\\layer.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\router\\layer.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\router\\layer.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\router\\route.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\router\\route.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\express\\lib\\utils.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\jsonwebtoken\\node_modules\\ms\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\jsonwebtoken\\node_modules\\ms\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\jsonwebtoken\\node_modules\\ms\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\jsonwebtoken\\node_modules\\ms\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\jsonwebtoken\\node_modules\\ms\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\jsonwebtoken\\node_modules\\ms\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\jsonwebtoken\\node_modules\\ms\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\jsonwebtoken\\node_modules\\ms\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/lazy-cache/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\lazy-cache\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\lazy-cache\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\media-typer\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\ms\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\ms\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\ms\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\ms\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\ms\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\ms\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\ms\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\ms\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/path-to-regexp/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\path-to-regexp\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\path-to-regexp\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-code-gen/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-code-gen\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-lexer/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-lexer\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-parser/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-parser/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-parser/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-parser/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-parser/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-parser/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-parser/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-parser\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-runtime/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-runtime\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-runtime\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-runtime/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-runtime\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-runtime\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug-runtime/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-runtime\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug-runtime\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/pug/lib/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\pug\\lib\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/repeat-string/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\repeat-string\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\repeat-string\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\send\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\util-deprecate\\browser.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\util-deprecate\\browser.js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\util-deprecate\\browser.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\util-deprecate\\browser.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/utils-merge/index.js",
    "group": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\utils-merge\\index.js",
    "groupTitle": "C:\\Users\\goals\\Desktop\\SeoulTech\\MajorCEGit\\server\\node_modules\\utils-merge\\index.js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000public"
      }
    ]
  }
] });

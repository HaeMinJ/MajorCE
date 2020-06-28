define({ "api": [
  {
    "type": "post",
    "url": "/auth/emailLogin",
    "title": "이메일 로그인",
    "parameter": {
      "examples": [
        {
          "title": "email:",
          "content": "\"haemin001212@naver.com\"",
          "type": "String"
        },
        {
          "title": "pw:",
          "content": "\"as001212\"",
          "type": "String"
        }
      ],
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
    "name": "EmailLogin",
    "group": "Auth",
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
    "filename": "routes/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/auth/emailLogin"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/tokenLogin",
    "title": "토큰 자동 로그인",
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
    "filename": "routes/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/auth/tokenLogin"
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
    "filename": "routes/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/auth/register"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community/files/:postSeq",
    "title": "커뮤니티 첨부된 파일 리스트",
    "name": "getCommunityFileList",
    "group": "Community",
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
    "version": "0.0.0",
    "filename": "routes/community.js",
    "groupTitle": "Community",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/community/files/:postSeq"
      }
    ]
  },
  {
    "type": "get",
    "url": "/community",
    "title": "이벤트 리스트",
    "name": "getCommunityList",
    "group": "Community",
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
    "version": "0.0.0",
    "filename": "routes/community.js",
    "groupTitle": "Community",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/community"
      }
    ]
  },
  {
    "type": "post",
    "url": "/community",
    "title": "커뮤니티 게시글 입력",
    "name": "postCommunityInfo",
    "group": "Community",
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
            "type": "String",
            "optional": false,
            "field": "postSeq",
            "description": "<p>추가된 게시글 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>추가된 게시글 제목</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contents",
            "description": "<p>추가된 게시글 내용</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/community.js",
    "groupTitle": "Community",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/community"
      }
    ]
  },
  {
    "type": "get",
    "url": "/event/files/:postSeq",
    "title": "이벤트 첨부된 파일 리스트",
    "name": "getEventFileList",
    "group": "Event",
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
    "version": "0.0.0",
    "filename": "routes/event.js",
    "groupTitle": "Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/event/files/:postSeq"
      }
    ]
  },
  {
    "type": "get",
    "url": "/event",
    "title": "이벤트 리스트",
    "name": "getEventList",
    "group": "Event",
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
    "version": "0.0.0",
    "filename": "routes/event.js",
    "groupTitle": "Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/event"
      }
    ]
  },
  {
    "type": "post",
    "url": "/event/files/:postSeq",
    "title": "이벤트 파일 첨부",
    "name": "postEventFileList",
    "group": "Event",
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
    "version": "0.0.0",
    "filename": "routes/community.js",
    "groupTitle": "Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/event/files/:postSeq"
      }
    ]
  },
  {
    "type": "post",
    "url": "/event/files/:postSeq",
    "title": "이벤트 파일 첨부",
    "name": "postEventFileList",
    "group": "Event",
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
    "version": "0.0.0",
    "filename": "routes/event.js",
    "groupTitle": "Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/event/files/:postSeq"
      }
    ]
  },
  {
    "type": "post",
    "url": "/event",
    "title": "이벤트 정보입력",
    "name": "postEventInfo",
    "group": "Event",
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
            "type": "String",
            "optional": false,
            "field": "postSeq",
            "description": "<p>추가된 게시글 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>추가된 게시글 제목</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contents",
            "description": "<p>추가된 게시글 내용</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/event.js",
    "groupTitle": "Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/event"
      }
    ]
  },
  {
    "type": "get",
    "url": "/payment/files/:postSeq",
    "title": "결제 목록 첨부된 파일 리스트",
    "name": "getPaymentFileList",
    "group": "Payment",
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
    "version": "0.0.0",
    "filename": "routes/payment.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/payment/files/:postSeq"
      }
    ]
  },
  {
    "type": "post",
    "url": "/payment/files/:postSeq",
    "title": "결제정보 파일 첨부",
    "name": "postPaymentFileList",
    "group": "Payment",
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
    "version": "0.0.0",
    "filename": "routes/payment.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/payment/files/:postSeq"
      }
    ]
  },
  {
    "type": "post",
    "url": "/payment",
    "title": "결제 정보입력",
    "name": "postPaymentInfo",
    "group": "Payment",
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
            "type": "String",
            "optional": false,
            "field": "postSeq",
            "description": "<p>추가된 게시글 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>추가된 게시글 제목</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contents",
            "description": "<p>추가된 게시글 내용</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/payment.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/payment"
      }
    ]
  },
  {
    "type": "post",
    "url": "/profile/info/:userSeq",
    "title": "Check User's AccessToken",
    "name": "프로필_수정",
    "group": "Profile",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/profile/info/:userSeq"
      }
    ]
  },
  {
    "type": "post",
    "url": "/profile/image/:userSeq",
    "title": "Check User's AccessToken",
    "name": "프로필_이미지_업로드",
    "group": "Profile",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>이미지 파일 Part객체</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/profile/image/:userSeq"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test/files/:postSeq",
    "title": "시험에 첨부된 파일 리스트",
    "name": "getTestFileList",
    "group": "Test",
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
    "version": "0.0.0",
    "filename": "routes/test.js",
    "groupTitle": "Test",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/test/files/:postSeq"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test",
    "title": "테스트 리스트",
    "name": "getTestList",
    "group": "Test",
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
    "version": "0.0.0",
    "filename": "routes/payment.js",
    "groupTitle": "Test",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/test"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test",
    "title": "테스트 리스트",
    "name": "getTestList",
    "group": "Test",
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
    "version": "0.0.0",
    "filename": "routes/test.js",
    "groupTitle": "Test",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/test"
      }
    ]
  },
  {
    "type": "post",
    "url": "/test/files/:postSeq",
    "title": "테스트 파일 첨부",
    "name": "postTestFileList",
    "group": "Test",
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
    "version": "0.0.0",
    "filename": "routes/test.js",
    "groupTitle": "Test",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/test/files/:postSeq"
      }
    ]
  },
  {
    "type": "post",
    "url": "/test",
    "title": "테스트 정보입력",
    "name": "postTestInfo",
    "group": "Test",
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
            "type": "String",
            "optional": false,
            "field": "postSeq",
            "description": "<p>추가된 게시글 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>추가된 게시글 제목</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contents",
            "description": "<p>추가된 게시글 내용</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/test.js",
    "groupTitle": "Test",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/test"
      }
    ]
  }
] });

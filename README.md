## RequireJS + Backbone.js ##

* 8월 3주
  * Backbone.Router 에서 routes의 /:param1/:param2를 두개만 가질 수 있으므로 라우터의 변경이 필요  
  * 상위의 router.js 파일이 하나 있고 거기에서 각각의 컨텐츠마다 라우터를 만들어준다.   
  * loginRouter.js 와 employeeRouter.js 의 파일을 추가 
  * validation 적용 및 테스트 
  * 아이디 비밀번호를 입력시 alert.js와 modal.js를 이용해 유효성을 체크를 한다. 
  * model.validate 메소드 사용

* 8월 4주
  * 로그인과 대시보드의 레이아웃을 잡기 위해 새로운 뷰를 생성한다.
  * 네비게이션, 사이드바, 컨텐츠 영역을 템플릿으로 뽑는다.
  * 라우터에서 각각의 뷰를 생성한다. 
  * 대시보드 화면에서는 사이드바를 보여주지 않는다.

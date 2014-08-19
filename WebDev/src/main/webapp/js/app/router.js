define(function(require) {
	
	var Backbone = require('backbone'),
		LoginRouter = require('app/LoginRouter'),
		EmployeeRouter = require('app/EmployeeRouter');
	
	// 각 컨텐츠마다 라우터를 만든다. 
	var loginRouter = new LoginRouter();
	var employeeRouter = new EmployeeRouter();
	
	return this;
});
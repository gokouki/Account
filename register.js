define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};
	   Model.prototype.loginBtnClick = function(event) {
	   
		   		var username = this.comp("username").val();
                var password = this.comp("password").val();
                var password2 = this.comp("password2").val();
                var userdata = this.comp("userData");
                                
                if ($.trim(this.comp('username').val()) === "" || $.trim(this.comp('password').val()) === "") {
			        justep.Util.hint("账号或密码不能为空");
                }else{
                	userdata.clear();
                	userdata.setFilter("userFilter",  "username = '" + username + "'");
                	 userdata.refreshData();
                    if(userdata.count() > 0){
                    	justep.Util.hint("该用户名已经存在!");
                    	window.location.href="./register.w";
                    	userdata.filters.clear();
                     }else{
                    	 if(password != password2)
                    	 {
                    		 justep.Util.hint("两次输入的密码不一致");
                    		 window.location.href="./register.w";
                    	 }
                    	 else{
	                    	 userdata.newData({
								"defaultValues" : [ {
									//"userID" : Math.floor(Math.random()*100),
									//"time" : new Date(),
									"username" : username,
									"userpass" : password
								} ]
							});
								userdata.saveData();
								justep.Util.hint("你可以用刚注册的用户名 登录啦~");
	                    	 	window.location.href="./Login.w";
	                    	 	
                    	 }
                    	 	
                     }
                    }
                  
    };
	Model.prototype.retClick = function(event){
		window.location.href="./Login.w";
	};
	return Model;
});
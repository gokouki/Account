define(function(require) {
    var $ = require("jquery");
    var justep = require("$UI/system/lib/justep");
    var MD5 = require("$UI/system/lib/base/md5");

    var Model = function() {
        this.callParent();
        this.md5 = new MD5();
    };
    // 登录
   Model.prototype.loginBtnClick = function(event) {
	   
		   		var username = this.comp("username").val();
                var password = this.comp("password").val();
                var userdata = this.comp("userData");
                                
                if ($.trim(this.comp('username').val()) === "" || $.trim(this.comp('password').val()) === "") {
			        justep.Util.hint("账号或密码不能为空");
                }else{
                	userdata.clear();
                	userdata.setFilter("userFilter",  "username = '" + username + "'");
                	userdata.setFilter("userFilter",  "userpass = '" + password + "'");
                	 userdata.refreshData();
                    if(userdata.count() > 0){
                    	justep.Util.hint("欢迎您:"+username);
                    	console.log(username);
                    	this.comp("windowDialog1").open({params:{operator:username}});
                    	userdata.filters.clear();
                     }else{
                    	justep.Util.hint("请输入正确的账户或密码");
                    	 	window.location.href="./Login.w";
                     }
                    }
                  
    };
  


    Model.prototype.button1Click = function(event){
    	window.location.href="./register.w";
	};
  


    return Model;
});
define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var username;
	var Model = function() {
		this.callParent();
		
	};

	Model.prototype.addBtnClick = function(event) {
		this.comp("windowDialog1").open({
			params : {
				operator : 'new',
				operator1:username
			}

		});
	};

	Model.prototype.editacc = function(event){
	var row=event.bindingContext.$object;
        this.comp("windowDialog1").open({
			params : {
				operator : 'edit',
				rowdata:row.toJson()
			}
		})
	};

	Model.prototype.windowDialog1Received = function(event){
   this.comp("accData").saveData();
	};
Model.prototype.modelParamsReceive = function(event) {
	username = this.params.operator;
     return this.params.operator;
	};

	Model.prototype.delBtnClick = function(event){
     var row=event.bindingContext.$object;
        this.comp("accData").deleteData(row);
	};
	Model.prototype.settingBtnClick = function(event) {
		// 通过Shell显示左边的设置
		//justep.Shell.showLeft();
		this.comp("wing1").showLeft();
	};
	Model.prototype.backBtnClick = function(event){
	justep.Shell.showLeft();

	};

	Model.prototype.classSettingBtnClick = function(event) {
		justep.Shell.showPage("$UI/acc/classSetting.w");
	};

	

	Model.prototype.exitClick = function(event){
			justep.Shell.showPage("$UI/acc/Login.w");
	};

	

	return Model;
});
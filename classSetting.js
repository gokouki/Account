define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.newBtnClick = function(event){
		this.comp("classData").newData({
				"defaultValues" : [ {
					"fID" : justep.UUID.createUUID(),

				} ]
			})
	};

	Model.prototype.delBtnClick = function(event){
		var row = event.bindingContext.$object;
		this.comp("classData").deleteData(row);
	};

	Model.prototype.saveBtnClick = function(event){
		this.comp("classData").saveData();
	};

	return Model;
});
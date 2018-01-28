define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/bootstrap/form/form');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/acc/Login'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c7jqQ7f';
	this._flag_='751649fe625503a663aeffc54bdaa1b5';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"time":{"define":"time","label":"time","name":"time","relation":"time","rules":{"time":true},"type":"Time"},"username":{"define":"username","label":"username","name":"username","relation":"username","type":"String"},"userpass":{"define":"userpass","label":"userpass","name":"userpass","relation":"userpass","type":"String"}},"directDelete":false,"events":{},"filters":{"filter0":""},"idColumn":"username","isMain":false,"limit":20,"queryAction":"queryUser","saveAction":"saveUser","tableName":"user","url":"/acc/acc","xid":"userData"});
}}); 
return __result;});
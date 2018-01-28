define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/wing/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/wing/wing');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/acc/list'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ciiqumm';
	this._flag_='c5e043caa573ddb3e359bda4a1796e2f';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fClass":{"define":"fClass","label":"fClass","name":"fClass","relation":"fClass","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"fCreateTime","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fDate":{"define":"fDate","label":"fDate","name":"fDate","relation":"fDate","rules":{"date":true},"type":"Date"},"fDescription":{"define":"fDescription","label":"fDescription","name":"fDescription","relation":"fDescription","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fMoney":{"define":"fMoney","label":"fMoney","name":"fMoney","relation":"fMoney","rules":{"number":true},"type":"Decimal"},"fType":{"define":"fType","label":"fType","name":"fType","relation":"fType","type":"String"},"username":{"define":"username","label":"username","name":"username","relation":"username","type":"String"}},"directDelete":true,"events":{},"idColumn":"fID","isMain":false,"limit":20,"queryAction":"queryAccount","saveAction":"saveAccount","tableName":"account","url":"/acc/acc","xid":"accData"});
}}); 
return __result;});
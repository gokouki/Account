window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_a45de238f5314df488f1b959bd12b104l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_8a862b2564604580a4db650bda371e17l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_5bb0a81b08b747b18c8a2973ce50541al_zh_CNs_desktopd_pc/system/core.min.js','/v_6694e6a387254b1c9124e42ffaf01ba8l_zh_CNs_desktopd_pc/system/common.min.js','/v_b5ea465f305d4248a5f0bf5780bf6750l_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
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

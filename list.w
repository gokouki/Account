<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:366px;left:677px;"> 
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="accData" queryAction="queryAccount" saveAction="saveAccount" url="/acc/acc" tableName="account" idColumn="fID" confirmDelete="false" confirmRefresh="false" directDelete="true"><column label="fID" name="fID" type="String" xid="default17"></column>
  <column label="username" name="username" type="String" xid="default18"></column>
  <column label="fCreateTime" name="fCreateTime" type="DateTime" xid="default19"></column>
  <column label="fDate" name="fDate" type="Date" xid="default20"></column>
  <column label="fMoney" name="fMoney" type="Decimal" xid="default21"></column>
  <column label="fDescription" name="fDescription" type="String" xid="default22"></column>
  <column label="fType" name="fType" type="String" xid="default23"></column>
  <column label="fClass" name="fClass" type="String" xid="default24"></column></div></div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/acc/detail.w" onReceived="windowDialog1Received" style="top:12px;left:110px;"><result concept="accData" operation="edit" origin="accData" xid="default25">
   <mapping from="fID" to="fID" locator="true" xid="default26"></mapping>
   <mapping from="username" to="username" xid="default27"></mapping>
   <mapping from="fCreateTime" to="fCreateTime" xid="default28"></mapping>
   <mapping from="fDate" to="fDate" xid="default29"></mapping>
   <mapping from="fMoney" to="fMoney" xid="default30"></mapping>
   <mapping from="fDescription" to="fDescription" xid="default31"></mapping>
   <mapping from="fType" to="fType" xid="default32"></mapping>
   <mapping from="fClass" to="fClass" xid="default33"></mapping></result></span>
  <div component="$UI/system/components/justep/wing/wing" class="x-wing" xid="wing1">
   <div class="x-wing-left" xid="left">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar2" title="设置">
     <div class="x-titlebar-left" xid="left2"></div>
     <div class="x-titlebar-title" xid="title1">设置</div>
     <div class="x-titlebar-right reverse" xid="right2"></div></div> 
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg" label="用户信息" xid="userInfo" style="width:100%;" bind-text=" $model.modelParamsReceive(event)">
   <i xid="i7"></i>
   <span xid="span8">用户信息</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg" label="设置分类" xid="classSettingBtn" onClick="classSettingBtnClick" style="width:100%;">
     <i xid="i5"></i>
     <span xid="span6">设置分类</span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg" label="退出登录" xid="exit" style="width:100%;" onClick="exitClick">
   <i xid="i6"></i>
   <span xid="span7">退出登录</span></a></div> 
   <div class="x-wing-content" xid="content2">
    <div class="x-wing-backdrop" xid="div7"></div>
    <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
     <div class="x-panel-top" xid="top1">
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="记账本">
       <div class="x-titlebar-left" xid="div1">
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="设置" xid="settingBtn" icon="icon-navicon-round" onClick="settingBtnClick">
         <i xid="i4" class="icon-navicon-round"></i>
         <span xid="span5">设置</span></a> 
  </div> 
       <div class="x-titlebar-title" xid="div2">记账本</div>
       <div class="x-titlebar-right reverse" xid="div3">
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="新增" xid="addBtn" icon="icon-android-add" onClick="addBtnClick">
         <i xid="i2" class="icon-android-add"></i>
         <span xid="span2">新增</span></a> </div> </div> </div> 
     <div class="x-panel-content x-scroll-view" xid="content1" _xid="C7D2A5A76BA000013EC11C61C90614B4" style="bottom: 0px; background-size: cover; background-image: url(http://localhost:41725/x5/UI2/v_/acc/none);">
      <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
       <div class="x-content-center x-pull-down container" xid="div6">
        <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i3"></i>
        <span class="x-pull-down-label" xid="span3">下拉刷新...</span></div> 
       <div class="x-scroll-content" xid="div5">
        <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="accData" filter=' $row.val("username") ==  $model.modelParamsReceive(event)'>
         <ul class="x-list-template" xid="listTemplateUl1">
          <li xid="li1">
           <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
            <div class="x-col" xid="col1" bind-click="editacc">
             <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
              <div class="x-col" xid="col4">
               <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("fClass")' style="font-size:x-large;" bind-style="{color:  val(&quot;fType&quot;)=='收入'?'green':'brown'}"></div></div> 
              <div class="x-col" xid="col5">
               <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("fMoney")' style="font-size:x-large;" bind-style="{color:  val(&quot;fType&quot;)=='收入'?'green':'brown'}"></div></div> </div> 
             <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
              <div class="x-col" xid="col7">
               <div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("fDescription")'></div></div> 
              <div class="x-col" xid="col8">
               <div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("fDate")'></div></div> </div> </div> 
            <div class="x-col x-col-fixed x-col-center" xid="col3" style="width:auto;">
             <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="delBtn" icon="icon-android-close" onClick="delBtnClick">
              <i xid="i1" class="icon-android-close"></i>
              <span xid="span1"></span></a> </div> </div> </li> </ul> </div> </div> 
       <div class="x-content-center x-pull-up" xid="div4">
        <span class="x-pull-up-label" xid="span4">加载更多...</span></div> </div> </div> </div> </div> 
   <div class="x-wing-right" xid="right1"></div></div></div>
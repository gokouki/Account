<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:389px;left:480px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="accData" queryAction="queryAccount" saveAction="saveAccount" url="/acc/acc" tableName="account" idColumn="fID" autoNew="false">
   <column label="fID" name="fID" type="String" xid="default10"></column>
  <column label="创建时间" name="fCreateTime" type="DateTime" xid="default11"></column>
  <column label="日期" name="fDate" type="Date" xid="default12"></column>
  <column label="金额" name="fMoney" type="Decimal" xid="default13"></column>
  <column label="备注" name="fDescription" type="String" xid="default14"></column>
  <column label="类型" name="fType" type="String" xid="default15"></column>
  <column label="分类" name="fClass" type="String" xid="default16"></column>
  <column label="username" name="username" type="String" xid="default17"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="typedata" idColumn="type"><column label="type" name="type" type="String" xid="xid1"></column>
  <data xid="default1">[{&quot;type&quot;:&quot;收入&quot;},{&quot;type&quot;:&quot;支出&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="classData" queryAction="queryAccount_class" saveAction="saveAccount_class" url="/acc/acc" tableName="account_class" idColumn="fID"><column label="fID" name="fID" type="String" xid="default5"></column>
  <column label="fType" name="fType" type="String" xid="default6"></column>
  <column label="fClass" name="fClass" type="String" xid="default7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="记一笔"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">记一笔</div>  
        <div class="x-titlebar-right reverse"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="OKBtn" icon="icon-android-checkmark" onClick='OKBtnClick'>
   <i xid="i1" class="icon-android-checkmark"></i>
   <span xid="span1"></span></a></div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1">
      <div component="$UI/system/components/justep/controlGroup/controlGroup"
        class="x-control-group" title="title" xid="controlGroup1"> 
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
          xid="labelEdit1"> 
          <label class="x-label" xid="label1" bind-text='$model.accData.label("fType")'/>  
          <select component="$UI/system/components/justep/select/select" class="form-control x-edit"
            xid="select1" bind-ref='$model.accData.ref("fType")' bind-options="typedata" optionsAutoLoad="false" bind-optionsValue="type"/>
        </div>  
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
          xid="labelEdit2"> 
          <label class="x-label" xid="label2" bind-text='$model.accData.label("fClass")'/>  
          <select component="$UI/system/components/justep/select/select" class="form-control x-edit"
            xid="select2" bind-ref='$model.accData.ref("fClass")' bind-options="classData" bind-optionsValue="fClass"/>
        </div>  
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
          xid="labelEdit3"> 
          <label class="x-label" xid="label3" bind-text='$model.accData.label("fDate")'/>  
          <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
            xid="input1" bind-ref='$model.accData.ref("fDate")'/>
        </div>  
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
          xid="labelEdit4"> 
          <label class="x-label" xid="label4" bind-text='$model.accData.label("fMoney")'/>  
          <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
            xid="input2" bind-ref='$model.accData.ref("fMoney")'/>
        </div>  
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
          xid="labelEdit5"> 
          <label class="x-label" xid="label5" bind-text='$model.accData.label("fDescription")'/>  
          <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
            xid="input3" bind-ref='$model.accData.ref("fDescription")'/>
        </div>
      </div>
    </div> 
  </div> 
</div>

// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","jimu/BaseWidgetSetting"],function(a,b){return a([b],{baseClass:"jimu-widget-demo-setting",postCreate:function(){this.setConfig(this.config)},setConfig:function(a){this.textNode.value=a.configText},getConfig:function(){return{configText:this.textNode.value}}})});
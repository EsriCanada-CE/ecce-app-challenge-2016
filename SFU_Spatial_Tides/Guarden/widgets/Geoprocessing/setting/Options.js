// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Geoprocessing/setting/Options.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"field"\x3e\r\n    \x3clabel class\x3d"option-help-label"\x3e${nls.helpUrl}:\x3c/label\x3e\x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"helpUrl" class\x3d"option-help-url"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"useResultMapServer"\x3e\x3c/div\x3e\x3clabel class\x3d"jimu-leading-margin05"\x3e${nls.useResultMapService}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"shareResults"\x3e\x3c/div\x3e\x3clabel class\x3d"jimu-leading-margin05"\x3e${nls.shareResults}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"showExport"\x3e\x3c/div\x3e\x3clabel class\x3d"jimu-leading-margin05"\x3e${nls.allowToExport}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"dynamicSchema"\x3e\x3c/div\x3e\x3clabel class\x3d"jimu-leading-margin05"\x3e${nls.useDynamicSchema}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/text!./Options.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../utils dijit/form/TextBox jimu/dijit/CheckBox".split(" "),function(b,c,d,e,f,g){return b([d,e,f],{baseClass:"jimu-widget-setting-gp-options",templateString:c,setConfig:function(a){this.config=a;this.helpUrl.setValue(a.helpUrl);g.allowShareResult(a)?(this.shareResults.setStatus(!0),this.shareResults.setValue(Boolean(a.shareResults))):(this.shareResults.setValue(!1),this.shareResults.setStatus(!1));
a.serverInfo.hasResultMapServer?(this.useResultMapServer.setStatus(!0),this.useResultMapServer.setValue(Boolean(a.useResultMapServer))):(this.useResultMapServer.setValue(!1),this.useResultMapServer.setStatus(!1));this.showExport.setValue(Boolean(a.showExportButton));this.dynamicSchema.setValue(Boolean(a.useDynamicSchema))},acceptValue:function(){this.config.helpUrl=this.helpUrl.getValue();this.useResultMapServer.status&&(this.config.useResultMapServer=this.useResultMapServer.getValue());this.config.shareResults=
this.shareResults.getValue();this.config.showExportButton=this.showExport.getValue();this.config.useDynamicSchema=this.dynamicSchema.getValue()}})});
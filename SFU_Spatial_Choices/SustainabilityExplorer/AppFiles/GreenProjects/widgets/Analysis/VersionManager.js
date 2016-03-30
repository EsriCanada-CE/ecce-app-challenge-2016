// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(e){function b(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){var b=[],c,d,e=a.analysisTools.length;for(d=0;d<e;d++)c=a.analysisTools[d],c={name:c.name,showHelp:!0,showCredits:!0,showChooseExtent:!0,showReadyToUseLayers:!0},b.push(c);return{analysisTools:b}}}]}b.prototype=new e;return b.prototype.constructor=
b});
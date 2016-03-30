// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang"],function(c){return{getFieldInfosFromWebmap:function(d,e){var b=null,a=e.getLayerInfoByTopLayerId(d);a&&(a=a.getPopupInfo())&&a.fieldInfos&&(b=c.clone(a.fieldInfos));return b}}});
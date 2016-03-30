// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","jimu/BaseWidget"],function(a,b){return a([b],{templateString:'\x3cdiv\x3eThis is a very simple widget. \x3cinput type\x3d"button" value\x3d"Get Map Id" data-dojo-attach-event\x3d"click:_getMapId"\x3e.\x3c/div\x3e',_getMapId:function(){alert(this.map.id)}})});
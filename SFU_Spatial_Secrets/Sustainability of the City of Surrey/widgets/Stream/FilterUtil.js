// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/json","jimu/dijit/Filter","dojo/dom-construct"],function(d,e,f){return{buildFilterInfoFromString:function(b,c,g){var a=new e,h=f.create("div"),k=d.parse(b._json);a.placeAt(h);a.startup();return a.buildByExpr(b.url,c,k).then(function(){return{inherited:!0,definitionExpression:c,name:g,filterInfo:a.toJson()}},function(){return null})}}});
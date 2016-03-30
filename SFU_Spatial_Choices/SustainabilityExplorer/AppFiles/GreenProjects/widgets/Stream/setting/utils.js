// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/array"],function(b){return{getStreamLayers:function(a){var c=[],d;b.forEach(a.graphicsLayerIds,function(b){d=a.getLayer(b);"esri.layers.StreamLayer"===d.declaredClass&&c.push(d)});c.reverse();return c},getStreamLayerName:function(a){a=/\/([^\/]+)\/StreamServer/.exec(a);return 1<a.length?a[1]:""}}});
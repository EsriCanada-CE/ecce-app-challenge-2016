// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("esri/main dojo/_base/lang dojo/_base/kernel dojo/_base/Deferred dojo/DeferredList dojo/_base/array".split(" "),function(g,h,d,e){var f=function(a){function b(c){a[c]||(a[c]=function(){var b=arguments;return e.when(a,function(a){Array.prototype.unshift.call(b,a.features||a);return f(d[c].apply(d,b))})})}if(!a)return a;a.then&&(a=h.delegate(a));a.total||(a.total=e.when(a,function(a){return g._isDefined(a.total)?a.total:a.length||0}));b("forEach");b("filter");b("map");b("some");b("every");return a};
return f});
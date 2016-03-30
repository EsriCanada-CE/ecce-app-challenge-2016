// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/dom-style dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(p,k,h,g,m,f,q,l,r,s,t,n){return p([r,s],{baseClass:"jimu-anchorbar-more-pupup jimu-main-background",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,nodes:[],forIcon:null,postCreate:function(){this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new t({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup()},setForIcon:function(a){this.forIcon=a},setNodes:function(a){var c=!1,c=this.nodes.length!==a.length?!1:h.every(this.nodes,function(b){return h.some(a,function(a){return b.id===a.id})});c||(this.nodes=a,this.oldGridParam=null,this.resize())},resize:function(){var a=this._calculateGridParam(),c;if(null!==
a){g.setStyle(this.domNode,n.getPositionStyle(a.position));this.nodeWidth=a.cellSize-this.margin;if(!this.oldGridParam||this.oldGridParam.rows!==a.rows||this.oldGridParam.cols!==a.cols)this.clearPages(),this.createPages(a);h.forEach(l(".icon-node",this.domNode),k.hitch(this,function(b,c){this.setItemNodePosition(b,c,a)}));this.oldGridParam=a;c=l("div.close",this.domNode)[0];g.setStyle(c,{width:0.25*this.nodeWidth+"px",height:0.25*this.nodeWidth+"px"})}else this.oldGridParam=null,g.setStyle(this.domNode,
n.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0},setItemNodePosition:function(a,c,b){var d;d=0===c%b.cols?0:this.margin/2;c=c%(b.rows*b.cols)<b.cols?0:this.margin/2;b={};"number"===typeof this.nodeWidth&&(b.width=this.nodeWidth+"px",b.height=this.nodeWidth+"px");"number"===typeof d&&(window.isRTL?b.marginRight=d+"px":b.marginLeft=d+"px");"number"===typeof c&&(b.marginTop=c+"px");g.setStyle(a,b)},clearPages:function(){h.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},
this);f.empty(this.pointsNode);this.pages=[]},createPages:function(a){var c,b,d,e;c=Math.ceil(this.nodes.length/(a.rows*a.cols));for(b=0;b<c;b++)d=f.create("div",{"class":"page"}),this.createPageItems(b,d,a),this.viewStack.addView(d),1<c&&(e=f.create("div",{"class":"point"},this.pointsNode),this.own(m(e,"click",k.hitch(this,this._onPageNodeClick,b)))),this.pages.push({pageNode:d,pointNode:e});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},_selectPage:function(a){1<
this.pages.length&&(l(".point",this.domNode).removeClass("point-selected"),g.addClass(this.pages[a].pointNode,"point-selected"));this.viewStack.switchView(this.pages[a].pageNode)},createPageItems:function(a,c,b){var d,e;d=this.nodes.length;e=b.rows*b.cols;b=a*e;a=(a+1)*e;e=a-d;for(a=Math.min(a,d);b<a;b++)this.createItemNode(b,c);for(b=d;b<d+e;b++)this.createEmptyItemNode(c)},createItemNode:function(a,c){var b,d;b=f.create("div",{"class":"icon-node jimu-float-leading"},c);d=(this.nodeWidth-this.nodes[a].size)/
2;q.set(this.nodes[a].domNode,{position:"absolute",left:d+"px",top:d+"px","margin-left":""});this.nodes[a].placeAt(b)},createEmptyItemNode:function(a){return f.create("div",{"class":"icon-node jimu-float-leading"},a)},createCloseBtn:function(){var a;a=f.create("div",{"class":"close"},this.domNode);f.create("div",{"class":"close-inner"},a);m(a,"click",k.hitch(this,function(){this.hide()}));return a},hide:function(){g.setStyle(this.domNode,"display","none");this.forIcon&&this.forIcon.setOpened(!1)},
show:function(){g.setStyle(this.domNode,"display","block")},_calculateGridParam:function(){var a,c,b,d,e=!1,f=!0;a=g.getContentBox(jimuConfig.mapId);c=Math.min(a.w,a.h)-40;if(240<=c)d=80;else{d=Math.floor(c/3);if(10>d)return null;e=!0;60>d&&(f=!1)}c=Math.floor((a.h-40)/d);b=Math.floor((a.w-40)/d);c=4<c?4:c;c=3>c?3:c;b=3>c?3:4<b?4:b;return{rows:c,cols:b,cellSize:d,iconScaled:e,showLabel:f,position:{top:(a.h-d*c)/2,bottom:(a.h-d*c)/2,left:(a.w-d*b)/2,right:(a.w-d*b)/2,width:d*b-this.margin*(b-1)/2,
height:d*c-this.margin*(c-1)/2,zIndex:111}}}})});
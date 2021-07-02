// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/Donut","dojo/_base/declare dojo/_base/lang dojox/charting/plot2d/Base dojox/charting/plot2d/_PlotEvents dojox/charting/plot2d/common dojox/gfx/matrix dojox/lang/functional dojox/lang/utils dojo/has ./animation/_DonutAnimation ./labelsRendering/LabelOverlapFixer ./labelsRendering/LabelsUtil".split(" "),function(G,H,I,J,R,K,w,z,O,S,T,U){var V={createPath:function(b,d,e,c,a,f,g,m,q,p,k,h){var u=function(a,l,h){d=void 0!==l?l:d;l=A.getEndAngle(d,
a,f,g,q,k,h);1===a&&(l=Number(Math.floor(1E5*l)/1E5));a=e*m;h=l-d;var t=c.cx+e*Math.cos(d),n=c.cy+e*Math.sin(d),r=c.cx+e*Math.cos(l),u=c.cy+e*Math.sin(l);if(a){var v=c.cx+a*Math.cos(d),w=c.cy+a*Math.sin(d),B=c.cx+a*Math.cos(l),C=c.cy+a*Math.sin(l);shape=b.createPath().moveTo(v,w).lineTo(t,n).arcTo(e,e,0,h>Math.PI,!0,r,u).lineTo(B,C).arcTo(a,a,0,h>Math.PI,!1,v,w).closePath().setStroke(p.series.stroke)}else shape=b.createPath().moveTo(c.cx,c.cy).lineTo(t,n).arcTo(e,e,0,h>Math.PI,!0,r,u).lineTo(c.cx,
c.cy).closePath().setStroke(p.series.stroke);specialFill=p.series.fill;shape.setFill(specialFill);return{shape:shape,end:l,donutGap:g}};h.push({isSlice:!0,sliceIndex:a,func:u});return u}},A={getStartAngle:function(b,d){return b.series.donutArcPercent&&100!==b.series.donutArcPercent?-270+(100-b.series.donutArcPercent)/100*360/2:(b.series.startAngle||0)+d},getEndAngle:function(b,d,e,c,a,f,g){b=b+2*d*Math.PI-c;e&&(e=f+2*Math.PI-c,b=g||a.series.donutArcPercent&&100!==a.series.donutArcPercent?Math.min(b+
c,e):e);return b}};return G([I,J,S],{enableHole:!0,enableGap:!0,startAngleOffset:0,_animationInfos:null,_dataLabels:null,_labelBoxes:null,defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelStyle:"outside",htmlLabels:!0,radGrad:"native",fanSize:5,startAngle:0,animate:null},optionalParams:{radius:0,omitLabels:!1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},constructor:function(b,d){this.opt=H.clone(this.defaultParams);z.updateWithObject(this.opt,
d);z.updateWithPattern(this.opt,d,this.optionalParams);this.axes=[];this.run=null;this.dyn=[];this.runFilter=[]},clear:function(){this.inherited(arguments);this.dyn=[];this.run=null;return this},setAxis:function(b){return this},addSeries:function(b){this.run=b;return this},getSeriesStats:function(){return H.delegate(R.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},getRenderResults:function(){return this._lastRenderResults},render:function(b,d){if(!this.dirty)return this;
this.resetEvents();this._eventSeries={};this.cleanGroup();var e=this.group,c=this.chart.theme;if(!this.run||!this.run.data.length)return this;var a=(b.width-d.l-d.r)/2,f=(b.height-d.t-d.b)/2/this._getRYMultiplier(c),g=Math.min(a,f),m,q=K._degToRad(this._getStartAngle(c)),p=q,k,h,u,r,l,z=this.events(),t=this.run.data.map(function(c,b){"number"!==typeof c&&c.hidden&&(this.runFilter.push(b),c.hidden=!1);return this.runFilter.some(function(c){return c===b})?"number"===typeof c?0:{y:0,text:c.text}:c},
this);this.dyn=[];"radius"in this.opt&&(l=g=this.opt.radius);var n={cx:d.l+a,cy:d.t+f,r:g},L;k=w.map(t,"x ? Math.max(x.y, 0) : 0");if(w.every(k,"\x3c\x3d 0"))return e.createCircle(n).setStroke(c.series.stroke),this.dyn=k.map(function(){return{}}),this;h=w.map(k,"/this",w.foldl(k,"+",0));this.opt.labels&&(u=h.map(function(b,a){return U.getLabelInfo(this,t[a],c)},this));var x=this.enableHole?(c.series.donutHolePercent||0)/100:0,v=this.enableGap?K._degToRad(c.series.donutGap||0):0;h=this._fixSlices(h,
v);this._lastRenderResults={};this._animationInfos=[];this._labelBoxes=[];var P=w.map(t,function(b,a){a=[this.opt,this.run];null!=b&&"number"!==typeof b&&a.push(b);this.opt.styleFunc&&a.push(this.opt.styleFunc(b));return c.next("slice",a,!0)},this);k=this._preprocessParams(t,c,g,g*x,a,f,n,h);n=k.circle;g=k.r;if(this.opt.labels)switch(r=m=0,u.forEach(function(c,b){m=Math.max(m,c.box.h);r=Math.max(r,c.box.w)}),this.opt.labelStyle){case "outside":k=g;g=Math.min(a-r,f-m)-5;l=g+r/2;g=Math.max(g,k/2);break;
case "inside":l=Math.abs((g-g*x)/2+g*x+(g-r/2))/2;break;case "columns":l=g=Math.min(a-r-20,f-2*m)}var B=Array(h.length);h.some(function(b,a){b=this._getSliceValueAt(h,a,c);var d=t[a],f=P[a];L=g*x;var m=V.createPath(e,p,g,n,a,a+1===h.length,v,x,c,f,q,this._animationInfos)(b);b=m.end;shape=m.shape;this.dyn.push({fill:void 0,stroke:f.series.stroke});z&&(d={element:"slice",index:a,run:this.run,shape:shape,x:a,y:"number"===typeof d?d:d.y,cx:n.cx,cy:n.cy,cr:g},this._connectEvents(d),B[a]=d);p=b+v;return!1},
this);if(this.opt.labels){var C=O("dojo-bidi")&&this.chart.isRightToLeft();if("outside"===this.opt.labelStyle||"inside"===this.opt.labelStyle)p=q,h.some(function(a,d){a=this._getSliceValueAt(h,d,c);var e=u[d];if(0>=a)return!1;if(1<=a)return this._labelBoxes.push({x:n.cx-e.box.w/2,y:n.cy+m/2,w:e.box.w,h:e.box.h,text:e.text}),!0;a=A.getEndAngle(p,a,d+1===h.length,v,c,q);if(this.opt.omitLabels&&.001>a-p)return!1;d=(p+a)/2;var f=l;"outside"===this.opt.labelStyle&&(f=1.15*l+(m-r/2-.15*l)*Math.abs(Math.sin(d)));
var g=n.cx+f*Math.cos(d);this._labelBoxes.push({x:(C?b.width-g:g)-e.box.w/2,y:n.cy+f*Math.sin(d)+m/2-(2===e.numRows?e.box.h/2:0),w:e.box.w,h:e.box.h,text:e.text});p=a+v;return!1},this);else if("columns"===this.opt.labelStyle){var p=q,G=this.opt.omitLabels,D=[];h.forEach(function(a,b){a=this._getSliceValueAt(h,b,c);a=A.getEndAngle(p,a,b+1===h.length,v,c,q);var d=(p+a)/2;D.push({angle:d,left:0>Math.cos(d),theme:P[b],index:b,omit:G?.001>a-p:!1});p=a+v},this);this._getProperLabelRadius(D,u[0].box.h,1.1*
l);for(f=0;f<D.length;f++){k=D[f];var E=u[f];if(!k.omit){var y=n.cx-a,F=n.cx+a,M=E.box.w,I=n.cx+k.labelR*Math.cos(k.angle),N=n.cy+k.labelR*Math.sin(k.angle),F=k.left?y+M:F-M,y=k.left?y:F,Q=e.createPath().moveTo(n.cx+l*Math.cos(k.angle),n.cy+l*Math.sin(k.angle));Q.lineTo(I,N);Q.lineTo(F,N).setStroke(k.theme.series.labelWiring);this._labelBoxes.push({x:C?b.width-M-y:y,y:N,w:E.box.w,h:E.box.h,text:E.text})}}}}this._renderLabels(e,c,b,d);var J=0;this._eventSeries[this.run.name]=w.map(t,function(a){return 0>=
a?null:B[J++]});O("dojo-bidi")&&this._checkOrientation(this.group,b,d);this.dirty=!1;this._lastRenderResults=H.mixin(this._lastRenderResults,{labels:this.opt.labels,radiusInner:L,radiusOuter:g});this._renderAdditionalElements(t,c,g,L,e,n,h);this.opt.animate&&this._renderAnimation(t,c,g,e,n,h);return this},_renderLabels:function(b,d,e,c){this._dataLabels=[];T.fixLabelsOverlap(this._labelBoxes,e,c,this._getFixLabelsParams(),b);this._labelBoxes.forEach(function(a){a.hidden||this._dataLabels.push(this.renderLabel(b,
a.x,a.y,a.text,d,!0,"left"))},this)},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}},_getStartAngle:function(b){return A.getStartAngle(b,this.startAngleOffset)},_getEndAngle:function(b){return 0},_fixSlices:function(b,d){var e=[],c=0,a=[],f=d/(2*Math.PI)+.001;b.forEach(function(b,d){if(b<f){var g=f-b;b=f;c+=g;a.push(d);e[d]=b}});var g=c/(b.length-a.length);b.forEach(function(b,c){-1===a.indexOf(c)&&(b-=g,e[c]=b)});return e},_getSliceValueAt:function(b,
d,e){return Math.max(0,b[d])*(e.series.donutArcPercent?e.series.donutArcPercent/100:1)},_preprocessParams:function(b,d,e,c,a,f,g,m){return{circle:g,r:e}},_getRYMultiplier:function(b){return Math.max(.625,b.series.donutArcPercent&&100!==b.series.donutArcPercent?(1+Math.cos(K._degToRad(360*(100-b.series.donutArcPercent)/100/2.1)))/2:1)},_renderAdditionalElements:function(b,d,e,c,a,f,g){},_getProperLabelRadius:function(b,d,e){var c,a,f=1,g=1;if(1===b.length)b[0].labelR=e;else{for(var m=0;m<b.length;m++){var q=
Math.abs(Math.sin(b[m].angle));b[m].left?f>=q&&(f=q,c=b[m]):g>=q&&(g=q,a=b[m])}c.labelR=a.labelR=e;this._calculateLabelR(c,b,d);this._calculateLabelR(a,b,d)}},_calculateLabelR:function(b,d,e){for(var c=b.index,a=d.length,f=b.labelR;!(d[c%a].left^d[(c+1)%a].left);)d[(c+1)%a].omit||(f=(Math.sin(d[c%a].angle)*f+(d[c%a].left?-e:e))/Math.sin(d[(c+1)%a].angle),f=f<b.labelR?b.labelR:f,d[(c+1)%a].labelR=f),c++;c=b.index;for(a=0===c?a-1:c-1;!(d[c].left^d[a].left);)d[a].omit||(f=(Math.sin(d[c].angle)*f+(d[c].left?
e:-e))/Math.sin(d[a].angle),f=f<b.labelR?b.labelR:f,d[a].labelR=f),c--,a--,c=0>c?c+d.length:c,a=0>a?a+d.length:a}})});
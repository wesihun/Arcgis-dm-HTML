// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/Conflict",["require","exports","../2d/engine/webgl/Geometry","./GeometryUtils"],function(m,n,p,r){Object.defineProperty(n,"__esModule",{value:!0});m=function(){function g(a,b,e,c){this.left=a;this.top=b;this.right=e;this.bottom=c}g.prototype.clone=function(){return new g(this.left,this.top,this.right,this.bottom)};g.prototype.move=function(a,b){this.left+=a;this.top+=b;this.right+=a;this.bottom+=b};g.prototype.rotate=function(a,b){var e=this.left,
c=this.right,d=this.top,f=this.bottom,g=e*a-d*b,k=e*b+d*a,h=c*a-d*b,d=c*b+d*a,l=e*a-f*b,e=e*b+f*a,m=c*a-f*b;a=c*b+f*a;this.left=Math.min(g,h,l,m);this.top=Math.min(k,d,e,a);this.right=Math.max(g,h,l,m);this.bottom=Math.max(k,d,e,a)};g.overlaps=function(a,b){return a.right>b.left&&a.left<b.right&&a.bottom>b.top&&a.top<b.bottom};return g}();n.Box=m;var t=function(){function g(a,b,e,c){this.anchor=a;this.corners=b;this.minzoom=e;this.maxzoom=c}g.prototype.left=function(){return this.corners[0].x};g.prototype.right=
function(){return this.corners[2].x};g.prototype.top=function(){return this.corners[1].y};g.prototype.bottom=function(){return this.corners[3].y};return g}();n.Obstacle=t;m=function(){function g(a,b,e){this.obstacles=[];this.mapAngle=a;this.padding=b;this.isScreenAligned=e;this.minzoom=u}g.prototype.addBox=function(a,b,e,c,d,f,g){var k=b.left*e-this.padding,h=b.top*e-this.padding,l=b.right*e+this.padding;b=b.bottom*e+this.padding;k=[new p.Point(k,h),new p.Point(l,h),new p.Point(l,b),new p.Point(k,
b)];0!==this.mapAngle&&(h=Math.cos(this.mapAngle),l=Math.sin(this.mapAngle),a=a.clone(),a.rotate(h,l));this.isScreenAligned||(c+=this.mapAngle);if(0!==c){h=Math.cos(c);l=Math.sin(c);k[0].rotate(h,l);k[1].rotate(h,l);k[2].rotate(h,l);k[3].rotate(h,l);c=0;for(h=1;4>h;h++)k[h].x<k[c].x?c=h:k[h].x===k[c].x&&k[h].y<k[c].y&&(c=h);if(c){l=[];for(h=0;4>h;h++)l.push(k[(h+c)%4]);k=l}}if(d)for(c=0,h=k;c<h.length;c++)h[c].move(d[0],d[1]);this.obstacles.push(new t(a,k,f,g))};return g}();n.Footprint=m;var u=.5;
m=function(){function g(){this._grid=[]}g.prototype.setAngle=function(a){};g.prototype.reset=function(){this._grid=[]};g.prototype.add=function(a){var b=this._grid,e=0;for(a=a.obstacles;e<a.length;e++)for(var c=a[e],d=c.anchor,f=g._gridClamp(Math.min(c.left()+d.x,d.x)),q=g._gridClamp(Math.max(c.right()+d.x,d.x)),k=g._gridClamp(Math.min(c.top()+d.y,d.y)),d=g._gridClamp(Math.max(c.bottom()+d.y,d.y));k<=d;k++)for(var h=f;h<=q;h++){var l=b[16*k+h];l||(l=b[16*k+h]=[]);l.push(c)}};g.prototype.getMinZoom=
function(a,b,e,c){if(0===a.obstacles.length)return r.C_INFINITY;e=this._grid;c=0;for(a=a.obstacles;c<a.length;c++)for(var d=a[c],f=d.anchor,q=g._gridClamp(Math.min(d.left()+f.x,f.x)),k=g._gridClamp(Math.max(d.right()+f.x,f.x)),h=g._gridClamp(Math.min(d.top()+f.y,f.y)),f=g._gridClamp(Math.max(d.bottom()+f.y,f.y));h<=f;h++)for(var l=q;l<=k;l++){var m=e[16*h+l];if(m)for(var n=0;n<m.length;n++){var p=m[n];if(!(d.minzoom>=p.maxzoom||p.minzoom>=d.maxzoom)&&(b=g._calcPlacementZoom(d,p,b),2<=b))return r.C_INFINITY}}return 2>
b?b:r.C_INFINITY};g._gridClamp=function(a){return r.clamp(a>>9,-7,8)};g._calcPlacementZoom=function(a,b,e){var c=b.anchor.x-a.anchor.x;if(0===c&&(a.right()<b.left()||b.right()<a.left()))return e;var d=b.anchor.y-a.anchor.y;if(0===d&&(a.bottom()<b.top()||b.bottom()<a.top()))return e;var f=r.C_INFINITY;if(0!==c){var q=(0<c?a.right()-b.left():a.left()-b.right())/c;q<f&&(f=q);c=0<c?g._calcExtZoomX(a,b,q):g._calcExtZoomX(b,a,q);c<f&&(f=c)}0!==d&&(c=(0<d?a.bottom()-b.top():a.top()-b.bottom())/d,c<f&&(f=
c),d=0<d?g._calcExtZoomY(a,b,c):g._calcExtZoomY(b,a,c),d<f&&(f=d));if(f<a.minzoom||f<b.minzoom)return e;f=Math.min(f,a.maxzoom,b.maxzoom);f<e&&(f=e);return f};g._calcExtZoomX=function(a,b,e){var c,d,f;if(a.anchor.y+a.corners[2].y/e<b.anchor.y+b.corners[0].y/e){c=a.corners[2].x-a.corners[3].x;f=a.corners[2].y-a.corners[3].y;var g=b.corners[1].x-b.corners[0].x;d=b.corners[1].y-b.corners[0].y;0<=c*d-f*g?a.anchor.y+a.corners[3].y/e<b.anchor.y+b.corners[0].y/e?(e=a.corners[3],c=b.corners[0],d=b.corners[1],
f=1):(e=b.corners[0],c=a.corners[3],d=a.corners[2],f=-1):a.anchor.y+a.corners[2].y/e>b.anchor.y+b.corners[1].y/e?(e=a.corners[2],c=b.corners[0],d=b.corners[1],f=1):(e=b.corners[1],c=a.corners[3],d=a.corners[2],f=-1)}else c=a.corners[2].x-a.corners[1].x,f=a.corners[2].y-a.corners[1].y,g=b.corners[3].x-b.corners[0].x,d=b.corners[3].y-b.corners[0].y,0>c*d-f*g?a.anchor.y+a.corners[1].y/e>b.anchor.y+b.corners[0].y/e?(e=a.corners[1],c=b.corners[0],d=b.corners[3],f=1):(e=b.corners[0],c=a.corners[1],d=a.corners[2],
f=-1):a.anchor.y+a.corners[2].y/e<b.anchor.y+b.corners[3].y/e?(e=a.corners[2],c=b.corners[0],d=b.corners[3],f=1):(e=b.corners[3],c=a.corners[1],d=a.corners[2],f=-1);g=d.x-c.x;d=d.y-c.y;return f*((e.y-c.y)*g-(e.x-c.x)*d)/((a.anchor.x-b.anchor.x)*d-(a.anchor.y-b.anchor.y)*g)};g._calcExtZoomY=function(a,b,e){var c,d,f;if(a.anchor.x+a.corners[3].x/e<b.anchor.x+b.corners[1].x/e){c=a.corners[3].x-a.corners[2].x;f=a.corners[3].y-a.corners[2].y;var g=b.corners[0].x-b.corners[1].x;d=b.corners[0].y-b.corners[1].y;
0>c*d-f*g?a.anchor.x+a.corners[2].x/e<b.anchor.x+b.corners[1].x/e?(e=a.corners[2],c=b.corners[1],d=b.corners[0],f=1):(e=b.corners[1],c=a.corners[2],d=a.corners[3],f=-1):a.anchor.x+a.corners[3].x/e>b.anchor.x+b.corners[0].x/e?(e=a.corners[3],c=b.corners[1],d=b.corners[0],f=1):(e=b.corners[0],c=a.corners[2],d=a.corners[3],f=-1)}else c=a.corners[3].x-a.corners[0].x,f=a.corners[3].y-a.corners[0].y,g=b.corners[2].x-b.corners[1].x,d=b.corners[2].y-b.corners[1].y,0<c*d-f*g?a.anchor.x+a.corners[0].x/e>b.anchor.x+
b.corners[1].x/e?(e=a.corners[0],c=b.corners[1],d=b.corners[2],f=1):(e=b.corners[1],c=a.corners[0],d=a.corners[3],f=-1):a.anchor.x+a.corners[3].x/e<b.anchor.x+b.corners[2].x/e?(e=a.corners[3],c=b.corners[1],d=b.corners[2],f=1):(e=b.corners[2],c=a.corners[0],d=a.corners[3],f=-1);g=d.x-c.x;d=d.y-c.y;return f*((e.y-c.y)*g-(e.x-c.x)*d)/((a.anchor.x-b.anchor.x)*d-(a.anchor.y-b.anchor.y)*g)};return g}();n.ConflictEngine=m});
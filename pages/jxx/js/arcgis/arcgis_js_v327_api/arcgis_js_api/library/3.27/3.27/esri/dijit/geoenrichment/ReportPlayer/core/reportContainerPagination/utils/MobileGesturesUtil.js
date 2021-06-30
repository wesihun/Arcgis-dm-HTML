// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerPagination/utils/MobileGesturesUtil",["dojo/on","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/mobile/GesturesUtil"],function(g,n,p){var f={enableMobileGestures:function(a){function b(){d&&d.remove();h&&h.remove();k&&k.remove()}var d,h,k;g(a.domNode,"touchstart",function(e){b();var l=e.targetTouches[0].clientX,m=e.targetTouches[0].clientY;f._isOverActiveMap(a,e)||(d=g(a.domNode,"touchmove",function(c){c.preventDefault();
var b=f._getOverPanelWithScroll(a,e);if(b){var d=c.targetTouches[0].clientX;c=c.targetTouches[0].clientY;b.changeScroll(l-d,m-c);l=d;m=c}}),h=g(a.domNode,"touchend",function(c){b();c=c.clientX-e.clientX;-100>c?a.showNextSlide():100<c&&a.showPreviousSlide()}),k=g(a.domNode,"touchcancel",b))});p.preventDoubleTapZoom(a.domNode)},_isOverActiveMap:function(a,b){var d=(a=(a=f._getOverSection(a,b))&&a.getMapImages()[0])&&a.getCurrentMap();return d&&d.isMapNavigation&&n.isMouseOver(a.domNode,{event:b})},
_getOverPanelWithScroll:function(a,b){return(a=(a=f._getOverSection(a,b))&&a.getInfographic())&&a.getInnerInfographic()&&a.getInnerInfographic().hasScroll&&a.getInnerInfographic().hasScroll()?a.getInnerInfographic():null},_getOverSection:function(a,b){return(a=a.infographicPage.getCurrentSection())&&!a.isEmpty()?a:null}};return f});
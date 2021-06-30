//>>built
define("dgrid/extensions/Pagination","../_StoreMixin dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/Deferred dojo/on dojo/query dojo/string dojo/has put-selector/put ../util/misc dojo/i18n!./nls/pagination dojo/_base/sniff xstyle/css!../css/extensions/Pagination.css".split(" "),function(z,A,B,v,p,q,r,w,t,d,C,D){function E(b){b.noDataNode?(d(b.noDataNode,"!"),delete b.noDataNode):b.cleanup();b.contentNode.innerHTML=""}function x(b){if(b.loadingNode)d(b.loadingNode,"!"),delete b.loadingNode;
else if(b._oldPageNodes){for(var a in b._oldPageNodes)b.removeRow(b._oldPageNodes[a]);delete b._oldPageNodes;b._oldPageObserver&&(b._oldPageObserver.cancel(),b._numObservers--,delete b._oldPageObserver)}delete b._isLoading}return A("dgrid.extensions.Pagination",z,{rowsPerPage:10,pagingTextBox:!1,previousNextArrows:!0,firstLastArrows:!1,pagingLinks:2,pageSizeOptions:null,showLoadingMessage:!0,i18nPagination:D,showFooter:!0,_currentPage:1,_total:0,buildRendering:function(){this.inherited(arguments);
var b=this,a=this.paginationNode=d(this.footerNode,"div.dgrid-pagination"),c=this.paginationStatusNode=d(a,"div.dgrid-status"),k=this.i18nPagination;c.tabIndex=0;this._updatePaginationSizeSelect();this._updateRowsPerPageOption();c.innerHTML=w.substitute(k.status,{start:1,end:1,total:0});a=this.paginationNavigationNode=d(a,"div.dgrid-navigation");this.firstLastArrows&&(c=this.paginationFirstNode=d(a,"span.dgrid-first.dgrid-page-link","\u00ab"),c.setAttribute("aria-label",k.gotoFirst),c.tabIndex=0);
this.previousNextArrows&&(c=this.paginationPreviousNode=d(a,"span.dgrid-previous.dgrid-page-link","\u2039"),c.setAttribute("aria-label",k.gotoPrev),c.tabIndex=0);this.paginationLinksNode=d(a,"span.dgrid-pagination-links");this.previousNextArrows&&(c=this.paginationNextNode=d(a,"span.dgrid-next.dgrid-page-link","\u203a"),c.setAttribute("aria-label",k.gotoNext),c.tabIndex=0);this.firstLastArrows&&(c=this.paginationLastNode=d(a,"span.dgrid-last.dgrid-page-link","\u00bb"),c.setAttribute("aria-label",
k.gotoLast),c.tabIndex=0);this._listeners.push(q(a,".dgrid-page-link:click,.dgrid-page-link:keydown",function(a){if("keydown"!==a.type||13===a.keyCode){a=this.className;var c,d;b._isLoading||-1<a.indexOf("dgrid-page-disabled")||(c=b._currentPage,d=Math.ceil(b._total/b.rowsPerPage),this===b.paginationPreviousNode?b.gotoPage(c-1):this===b.paginationNextNode?b.gotoPage(c+1):this===b.paginationFirstNode?b.gotoPage(1):this===b.paginationLastNode?b.gotoPage(d):"dgrid-page-link"===a&&b.gotoPage(+this.innerHTML))}}))},
destroy:function(){this.inherited(arguments);this._pagingTextBoxHandle&&this._pagingTextBoxHandle.remove()},_updatePaginationSizeSelect:function(){var b=this.pageSizeOptions,a=this.paginationSizeSelect,c;if(b&&b.length){a||(a=this.paginationSizeSelect=d(this.paginationNode,"select.dgrid-page-size[aria-label\x3d"+this.i18nPagination.rowsPerPage+"]"),c=this._paginationSizeChangeHandle=q(a,"change",v.hitch(this,function(){this.set("rowsPerPage",+this.paginationSizeSelect.value)})),this._listeners.push(c));
for(c=a.options.length=0;c<b.length;c++)d(a,"option",b[c],{value:b[c],selected:this.rowsPerPage===b[c]});this._updateRowsPerPageOption()}else b&&b.length||!a||(d(a,"!"),this.paginationSizeSelect=null,this._paginationSizeChangeHandle.remove())},_setPageSizeOptions:function(b){this.pageSizeOptions=b&&b.sort(function(a,b){return a-b});this._updatePaginationSizeSelect()},_updateRowsPerPageOption:function(){var b=this.rowsPerPage,a=this.pageSizeOptions,c=this.paginationSizeSelect;c&&(0>B.indexOf(a,b)?
this._setPageSizeOptions(a.concat([b])):c.value=""+b)},_setRowsPerPage:function(b){this.rowsPerPage=b;this._updateRowsPerPageOption();this.gotoPage(1)},_updateNavigation:function(){function b(b,a){var e;c.pagingTextBox&&b==l&&1<h?(a=d(m,"input.dgrid-page-input[type\x3dtext][value\x3d$]",l),a.setAttribute("aria-label",k.jumpPage),c._pagingTextBoxHandle=q(a,"change",function(){var a=+this.value;!isNaN(a)&&0<a&&a<=h&&c.gotoPage(+this.value)}),f&&"INPUT"===f.tagName&&a.focus()):(e=b===l,a=d(m,"span"+
(e?".dgrid-page-disabled":"")+".dgrid-page-link",b+(a?" ":"")),a.setAttribute("aria-label",k.gotoPage),a.tabIndex=e?-1:0,u===b&&(e?b<h?u++:y.focus():a.focus()),e||(y=a))}function a(a,b){d(a,(b?".":"!")+"dgrid-page-disabled");a.tabIndex=b?-1:0}var c=this,k=this.i18nPagination,m=this.paginationLinksNode,l=this._currentPage,g=this.pagingLinks,e=this.paginationNavigationNode,h=Math.ceil(this._total/this.rowsPerPage),n=this._pagingTextBoxHandle,f=document.activeElement,u,y;f&&C.contains(this.paginationNavigationNode,
f)?"dgrid-page-link"===f.className&&(u=+f.innerHTML):f=null;n&&n.remove();m.innerHTML="";r(".dgrid-first, .dgrid-previous",e).forEach(function(b){a(b,1===l)});r(".dgrid-last, .dgrid-next",e).forEach(function(b){a(b,l>=h)});if(g&&0<h){b(1,!0);e=l-g;for(2<e?d(m,"span.dgrid-page-skip","..."):e=2;e<Math.min(l+g+1,h);e++)b(e,!0);l+g+1<h&&d(m,"span.dgrid-page-skip","...");1<h&&b(h)}else c.pagingTextBox&&b(l);f&&-1===f.tabIndex&&(g=r("[tabindex\x3d'0']",this.paginationNavigationNode),f===this.paginationPreviousNode||
f===this.paginationFirstNode?f=g[0]:g.length&&(f=g[g.length-1]),f&&f.focus())},refresh:function(){var b=this;this.inherited(arguments);if(this.store)return this.gotoPage(1).then(function(a){setTimeout(function(){q.emit(b.domNode,"dgrid-refresh-complete",{bubbles:!0,cancelable:!1,grid:b,results:a})},0);return a});console.warn("Pagination requires a store to operate.")},_onNotification:function(b){b.length!==this._rowsOnPage&&this.gotoPage(this._currentPage)},renderArray:function(b,a){var c=this,d=
this.inherited(arguments);this._lastCollection=null;a||(this._topLevelRequest&&this._topLevelRequest!==b&&(this._topLevelRequest.cancel(),delete this._topLevelRequest),"function"===typeof b.cancel&&(this._topLevelRequest=b),p.when(b,function(){c._topLevelRequest&&delete c._topLevelRequest}));return d},insertRow:function(){var b=this._oldPageNodes,a=this.inherited(arguments);b&&a===b[a.id]&&delete b[a.id];return a},gotoPage:function(b){var a=this,c=new p;this._trackError(function(){var k=a.rowsPerPage,
m=(b-1)*k,l=v.mixin(a.get("queryOptions"),{start:m,count:k}),g,e=a.contentNode,h,n,f;if(a.showLoadingMessage)E(a),h=a.loadingNode=d(e,"div.dgrid-loading"),h.innerHTML=a.loadingMessage;else{a._oldPageNodes=h={};e=e.children;n=0;for(f=e.length;n<f;n++)h[e[n].id]=e[n];a._oldPageObserver=a.observers.pop()}a._isLoading=!0;g=a.store.query(a.query,l);p.when(a.renderArray(g,null,l),function(e){x(a);a.scrollTo({y:0});p.when(g.total,function(c){c||(a.noDataNode&&(d(a.noDataNode,"!"),delete a.noDataNode),a.noDataNode=
d(a.contentNode,"div.dgrid-no-data"),a.noDataNode.innerHTML=a.noDataMessage);a.paginationStatusNode.innerHTML=w.substitute(a.i18nPagination.status,{start:Math.min(m+1,c),end:Math.min(c,m+k),total:c});a._total=c;a._currentPage=b;a._rowsOnPage=e.length;a._updateNavigation()});(7>t("ie")||t("ie")&&t("quirks"))&&a.resize();c.resolve(g)},function(b){x(a);c.reject(b)});return c.promise})||c.reject();return c.promise}})});
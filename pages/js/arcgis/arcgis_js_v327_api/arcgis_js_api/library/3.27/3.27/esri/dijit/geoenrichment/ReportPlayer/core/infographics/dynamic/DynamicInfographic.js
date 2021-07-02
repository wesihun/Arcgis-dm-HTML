// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/DynamicInfographic.html":'\x3cdiv data-dojo-attach-point\x3d"viewDiv" class\x3d"dynamicInfographic_viewDiv"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"noDataPlaceHolder" class\x3d"esriGENoDataPlaceHolder"\x3e\r\n        \x3cdiv class\x3d"esriGENoDataPlaceHolderLabel"\x3e${nls.noInfographicData}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"infographicDiv"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"errorDiv" class\x3d"esriGEReportPlayerErrorMessage"\x3e${nls.dynamicInfographicError}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dynamic/DynamicInfographic","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/when dojo/dom-style dojo/query dojo/on dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/theme ./_Infographic ../InfographicTypes esri/dijit/geoenrichment/utils/DelayUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/InvokeUtil esri/dijit/geoenrichment/utils/MouseUtil esri/dijit/geoenrichment/utils/WaitingUtil ../utils/InfographicJsonUtil ../extentions/BaseSelectComparisonExt dojo/text!../../templates/DynamicInfographic.html dojo/i18n!esri/nls/jsapi ../../../_devConfig".split(" "),
function(l,t,u,g,d,q,m,v,w,x,r,c,y,k,z,A,B,n,C,D,p,E){p=p.geoenrichment.dijit.ReportPlayer.Infographics;var h={};h[c.ONE_VAR]=230;h[c.AGE_PYRAMID]=0;h[c.RELATED_VARS]=320;h[c.TAPESTRY]=300;l=l([v,w],{templateString:D,nls:p,viewModel:null,theme:null,currentFeatureIndex:null,_infographic:null,_progressHanlder:null,_stdPolygonsController:null,_thisAreasHighlightController:null,_initPromise:null,buildRendering:function(){C.init();this.inherited(arguments)},postCreate:function(){this.inherited(arguments);
this._showError(!1);this._showEmptyView(!1)},_currentInfographicJson:null,_getWidgetCreationParams:function(a){var b={};switch(a.type){case c.AGE_PYRAMID:b.showVerticalAxis=a.showVerticalAxis;break;case c.ONE_VAR:b.isMultiFeature=!1}return b},updateInfographic:function(a){if(this.viewDiv)return this._destroyCurrentInfographic(),this._currentInfographicJson=a,this.viewModel.dynamicReportInfo&&this._currentInfographicJson.calcData&&c.supportsComparison(this._currentInfographicJson.type)&&(this._stdPolygonsController=
this.viewModel.getStdPolygonsController(this._currentInfographicJson.calcData.calculatorName,this.currentFeatureIndex),this._currentInfographicJson.type===c.ONE_VAR&&(this._thisAreasHighlightController=this.viewModel.getThisAreasHighlightController())),this._enrichInfographicJsonWithProps(a),this._initPromise=g(this._createInfographicWidgetFromJson(a),function(){this._applyTheme(a)}.bind(this))},_enrichInfographicJsonWithProps:function(a){n.setLevels(a,a.levels)},_createInfographicWidgetFromJson:function(a){var b=
this,e=new u,c=this.viewModel.getInfographicDefaultStyles(this.theme);x.set(this.viewDiv,c&&c.agePyramid&&c.agePyramid.theme||"light");if(this.viewModel.dynamicReportInfo&&this.viewModel.dynamicReportInfo.infographicOptions){var f=this.viewModel.dynamicReportInfo.infographicOptions;this.viewModel.dynamicReportInfo.isFixedDataMode||this.viewModel.dynamicReportInfo.geClient.hasCapability("ComparisonLevelsInCalculators")||(a.calcData=null);this._infographic=(new r({infographicStyleProvider:c,widgetParams:this._getWidgetCreationParams(a),
returnGeometry:!1,autoTitle:!1,subtitle:!1,levels:n.getSubLevels(a),highestLevel:n.getHighestLevel(a),onDataRequest:function(){b._showProgress(!0,"data")},onDataReady:function(){g(b.resize(),function(){b._showProgress(!1,"data");b._syncWithShownFeatures();e.resolve()})},onDataError:function(){b._showProgress(!1,"data");b._showError(!0)},onExpandedStateChanged:function(){b._doResize()},onSelectedFeatureChanged:function(){b._syncWithShownFeatures()}})).placeAt(this.infographicDiv);this._showProgress(!0,
"item");return g(function(){return a.calcData?{title:a.title,type:a.type,variables:a.variables||a.calcData.variables}:g(f.getOptions().getItems(f.countryID),function(b){var e;b.some(function(b){if(b.variables&&b.variables.length){var c=n.analyzeVariables(a),f=b.variables[0];if(c.variableID&&-1!==f.indexOf(c.variableID)||c.dataCollectionID&&0===f.indexOf(c.dataCollectionID))return e=b,!0}});return e})}(),function(c){b._showProgress(!1,"item");if(c){var d=f.createGeoenrichment({infographicJson:a,areaData:b.viewModel.dynamicReportInfo.fieldData.areaData,
isMultiFeature:!1,currentFeatureIndex:b.currentFeatureIndex});b._infographic.setGeoenrichment(d);b._infographic.set("studyArea",f.studyArea);b._infographic.set("countryID",f.countryID);b._infographic.set("type",a.type);b._infographic.set("variables",c.variables);b._infographic.set("title",c.title);b._infographic.startup();var h=!d.isBusy();a.title=a.title||c.title;return g(b.resize(),function(){h&&(b._showProgress(!1,"data"),b._syncWithShownFeatures(),e.resolve());return e.promise})}b._showError(!0)})}try{return this._createDummyInfographic(a)}catch(F){console.log(F),
this._showError(!0)}},_createDummyInfographic:function(a){},_syncWithShownFeatures:function(){if(this._stdPolygonsController&&this._infographic&&this._infographic._widget){this._stdPolygonsController.setAttributeFields(this._infographic.dataProvider.getAttributeFields());var a=this._infographic.dataProvider.getAllGeographyAttributes({ignoreFilters:!0}),b;if(this._currentInfographicJson.type===c.ONE_VAR)b=this._infographic.dataProvider.getAllGeographyAttributes();else{b=[];var e=this._infographic._widget.select.getSelectedAttributes();
e&&b.push(e)}this._stdPolygonsController.setShownFeatureAttributes(b);this._stdPolygonsController.setAllFeatureAttributes(a);this._currentInfographicJson.type===c.ONE_VAR&&(this._registerStdPolygonsHighlight(a),this._registerThisAreaHighlight())}},_registerStdPolygonsHighlight:function(a){var b=this;this._stdPolygonsController.registerInfographic({highlightInfographicForAttributes:function(a){b._infographic.domNode&&(a=b._infographic._widget.setTableRowHighlighted(a))&&(b.viewDiv.scrollTop=a.offsetTop+
200-b.viewDiv.clientHeight)}}).then(function(){if(b._infographic.domNode){var c;m(b._infographic._widget.table,"mouseover, mousemove",function(){var e=b._infographic._widget.getOverRow();if(e&&e!==c){var f=(c=e)&&e.cells[0].innerHTML,d;f&&a.some(function(a){if(a.StdGeographyName===f)return d=a,!0});d&&(b._stdPolygonsController.highlightGraphicForAttributes(d),b._infographic._widget.setTableRowHighlighted(d))}});m(b._infographic._widget.table,"mouseout",function(){b._stdPolygonsController.highlightGraphicForAttributes(null);
b._infographic._widget.setTableRowHighlighted(null);c=null})}})},_registerThisAreaHighlight:function(){var a=this;this._thisAreasHighlightController.registerTable({highlightTableForAreaIndex:function(b){if(a._infographic.domNode)if(a.currentFeatureIndex===b){if(b=a._infographic._widget.setThisAreaTableRowHighlighted())a.viewDiv.scrollTop=b.offsetTop+200-a.viewDiv.clientHeight}else a._infographic._widget.setTableRowHighlighted(null)}}).then(function(){if(a._infographic.domNode){var b;m(a._infographic._widget.table,
"mouseover, mousemove",function(){var c=a._infographic._widget.getOverRow();c&&c!==b&&(b=c,a._infographic._widget.isThisAreaRow(b)&&(a._thisAreasHighlightController.highlightGraphicForAreaIndex(a.currentFeatureIndex),a._infographic._widget.setThisAreaTableRowHighlighted()))});m(a._infographic._widget.table,"mouseout",function(){a._thisAreasHighlightController.highlightGraphicForAreaIndex(null);a._infographic._widget.setTableRowHighlighted(null);b=null})}})},_applyTheme:function(a){if(this._infographic){var b=
this.viewModel.getInfographicDefaultStyles(this.theme);d.set(this._infographic.domNode,"backgroundColor",a.style&&a.style.backgroundColor||b&&b.backgroundColor);d.set(this._infographic.domNode,"fontFamily","inherit")}},_destroyCurrentInfographic:function(){this._showError(!1);this._showProgress(!1);this._infographic&&this._infographic.destroy();this._infographic=null},_itemLoadingState:0,_dataLoadingState:0,_contentLoadingState:0,_showProgress:function(a,b){B[a?"showProgress":"removeProgress"](this.domNode);
"item"===b?this._itemLoadingState=a?1:2:"data"===b&&(this._dataLoadingState=a?1:2);1!==this._itemLoadingState&&1!==this._dataLoadingState||0!==this._contentLoadingState||(this._contentLoadingState=1,this.onContentLoadingStart());2===this._itemLoadingState&&2===this._dataLoadingState&&1===this._contentLoadingState&&(this._contentLoadingState=2,this.onContentLoadingEnd())},_filterRangesStats:null,getFilterRanges:function(){return g(this._initPromise,function(){return(this._filterRangesStats=this._infographic.dataProvider.collectFilterRangesStats({excludeThisAreas:!0}))&&
this._filterRangesStats.filterRanges}.bind(this))},setFilterRanges:function(a){return g(this._initPromise,function(){this._infographic.dataProvider.setFilterRanges(a,{ignoreThisAreas:this._currentInfographicJson.type===c.ONE_VAR});this._infographic._widget.select?(this._infographic._widget.select.setFeatures(this._infographic.dataProvider.getData().features),this._infographic._widget.select.setDefaultValue({emitEvent:!0})):(this._infographic._widget.setDataProvider(this._infographic.dataProvider),
this._doResize());this._syncWithShownFeatures();this._showEmptyView(!this.getNumAreasShown());this.onContentUpdated()}.bind(this))},getNumAreasTotal:function(){return this._filterRangesStats&&this._filterRangesStats.numAreasTotal||0},getNumAreasShown:function(){return this._currentInfographicJson.type===c.ONE_VAR?this._infographic.dataProvider.getAllGeographyAttributes().length:this._infographic._widget.select.getNumFeatures&&this._infographic._widget.select.getNumFeatures()||0},_showEmptyView:function(a){k[a?
"hide":"show"](this.infographicDiv);k[a?"show":"hide"](this.noDataPlaceHolder);a&&this._syncEmptyViewPlaceholder()},_syncEmptyViewPlaceholder:function(){this.noDataPlaceHolder&&d.set(this.noDataPlaceHolder,"paddingTop",(this.height-d.get(this.noDataPlaceHolder,"height"))/2+"px")},_showError:function(a){E.emulateErrors.contentErrors&&(a=!0);k[a?"show":"hide"](this.errorDiv);k[a?"hide":"show"](this.infographicDiv)},_adjustErrorMessage:function(){d.set(this.errorDiv,"paddingTop",d.get(this.domNode,"height")/
2-20+"px")},notifyShown:function(){},width:null,height:null,_infographicResizedAtLeastOnce:!1,_hasScroll:!1,resize:function(a,b){void 0!==a&&(this.width=a,this.height=b);return z.invoke(this,"_doResize",50)},_doResize:function(){var a=this;if(this._infographic&&this._infographic.domNode&&k.isNodeInLayout(this.domNode)&&this._currentInfographicJson){this._syncJsonDimensions();var b=this._currentInfographicJson.type,c=Math.max(function(){if("OneVar"===b){var c=q(".OneVarMultiComparison_Table",a.domNode)[0],
c=c?d.get(c,"height")+120:0;return Math.max(c,h[b])}return"Tapestry"===b?(c=(c=q(".Tapestry_Main_Table",a.domNode)[0])?d.get(c,"height")+60:0,Math.max(c,h[b])):h[b]}(),this.height);this._hasScroll=c>this.height;var g=this.width-(this._hasScroll?k.getScrollbarSize().w+3:0);d.set(this._infographic.domNode,{width:g+"px",height:c+"px"});d.set(this.viewDiv,{height:this.height+"px",overflowY:"auto"});this._infographic.resize();this._adjustErrorMessage();return y.delay()}},hasScroll:function(){return this._hasScroll},
changeScroll:function(a,b){this.domNode.scrollLeft+=a;this.domNode.scrollTop+=b},_syncJsonDimensions:function(){this._currentInfographicJson.style=this._currentInfographicJson.style||{};this._currentInfographicJson.style.width=this.width;this._currentInfographicJson.style.height=this.height},getPreferredHeight:function(){return this._infographic&&d.get(this._infographic.domNode,"height")},collapseContent:function(){this._infographic&&this._infographic.collapseContent()},getVisualState:function(){return{selectedFeatureId:this._infographic&&
this._infographic.getSelectedFeatureID()}},setVisualState:function(a){a&&a.selectedFeatureId&&this._infographic&&this._infographic.setSelectedFeatureID(a.selectedFeatureId)},isMouseOver:function(){return A.isMouseOver(this.domNode)||this._infographic&&this._infographic._widget.select&&this._infographic._widget.select.isMouseOver()},toJson:function(){return t.clone(this._currentInfographicJson)},onContentLoadingStart:function(){},onContentLoadingEnd:function(){},onContentUpdated:function(){},destroy:function(){this._stdPolygonsController&&
this._stdPolygonsController.setShownFeatureAttributes([]);this._destroyCurrentInfographic();this.inherited(arguments)}});l.Infographic=r;return l});
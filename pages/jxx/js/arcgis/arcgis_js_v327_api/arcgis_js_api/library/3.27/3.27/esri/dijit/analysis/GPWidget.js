// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/GPWidget.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"GPWidgetIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading" data-dojo-attach-point\x3d"_toolDescHelpDiv"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"toolHeaderLine"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n      \x3cdiv class\x3d"section" data-dojo-attach-point\x3d"inputSectionNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n        \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n        \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"output-pane" data-dojo-attach-point\x3d"outputPaneNode"\x3e\r\n      \x3cdiv class\x3d"section info" data-dojo-attach-point\x3d"infoNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"loadingNode" class\x3d"loading"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"infoTextNode" class\x3d"text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"section" data-dojo-attach-point\x3d"outputSectionNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/GPWidget","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/Deferred dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/NodeList dojo/NodeList-dom dojo/on dojo/Deferred dojo/promise/all dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/ValidationTextBox dijit/form/Form dijit/layout/ContentPane ./_Widget ./_AnalysisOptions ./utils ./GPWidgetViewModel ./customgp/editorManager ./customgp/resultRendererManager ./customgp/common/dijit/Message ../../kernel ../../lang ../../tasks/Geoprocessor ../../tasks/GPMessage ../../tasks/JobInfo ../../layers/ImageParameters ../../graphicsUtils ../../deferredUtils ../../request dojo/i18n!../../nls/jsapi dojo/i18n!./customgp/common/nls/main dojo/i18n!./customgp/nls/strings dojo/text!./templates/GPWidget.html".split(" "),
function(q,T,d,f,v,w,x,y,U,V,n,z,g,W,X,Y,Z,h,A,B,C,aa,D,E,F,G,ba,ca,da,H,ea,fa,I,J,K,L,r,p,ga,M,ha,N,l,t,ia,O,P,Q,m,u,R,S){q=I.createSubclass([D,E,F,G,C,J],{declaredClass:"esri.dijit.analysis.GPWidget",templateString:S,widgetsInTemplate:!0,viewModelType:L,showChooseExtent:!0,i18n:null,toolName:"GPWidget",helpFileName:"GPWidget",constructor:function(a){a.containerNode&&(this.container=a.containerNode)},destroy:function(){this._clearLastInput();this._clearLastResult();this._clearMessageInterval();this.inherited(arguments)},
_onClose:function(a){a&&this.emit("save",{save:!0});a||(this._clearLastInput(),this._clearLastResult(),this._clearMessageInterval());this.emit("close",d.mixin({save:a},{isWebTool:!0,addToMap:0<this.resultLayerNames.length}))},postMixInProperties:function(){this.inherited(arguments);this.i18n={};d.mixin(this.i18n,m.common);d.mixin(this.i18n,m.analysisTools);d.mixin(this.i18n,m.analysisMsgCodes);d.mixin(this.i18n,m.analysisSettings);d.mixin(this.i18n,m.aggregatePointsTool);d.mixin(this.i18n,u.common);
d.mixin(this.i18n,u.units);d.mixin(this.i18n,R);this._initModelWatchers()},postCreate:function(){this.inherited(arguments);this._loadConnections();n.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");n.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.renderUI();this.resultLayerNames=[]},_loadConnections:function(){v.connect(this._closeBtn,"onclick",d.hitch(this,this._onClose,!1));this.own(this.on("start",d.hitch(this,function(){this._onClose(!0)})))},
startup:function(){},renderUI:function(){r.setMap(this.viewModel.map);r.setNls(this.i18n);p.setMap(this.viewModel.map);p.setNls(this.i18n);this.viewModel.title&&this._updateTitle();this.viewModel.inputParams&&this._createInputNodes();this.viewModel.outputParams&&this._createResultNameNodes();this.viewModel.taskUrl&&this._setUpGP();this.viewModel.helpUrl&&this._updateHelpUrl();this.viewModel.map&&this._updateMap()},_initModelWatchers:function(){this.own(this.viewModel.watch("title",d.hitch(this,this._updateTitle)),
this.viewModel.watch("inputParams",d.hitch(this,this._createInputNodes)),this.viewModel.watch("outputParams",d.hitch(this,this._createResultNameNodes)),this.viewModel.watch("taskUrl",d.hitch(this,this._setUpGP)),this.viewModel.watch("helpUrl",d.hitch(this,this._updateHelpUrl)),this.viewModel.watch("helpUrl",d.hitch(this,this._updateMap)))},_setUpGP:function(){this.gp=new N(this.viewModel.taskUrl);this.gp.setOutSpatialReference(this.viewModel.map.spatialReference);this.own(h(this.gp,"execute-complete",
d.hitch(this,this.onExecuteComplete)));this.own(h(this.gp,"job-complete",d.hitch(this,this.onJobComplete)));this.own(h(this.gp,"job-cancel",d.hitch(this,this.onJobCancel)));this.own(h(this.gp,"status-update",d.hitch(this,this.onStatusUpdate)));this.own(h(this.gp,"get-result-data-complete",d.hitch(this,this.onGetResultDataComplate)));this.own(h(this.gp,"get-result-image-layer-complete",d.hitch(this,this.onGetResultImageLayerComplete)));this.own(h(this.gp,"error",d.hitch(this,this.onError)))},_createInputNodes:function(){this.inputNodes&&
0<this.inputNodes.length&&f.forEach(this.inputNodes,function(a,b){g.destroy(a)},this);this.inputNodes=[];this.drawnLayers=[];f.forEach(this.viewModel.inputParams,function(a,b){this._createInputNode(a,b)},this)},_createInputNode:function(a,b){var c=g.create("div",{"class":"esriAnalysisPadding1"},this.inputSectionNode),e=g.create("div",{"class":"esriAnalysisStepsLabel",title:a.tooltip||a.label||""},c);g.create("span",{"class":"esriTrailingMargin025 esriAnalysisNumberLabel",innerHTML:b+1+""},e);g.create("span",
{"class":"",innerHTML:a.label},e);a.required&&g.create("span",{"class":"label-star",innerHTML:"*"},e);b=g.create("div",{"class":"esriLeadingMargin1"},c);e=r.createEditor(a,"input","widget",{uid:this.id,config:this.viewModel,widget:this});e.placeAt(b);this.drawTools=[];"SelectFeatureSetFromLayer"===e.editorName&&this.drawTools.push(e);c.param=a;c.inputEditor=e;this.inputNodes.push(c);!1===a.visible&&n.set(c,"display","none");return c},_createResultNameNodes:function(){this.resultNameNodes&&0<this.resultNameNodes.length&&
f.forEach(this.resultNameNodes,function(a,b){g.destroy(a)},this);this.resultLayerParams=[];this.resultNameNodes=[];f.forEach(this.viewModel.outputParams,function(a,b){"GPFeatureRecordSetLayer"===a.dataType&&this.resultLayerParams.push(a)},this);f.forEach(this.resultLayerParams,function(a,b){this._createResultNameNode(a,this.inputNodes.length+b)},this)},_createResultNameNode:function(a,b){var c=g.create("div",{"class":"esriAnalysisPadding1"},this.inputSectionNode),e=g.create("div",{"class":"esriAnalysisStepsLabel",
title:a.tooltip||a.label||""},c);g.create("span",{"class":"esriTrailingMargin025 esriAnalysisNumberLabel",innerHTML:b+1+""},e);g.create("span",{"class":"",innerHTML:a.label},e);a.required&&g.create("span",{"class":"label-star",innerHTML:"*"},e);b=g.create("div",{"class":"esriLeadingMargin1"},c);e=new H;e.placeAt(b);e.set("value",a.name);!1===a.visible&&n.set(c,"display","none");c.param=a;c.resultNameNode=e;this.resultNameNodes.push(c);return c},_handleSaveBtnClick:function(){this._form.validate()&&
(this.set("disableRunAnalysis",!0),this._clearLastResult(),this._getInputParamValues().then(d.hitch(this,function(a){this.jobParams=a;this.resultLayerNames=[];this.resultNameNodes&&0<this.resultNameNodes.length&&f.forEach(this.resultNameNodes,function(a,c){a.param&&"GPFeatureRecordSetLayer"===a.param.dataType&&a.resultNameNode&&this.resultLayerNames.push(a.resultNameNode.get("value"))},this);this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=w.toJson({extent:this.map.extent._normalize(!0)}));
0<this.resultLayerNames.length&&(a.resultName=this.resultLayerNames[0],a.returnFeatureCollection=!this.viewModel.serverInfo.resultMapServerName);this.emit("start",d.mixin({},a,{isWebTool:!0,addToMap:0<this.resultLayerNames.length}));this.viewModel.serverInfo.isSynchronous?this.gp.execute(a):this.gp.submitJob(a);this.emit("job-submit",d.mixin({},a,{isWebTool:!0,addToMap:0<this.resultLayerNames.length}))})))},_getInputParamValues:function(){var a=new A,b={},c=[],e,k="";f.forEach(this.inputNodes,function(a){e=
a.inputEditor.getGPValue();e.param=a.param;c.push(e)},this);B(c).then(d.hitch(this,function(e){for(var d=0;d<e.length;d++)if(!c[d].param.required||null!==e[d]&&void 0!==e[d])b[c[d].param.name]=e[d];else{k=c[d].param.label+" "+this.i18n.requiredInfo;a.reject(k);return}a.resolve(b)}),function(b){a.reject(b)});return a},_createOutputNodes:function(a){var b=[];this.resultNodes=[];this.resultLayers=[];f.forEach(this.viewModel.outputParams,function(c,e){b.push(this._createOutputNode(c,a[e]))},this);if(f.some(b,
function(a){return null!==a})){var c=[];f.forEach(a,d.hitch(this,function(a){"GPFeatureRecordSetLayer"===a.dataType&&(a=a.value&&a.value.features)&&0<a.length&&(c=c.concat(a))}));if(0<c.length)try{var e=O.graphicsExtent(c);e&&this.viewModel.map.setExtent(e.expand(1.4))}catch(k){console.error(k)}}},_createOutputNode:function(a,b){var c;if(a.visible){try{c=p.createResultRenderer(a,b,{uid:this.id,config:this.viewModel})}catch(k){console.error(k),c=p.createResultRenderer("error",b,{uid:this.id,config:this.viewModel})}b=
g.create("div",{"class":"output-node"},this.outputSectionNode);this.resultNodes.push(b);var e=g.create("div",{"class":"output-label",title:a.tooltip||a.label||"",innerHTML:a.label},b);b.param=a;b.labelNode=e;a=g.create("div",{"class":"renderer-container"},b);c.placeAt(a);c.startup();b.resultRenderer=c;return b}return null},_updateTitle:function(){z.set(this._titleLbl,"innerHTML",this.viewModel.title)},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a);this._saveBtn.set("iconClass",
a?"esriLoading":"")},_getDrawLayerAttr:function(){return this.drawLayer},_setDrawLayerAttr:function(a){this.drawLayer||(this.drawLayer=[]);this.drawLayer.push(a)},_setDrawnLayerNameAttr:function(a){this.drawnLayerName=a},_setDrawPointLayerNameAttr:function(a){this.drawPointLayerName=a},_setDrawLineLayerNameAttr:function(a){this.drawLineLayerName=a},_setDrawPolyLayerNameAttr:function(a){this.drawPolyLayerName=a},_getDrawnLayerNameAttr:function(a){return this.drawnLayerName},clear:function(){f.forEach(this.drawTools,
function(a){a.clear()})},onExecuteComplete:function(a){this.set("disableRunAnalysis",!1);var b;a.messages&&0<a.messages.length&&(b=f.filter(a.messages,function(a){return a.type===l.TYPE_WARNING||a.type===l.TYPE_ERROR}),0<b.length&&this._createErrorMessages(b));this._createOutputNodes(a.results)},onJobComplete:function(a){this.set("disableRunAnalysis",!1);this._clearMessageInterval();a.jobParams=this.jobParams;this.resultLayerNames&&0<this.resultLayerNames.length&&(a.jobParams.resultName=this.resultLayerNames[0]);
var b;if(a.jobInfo.messages&&0<a.jobInfo.messages.length&&(b=f.filter(a.jobInfo.messages,function(a){return a.type===l.TYPE_WARNING||a.type===l.TYPE_ERROR}),0<b.length&&(this._createErrorMessages(b,a),a.jobInfo.jobStatus!==t.STATUS_SUCCEEDED)))return;this.emit("job-success",d.mixin({},a,{isWebTool:!0,addToMap:0<this.resultLayerNames.length}));if(this.viewModel.useResultMapServer){b=this.viewModel.taskUrl.replace("GPServer","MapServer");b=b.substring(0,b.lastIndexOf("/"));b+="/jobs/"+a.jobInfo.jobId;
var c=f.filter(this.resultNameNodes,function(b,c){return b.param&&b.param.name===a.jobParams.resultName},this),c=0<c.length&&c[0].resultNameNode?c[0].resultNameNode.get("value"):a.jobParams.resultName;this.emit("job-result",{value:{url:b,type:"ArcGISDynamicMapServiceLayer"},outputLayerName:c,isWebTool:!0,addToMap:!0});f.some(this.viewModel.outputParams,function(a){if("MapServiceLayer"===a.dataType)return!0});f.forEach(this.viewModel.outputParams,function(b){b.visible&&"GPFeatureRecordSetLayer"!==
b.dataType&&"GPRasterDataLayer"!==b.dataType&&"GPRecordSet"!==b.dataType&&this.gp.getResultData(a.jobInfo.jobId,b.name)},this)}else f.forEach(this.viewModel.outputParams,function(b){b.visible&&("GPFeatureRecordSetLayer"===b.dataType&&this.viewModel.serverInfo&&!this.viewModel.serverInfo.resultMapServerName?this._getCustomResultData(a.jobInfo.jobId,b.name,{returnFeatureCollection:!0}):this.gp.getResultData(a.jobInfo.jobId,b.name))},this)},_getCustomResultData:function(a,b,c,e,f){var g=this.gp._getResultDataHandler,
k=this.gp._errorHandler,h=new x(P._dfdCanceller);h._pendingDfd=Q({url:this.gp._url.path+"/jobs/"+a+"/results/"+b,content:d.mixin({},this.gp._url.query,{f:"json",returnType:"data"},c),callbackParamName:"callback",load:function(a,b){g(a,b,e,f,h)},error:function(a){k(a,f,h)}});return h},onJobCancel:function(a){this.infoTextNode.innerHTML="Canceled";this._clearMessageInterval();this.resultLayerNames&&0<this.resultLayerNames.length&&(a.resultName=this.resultLayerNames[0]);this.emit("job-cancel",d.mixin({},
a,{isWebTool:!0,addToMap:0<this.resultLayerNames.length}))},onStatusUpdate:function(a){this.jobId=a.jobInfo.jobId;d.mixin(a,a.jobInfo);a.jobInfo.jobStatus===t.STATUS_SUCCEEDED&&(this.set("disableRunAnalysis",!1),this._clearMessageInterval());!this.messageInterval&&this.jobId&&this._setupMessageInterval();a.jobParams=this.jobParams;this.resultLayerNames&&0<this.resultLayerNames.length&&(a.jobParams.resultName=this.resultLayerNames[0]);this.emit("job-status",d.mixin({},a,{isWebTool:!0,addToMap:0<this.resultLayerNames.length}))},
onGetResultDataComplate:function(a){a.result&&("GPFeatureRecordSetLayer"!==a.result.dataType||"GPFeatureRecordSetLayer"===a.result.dataType&&this.shouldAddToMap)&&this._createOutputNode(this._getOutputParamByName(a.result.paramName),a.result);var b=f.filter(this.resultNameNodes,function(b,d){return b.param&&b.param.name===a.result.paramName},this);a.result.outputLayerName=0<b.length&&b[0].resultNameNode?b[0].resultNameNode.get("value"):a.result.paramName;this.emit("job-result",d.mixin({},a.result,
{param:this._getOutputParamByName(a.result.paramName),isWebTool:!0,addToMap:0<this.resultLayerNames.length}))},onGetResultImageLayerComplete:function(a){if(a=a.layer){var b=a.url.substring(a.url.lastIndexOf("/")+1),b={name:b,title:b,tooltip:b,dataType:"result map service",visible:!0};a._wab_type="ArcGISDynamicMapServiceLayer";var c=this._getResultMapServiceParam();c&&(b.label=c.label,b.tooltip=c.tooltip,a.title=c.label);null!==this._createOutputNode(b,a)&&this.resultLayers.push(a)}},onError:function(a){this.infoTextNode.innerHTML=
a.error.message;this._clearMessageInterval()},_createErrorMessages:function(a,b){var c="",e=0;f.forEach(a,function(a){if(a.type===l.TYPE_WARNING||a.type===l.TYPE_ERROR)a.type===l.TYPE_ERROR&&e++,c+=a.description+"\n"});a={message:c};b&&b.jobParams&&b.jobParams.resultName&&d.mixin(a,{jobParams:b.jobParams,resultName:b.jobParams.resultName});0===e&&c&&(a.type="warning");a.isWebTool=!0;this.emit("job-fail",a)},_setupMessageInterval:function(){this.messageInterval=setInterval(d.hitch(this,this._updateJobMessage),
1E3)},_clearMessageInterval:function(){this.jobId="";this.messageInterval&&(clearInterval(this.messageInterval),this.messageInterval=null)},_getResultMapServiceParam:function(){var a;f.some(this.viewModel.outputParams,function(b){if("MapServiceLayer"===b.dataType)return a=b,!0});return a},_getOutputParamByName:function(a){for(var b=0;b<this.viewModel.outputParams.length;b++)if(this.viewModel.outputParams[b].name===a)return this.viewModel.outputParams[b]},_clearLastInput:function(){f.forEach(this.inputNodes,
function(a){a.inputEditor.clear&&d.isFunction(a.inputEditor.clear)&&a.inputEditor.clear()},this)},_clearLastResult:function(){g.empty(this.infoTextNode);f.forEach(this.resultNodes,function(a){g.destroy(a.labelNode);a.resultRenderer&&a.resultRenderer.destroy();g.destroy(a)});f.forEach(this.resultLayers,function(a){null!==a&&this.viewModel.map.removeLayer(a)},this);this.resultNodes=[];this.resultLayers=[]},_showLoading:function(){},_hideLoading:function(){},_updateHelpUrl:function(){K.initHelpLinks(this.domNode,
!0,{isSingleTenant:!0,helpUrl:this.viewModel.helpUrl,showHelpFromUrl:!0})},_updateMap:function(){this.viewModel.map&&this.set("map",this.viewModel.map)}});y("extend-esri")&&d.setObject("dijit.analysis.GPWidget",q,M);return q});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/supportClasses/HTMLPageBuilder",["../createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/ReportPlayer/config","../../../_devConfig"],function(f,g,c,a){return{buildHTMLPageString:function(b,h,k){b=c.createPlayerCommand.prettifyDataJson||a.createPlayerCommand.saveDataJsonAsTextFile?JSON.stringify(b,void 0,4):JSON.stringify(b);a.createPlayerCommand.saveDataJsonAsTextFile&&g.saveTextFile(b,
"reportDataJson");var e=[];e.push('html, body, #layoutNode { padding: 0px; margin: 0px; height: 100%; overflow: hidden; font-size: 13px; font-family: "Avenir Next"; }');var d=[];a.createPlayerCommand.useTestBuild?(d.push({src:a.createPlayerCommand.configUrl}),d.push({"data-dojo-config":"baseUrl: '"+a.createPlayerCommand.baseUrl+"', isDebug: 1, waitSeconds: 60",src:a.createPlayerCommand.mainUrl})):d.push({src:c.playerSourceRootUrl});return f.composeHtmlStringFromParts({reportTitle:h.getReportTitle(),
links:[a.createPlayerCommand.useTestBuild?a.createPlayerCommand.esriDijitCssUrl:c.esriDijitCssUrl,a.createPlayerCommand.useTestBuild?a.createPlayerCommand.esriCssUrl:c.esriCssUrl],cssFiles:e,scripts:d.concat(['require(["require", "esri/dijit/geoenrichment/nlsFix"],\nfunction (relativeRequire, nlsFix) {\n   nlsFix.load(null, relativeRequire);\n   require([\n       "dojo/when",\n       "dojo/sniff",\n       "esri/dijit/geoenrichment/ReportPlayer/ReportPlayer",\n       "esri/dijit/geoenrichment/ReportPlayer/DataProviderGE",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerCommands",\n       "esri/dijit/geoenrichment/utils/UrlUtil",\n       "dojo/domReady!"\n   ],\n   function (\n       when,\n       has,\n       ReportPlayer,\n       DataProviderGE,\n       PlayerViewModes,\n       PlayerCommands,\n       UrlUtil\n   ) {\n       esriConfig.defaults.io.proxyUrl \x3d UrlUtil.getVariableValue(window.location.href, "proxy") || null;\n       var reportDataJson \x3d '+
b+';\n       var dataProvider \x3d new DataProviderGE();\n       dataProvider.registerCommand(PlayerCommands.PRINT);\n       if (!has("ie") \x26\x26 !has("trident"))\n           dataProvider.registerCommand(PlayerCommands.IMAGE);\n       var player \x3d new ReportPlayer({\n           dataProvider: dataProvider,\n           viewMode: UrlUtil.getVariableValue(window.location.href, "viewMode") || PlayerViewModes.FULL_PAGES,\n           enableDataDrilling: '+k+",\n           onError: function(e) {\n               console.log(e);\n           }\n       }).placeAt(layoutNode);\n       player.reportDataFromJson(reportDataJson);\n   });\n});"]),
contentString:'\x3cdiv id\x3d"layoutNode"\x3e\x3c/div\x3e'})}}});
//>>built
define("dojox/data/StoreExplorer",["dojo","dijit","dojox","dojo/require!dojox/grid/DataGrid,dojox/data/ItemExplorer,dijit/layout/BorderContainer,dijit/layout/ContentPane"],function(c,k,n){c.provide("dojox.data.StoreExplorer");c.require("dojox.grid.DataGrid");c.require("dojox.data.ItemExplorer");c.require("dijit.layout.BorderContainer");c.require("dijit.layout.ContentPane");c.declare("dojox.data.StoreExplorer",k.layout.BorderContainer,{constructor:function(b){c.mixin(this,b)},store:null,columnWidth:"",
stringQueries:!1,showAllColumns:!1,postCreate:function(){function b(a,b){a=new k.form.Button({label:a});p.containerNode.appendChild(a.domNode);a.onClick=b;return a}var e=this;this.inherited(arguments);var p=(new k.layout.ContentPane({region:"top"})).placeAt(this),g=p.containerNode.appendChild(document.createElement("span"));g.innerHTML="Enter query: \x26nbsp;";g.id="queryText";var m=p.containerNode.appendChild(document.createElement("input"));m.type="text";m.id="queryTextBox";b("Query",function(){var a=
m.value;e.setQuery(e.stringQueries?a:c.fromJson(a))});p.containerNode.appendChild(document.createElement("span")).innerHTML="\x26nbsp;\x26nbsp;\x26nbsp;";var q=b("Create New",c.hitch(this,"createNew")),t=b("Delete",function(){for(var a=d.selection.getSelected(),b=0;b<a.length;b++)e.store.deleteItem(a[b])});this.setItemName=function(a){q.attr("label","\x3cimg style\x3d'width:12px; height:12px' src\x3d'"+c.moduleUrl("dijit.themes.tundra.images","dndCopy.png")+"' /\x3e Create New "+a);t.attr("label",
"Delete "+a)};b("Save",function(){e.store.save({onError:function(a){alert(a)}});e.tree.refreshItem()});b("Revert",function(){e.store.revert()});b("Add Column",function(){var a=prompt("Enter column name:","property");a&&(e.gridLayout.push({field:a,name:a,formatter:c.hitch(e,"_formatCell"),editable:!0}),e.grid.attr("structure",e.gridLayout))});var g=(new k.layout.ContentPane({region:"center"})).placeAt(this),d=this.grid=new n.grid.DataGrid({store:this.store});g.attr("content",d);d.canEdit=function(a,
b){a=this._copyAttr(b,a.field);return!(a&&"object"==typeof a)||a instanceof Date};var g=(new k.layout.ContentPane({region:"trailing",splitter:!0,style:"width: 300px"})).placeAt(this),f=this.tree=new n.data.ItemExplorer({store:this.store});g.attr("content",f);c.connect(d,"onCellClick",function(){var a=d.selection.getSelected()[0];f.setItem(a)});this.gridOnFetchComplete=d._onFetchComplete;this.setStore(this.store)},setQuery:function(b,e){this.grid.setQuery(b,e)},_formatCell:function(b){return this.store.isItem(b)?
this.store.getLabel(b)||this.store.getIdentity(b):b},setStore:function(b){function e(b){return c._formatCell(b)}this.store=b;var c=this,g=this.grid;g._pending_requests[0]=!1;var m=this.gridOnFetchComplete;g._onFetchComplete=function(k,p){var d=c.gridLayout=[],f,a,l,h,n;f=b.getIdentityAttributes();for(l=0;l<f.length;l++)a=f[l],d.push({field:a,name:a,_score:100,formatter:e,editable:!1});for(l=0;a=k[l++];){var q=b.getAttributes(a);for(n=0;a=q[n++];){var r=!1;for(h=0;f=d[h++];)if(f.field==a){f._score++;
r=!0;break}r||d.push({field:a,name:a,_score:1,formatter:e,styles:"white-space:nowrap; ",editable:!0})}}d=d.sort(function(a,b){return b._score-a._score});if(!c.showAllColumns)for(h=0;f=d[h];h++)if(f._score<k.length/40*h){d.splice(h,d.length-h);break}for(h=0;f=d[h++];)f.width=c.columnWidth||Math.round(100/d.length)+"%";g._onFetchComplete=m;g.attr("structure",d);m.apply(this,arguments)};g.setStore(b);this.queryOptions={cache:!0};this.tree.setStore(b)},createNew:function(){var b=prompt("Enter any properties (in JSON literal form) to put in the new item (passed to the newItem constructor):",
"{ }");if(b)try{this.store.newItem(c.fromJson(b))}catch(e){alert(e)}}})});
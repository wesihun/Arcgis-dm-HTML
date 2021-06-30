//>>built
define("dojox/widget/rotator/Controller","dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/event dojo/_base/array dojo/_base/connect dojo/query".split(" "),function(l,m,f,n,p,k,e){return l("dojox.widget.rotator.Controller",null,{rotator:null,commands:"prev,play/pause,info,next",constructor:function(a,c){m.mixin(this,a);var d=this.rotator;if(d){for(;c.firstChild;)c.removeChild(c.firstChild);var h=this._domNode=f.create("ul",null,c),g=function(a,b,c){f.create("li",{className:b,innerHTML:'\x3ca href\x3d"#"\x3e\x3cspan\x3e'+
a+"\x3c/span\x3e\x3c/a\x3e",onclick:function(a){n.stop(a);d&&d.control.apply(d,c)}},h)};p.forEach(this.commands.split(","),function(a,b){switch(a){case "prev":g("Prev","dojoxRotatorPrev dojoxRotatorIcon",["prev"]);break;case "play/pause":g("Play","dojoxRotatorPlay dojoxRotatorIcon",["play"]);g("Pause","dojoxRotatorPause dojoxRotatorIcon",["pause"]);break;case "info":this._info=f.create("li",{className:"dojoxRotatorInfo",innerHTML:this._buildInfo(d)},h);break;case "next":g("Next","dojoxRotatorNext dojoxRotatorIcon",
["next"]);break;case "#":case "titles":for(b=0;b<d.panes.length;b++)g("#"==a?b+1:d.panes[b].title||"Tab "+(b+1),("#"==a?"dojoxRotatorNumber":"dojoxRotatorTab")+" "+(b==d.idx?"dojoxRotatorSelected":"")+" dojoxRotatorPane"+b,["go",b])}},this);e("li:first-child",h).addClass("dojoxRotatorFirst");e("li:last-child",h).addClass("dojoxRotatorLast");this._togglePlay();this._con=k.connect(d,"onUpdate",this,"_onUpdate")}},destroy:function(){k.disconnect(this._con);f.destroy(this._domNode)},_togglePlay:function(a){a=
this.rotator.playing;e(".dojoxRotatorPlay",this._domNode).style("display",a?"none":"");e(".dojoxRotatorPause",this._domNode).style("display",a?"":"none")},_buildInfo:function(a){return"\x3cspan\x3e"+(a.idx+1)+" / "+a.panes.length+"\x3c/span\x3e"},_onUpdate:function(a){var c=this.rotator;switch(a){case "play":case "pause":this._togglePlay();break;case "onAfterTransition":this._info&&(this._info.innerHTML=this._buildInfo(c)),a=function(a){c.idx<a.length&&f.addClass(a[c.idx],"dojoxRotatorSelected")},
a(e(".dojoxRotatorNumber",this._domNode).removeClass("dojoxRotatorSelected")),a(e(".dojoxRotatorTab",this._domNode).removeClass("dojoxRotatorSelected"))}}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var t=function(k,h){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,n){h.__proto__=n}||function(h,n){for(var k in n)n.hasOwnProperty(k)&&(h[k]=n[k])};return t(k,h)};return function(k,h){function u(){this.constructor=k}t(k,h);k.prototype=null===h?Object.create(h):(u.prototype=h.prototype,new u)}}();
define("esri/arcade/featureset/actions/AttributeFilter","require exports dojo/Deferred dojo/promise/all dojo/promise/Promise ../support/FeatureSet ../support/IdSet ../support/shared ../support/WhereClause".split(" "),function(t,k,h,u,n,w,r,e,q){var v=function(k){function c(b){var a=k.call(this,b)||this;a.declaredClass="esri.arcade.featureset.actions.AttributeFilter";a._maxProcessing=1E3;a._parent=b.parentfeatureset;b.whereclause instanceof q?(a._whereclause=b.whereclause,a._whereClauseFunction=null,
b=a._whereclause.getFunctions(),a._whereclauseDoesGeometry=!1,0<=b.indexOf("area")?a._whereclauseDoesGeometry=!0:0<=b.indexOf("length")&&(a._whereclauseDoesGeometry=!0)):(a._whereClauseFunction=b.whereclause,a._whereclause=null);return a}__extends(c,k);c.prototype._getSet=function(b){var a=this,d=new h;null===this._wset?this._ensureLoaded().then(e.callback(function(){a._parent._getFilteredSet("",null,!1===a._whereclauseDoesGeometry?a._whereclause:null,null,b).then(e.callback(function(f){a._checkCancelled(b);
a._wset=!0===a._whereclauseDoesGeometry||null!==a._whereClauseFunction?new r(f._candidates.slice(0).concat(f._known.slice(0)),[],f._ordered,a._clonePageDefinition(f.pagesDefinition)):new r(f._candidates.slice(0),f._known.slice(0),f._ordered,a._clonePageDefinition(f.pagesDefinition));d.resolve(a._wset)},d),e.errback(d))},d),e.errback(d)):d.resolve(this._wset);return d.promise};c.prototype._isInFeatureSet=function(b){var a=this._parent._isInFeatureSet(b);if(a===e.IdState.NotInFeatureSet)return a;a=
this._idstates[b];return void 0===a?e.IdState.Unknown:a};c.prototype._getFeature=function(b,a,d){return this._parent._getFeature(b,a,d)};c.prototype._getFeatures=function(b,a,d,f){return this._parent._getFeatures(b,a,d,f)};c.prototype._featureFromCache=function(b){return this._parent._featureFromCache(b)};c.prototype.executeWhereClause=function(b){return this._whereclause.testFeature(b)};c.prototype.executeWhereClauseDeferred=function(b){if(null!==this._whereClauseFunction){var a=new h;try{var d=
this._whereClauseFunction(b);d instanceof n?d.then(e.callback(function(b){a.resolve(b)},a),e.errback(a)):a.resolve(d)}catch(f){a.reject(f)}return a.promise}return this._whereclause.testFeatureDeferred(b)};c.prototype._fetchAndRefineFeatures=function(b,a,d){var f=this,g=new h,c=new r([],b,!1,null),l=Math.min(a,b.length);this._parent._getFeatures(c,-1,l,d).then(e.callback(function(){f._checkCancelled(d);if(!1===f._whereclauseDoesGeometry&&null==f._whereClauseFunction){for(var p=0;p<l;p++){var c=f._parent._featureFromCache(b[p]);
!0===f.executeWhereClause(c)?f._idstates[b[p]]=e.IdState.InFeatureSet:f._idstates[b[p]]=e.IdState.NotInFeatureSet}g.resolve("success")}else{for(var h=[],p=0;p<l;p++)c=f._parent._featureFromCache(b[p]),h.push(f.executeWhereClauseDeferred(c));u(h).then(e.callback(function(d){for(var c=0;c<a;c++)f._idstates[b[c]]=!0===d[c]?e.IdState.InFeatureSet:e.IdState.NotInFeatureSet;g.resolve("success")},g),e.errback(g))}},g),e.errback(g));return g.promise};c.prototype._getFilteredSet=function(b,a,d,f,c){var g=
this,l=new h;!0!==this._whereclauseDoesGeometry&&null===this._whereClauseFunction&&(null!==d?null!==this._whereclause&&(d=q.combine(this._whereclause,d)):d=this._whereclause);this._ensureLoaded().then(e.callback(function(){g._parent._getFilteredSet(b,a,d,f,c).then(e.callback(function(a){g._checkCancelled(c);a=!0===g._whereclauseDoesGeometry||null!==g._whereClauseFunction?new r(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,g._clonePageDefinition(a.pagesDefinition)):new r(a._candidates.slice(0),
a._known.slice(0),a._ordered,g._clonePageDefinition(a.pagesDefinition));l.resolve(a)},l),e.errback(l))},l),e.errback(l));return l.promise};c.prototype._stat=function(b,a,d,c,g,k,l){var f=this,m=new h;if(!0===this._whereclauseDoesGeometry||null!==this._whereClauseFunction)return null===g&&""===d&&null===c?this._manualStat(b,a,k,l).then(e.callback(function(a){m.resolve(a)},m),e.errback(m)):m.resolve({calculated:!1}),m.promise;var n=this._whereclause;null!==g&&null!==this._whereclause&&(n=q.combine(this._whereclause,
g));this._parent._stat(b,a,d,c,n,k,l).then(e.callback(function(h){!1===h.calculated?null===g&&""===d&&null===c?f._manualStat(b,a,k,l).then(e.callback(function(a){m.resolve(a)},m),e.errback(m)):m.resolve({calculated:!1}):m.resolve(h)},m),e.errback(m));return m.promise};c.prototype._canDoAggregates=function(b,a,c,f,g){var d=new h;if(!0===this._whereclauseDoesGeometry||null!==this._whereClauseFunction)return d.resolve(!1),d.promise;null!==g?null!==this._whereclause&&(g=q.combine(this._whereclause,g)):
g=this._whereclause;return null===this._parent?(d.resolve(!1),d.promise):this._parent._canDoAggregates(b,a,c,f,g)};c.prototype._getAggregatePagesDataSourceDefinition=function(b,a,c,f,g,e,k){var d=new h;if(null===this._parent)d.reject(Error("Should never be called"));else return null!==g?null!==this._whereclause&&(g=q.combine(this._whereclause,g)):g=this._whereclause,this._parent._getAggregatePagesDataSourceDefinition(b,a,c,f,g,e,k);return d.promise};c.prototype.arcadeScriptStep=function(b,a,c){b=
this.arcadeAssignNextScriptStepIdentifiers(c);a=this._whereclause.toWhereClause(e.FeatureServiceDatabaseType.Standardised);return"var "+b.newFeatureSet+" \x3d "+this.bigDataCachePipeline("filter( "+b.currentFeatureSet+',"'+a+'")')+";"};return c}(w);w._featuresetFunctions.filter=function(e,c){void 0===c&&(c=null);if("function"===typeof e)return new v({parentfeatureset:this,whereclause:e});if(""===e)return this;e=q.create(e);if(null!==c){var b={},a;for(a in c)b[a.toLowerCase()]=c[a];e.setVariablesDictionary(b)}return new v({parentfeatureset:this,
whereclause:e})};return v});
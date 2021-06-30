// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/ge/LocalGEInfographic",["dojo/_base/declare","dojo/_base/lang","./LocalGEBase","../AreaDataUtil"],function(g,h,k,l){return g(k,{_fieldNameToFieldInfoCache:null,_variableIdToFieldInfoCache:null,constructor:function(d,b,a,c,e){this._fieldNameToFieldInfoCache={};this._variableIdToFieldInfoCache={};d.fieldInfos.forEach(function(a){this._fieldNameToFieldInfoCache[a.name]=a;this._variableIdToFieldInfoCache[a.variableID]=a},this);
var f=d.calcData.calculatorName;(this._skipThisArea=a&&1<b.length)?(a=l.combineAreaDataObjectCalculators(b,f,{removeDuplicates:!0}),e=a.thisAreas.map(function(a,b){a=h.mixin({},a);a.StdGeographyName=c[b];a.isThisArea=!0;return a}),b={},b[f]={data:e.shift(),comparisonLevels:e.concat(a.comparisonLevels)}):b=b[e||0];this._initGE(d.calcData.variables,b,f)},_propulateAttributesFromAreaData:function(d,b){for(var a in b){var c=this._fieldNameToFieldInfoCache[a];c?d[c.variableID]=b[a]:d[a]=b[a]}},_createField:function(d,
b){var a=this.inherited(arguments),c=this._variableIdToFieldInfoCache[d];c?(a.alias=c.alias,a.decimals=c.decimals,a.units=c.showPercent?"pct":c.showCurrency?"currency":a.units,a.type=c.type||a.type):a.noVariableField=!0;return a},_filterAttributeField:function(d){return!d.noVariableField}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/utils",["require","exports","../lang"],function(n,d,m){function g(a,b){return b?Object.keys(b).reduce(function(a,c){if("value"===c)return a[c]=b[c],a;if(void 0===a[c])return a[c]=m.clone(b[c]),a;var e=a[c],f=b[c];if(e===f)return a;if(Array.isArray(f)||Array.isArray(a))e=e?Array.isArray(e)?a[c]=e.concat():a[c]=[e]:a[c]=[],f&&(Array.isArray(f)||(f=[f]),f.forEach(function(a){-1===e.indexOf(a)&&e.push(a)}));else if(f&&"object"===typeof f)a[c]=g(e,f);
else if(!a.hasOwnProperty(c)||b.hasOwnProperty(c))a[c]=f;return a},a||{}):a}function h(a){return Array.isArray(a)?a:a.split(".")}function k(a){if(Array.isArray(a)||-1<a.indexOf(",")){a=Array.isArray(a)?a:a.split(",");for(var b=0;b<a.length;b++)a[b]=a[b].trim();return 1===a.length?a[0]:a}return a.trim()}function l(a){var b=!1;return function(){b||(b=!0,a())}}Object.defineProperty(d,"__esModule",{value:!0});d.getProperties=function(a){return a?a.__accessor__?a.__accessor__:a.propertyInvalidated?a:null:
null};d.isPropertyDeclared=function(a,b){return a&&a.metadatas&&null!=a.metadatas[b]};d.merge=g;d.pathToStringOrArray=function(a){return a?"string"===typeof a&&-1===a.indexOf(".")?a:h(a):a};d.pathToArray=h;d.splitPath=k;d.parse=function(a,b,d,c){b=k(b);if(Array.isArray(b)){var e=b.map(function(b){return c(a,b.trim(),d)});return{remove:l(function(){return e.forEach(function(a){return a.remove()})})}}return c(a,b.trim(),d)};d.once=l});
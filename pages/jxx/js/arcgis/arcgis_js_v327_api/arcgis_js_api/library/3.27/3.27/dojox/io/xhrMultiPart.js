//>>built
define("dojox/io/xhrMultiPart",["dojo/_base/kernel","dojo/_base/array","dojo/_base/xhr","dojo/query","dojox/uuid/generateRandomUuid"],function(e,m,n,h,k){function f(a,c){if(!a.name&&!a.content)throw Error("Each part of a multi-part request requires 'name' and 'content'.");var b=[];b.push("--"+c,'Content-Disposition: form-data; name\x3d"'+a.name+'"'+(a.filename?'; filename\x3d"'+a.filename+'"':""));a.contentType&&(c="Content-Type: "+a.contentType,a.charset&&(c+="; Charset\x3d"+a.charset),b.push(c));
a.contentTransferEncoding&&b.push("Content-Transfer-Encoding: "+a.contentTransferEncoding);b.push("",a.content);return b}function l(a,c){a=e.formToObject(a);var b=[],d;for(d in a)e.isArray(a[d])?e.forEach(a[d],function(a){b=b.concat(f({name:d,content:a},c))}):b=b.concat(f({name:d,content:a[d]},c));return b}e.getObject("io.xhrMultiPart",!0,dojox);dojox.io.xhrMultiPart=function(a){if(!a.file&&!a.content&&!a.form)throw Error("content, file or form must be provided to dojox.io.xhrMultiPart's arguments");
var c=k(),b=[],d="";if(a.file||a.content){var g=a.file||a.content;e.forEach(e.isArray(g)?g:[g],function(a){b=b.concat(f(a,c))})}else if(a.form){if(h("input[type\x3dfile]",a.form).length)throw Error("dojox.io.xhrMultiPart cannot post files that are values of an INPUT TYPE\x3dFILE.  Use dojo.io.iframe.send() instead.");b=l(a.form,c)}b.length&&(b.push("--"+c+"--",""),d=b.join("\r\n"));console.log(d);return e.rawXhrPost(e.mixin(a,{contentType:"multipart/form-data; boundary\x3d"+c,postData:d}))};return dojox.io.xhrMultiPart});
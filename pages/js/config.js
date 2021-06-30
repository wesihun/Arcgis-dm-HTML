
//业务服务
var config;
config={
    ip: 'http://192.168.11.235',
    port: ':8081',
    newip: 'http://192.168.11.235',
    newport:':5050',
};

//地图服务
var ARCGISCONFIG={
    DLTB_Dinamic:"http://192.168.11.235:6080/arcgis/rest/services/jixian/DLTB_Dynamic/MapServer",
    DLTB_FEATURE:"http://192.168.11.235:6080/arcgis/rest/services/jixian/DLTB/FeatureServer",
    XZQ_TAG_WITH_MAXSCALE_1_50000:"http://192.168.11.235:6080/arcgis/rest/services/jixian/XZQ_TAG_WITH_MAXSCALE1_50000_MapServer/MapServer",

    QueryLevel: "/0",
    FindTaskLevel: 0,

    IMAGE_LAYER_1:"http://192.168.11.235:6080/arcgis/rest/services/jixian/IMAGE_1/ImageServer",
    IMAGE_LAYER_2:"http://192.168.11.235:6080/arcgis/rest/services/jixian/IMAGE_2/ImageServer",
    IMAGE_LAYER_3:"http://192.168.11.235:6080/arcgis/rest/services/jixian/IMAGE_3/ImageServer",

    PRINTTASK:"http://192.168.11.235:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",

    ARCSERVER:"192.168.11.235",
    ARCSERVERPORT:":6080"
};

//地理服务
var GEOSERVER={
    IP:"http://192.168.11.235",
    PORT:":65535"
}


inifun()//初始化配置参数

function inifun(){
    $.ajax({url:config.ip + config.port + '/getLastUpdateDLTBService', type: 'POST', data:{type:0}, xhrFields:{withCredentials:true},async: false, success:function(result) {//最后一次更新的地类图斑动态地图服务type（0动态地图，1要素，2影像）
        ARCGISCONFIG.DLTB_Dinamic = result.serviceaddr;
    }, error:function() {alert("初始化动态地图失败！");}});

    $.ajax({url:config.ip + config.port + '/getLastUpdateDLTBService', type: 'POST', data:{type:1}, xhrFields:{withCredentials:true},async: false, success:function(result) {//最后一次更新的地类图斑要素服务type（0动态地图，1要素，2影像）
        ARCGISCONFIG.DLTB_FEATURE = result.serviceaddr;
        TB_DLTB_POJO = result;
    }, error:function() {alert("初始化要素服务失败！");}});

    $.ajax({url:config.ip + config.port + '/getLastUpdateXZQService', type: 'POST', data:{type:5000}, xhrFields:{withCredentials:true}, async: false,success:function(result) {//1：5000行政区服务type（0动态地图，1要素，2影像,5000 1:5000缩放隐藏）
        ARCGISCONFIG.XZQ_TAG_WITH_MAXSCALE_1_50000 = result.serviceaddr;
    }, error:function() {alert("初始化1：5000行政区失败！");}});

    $.ajax({url:config.ip + config.port + '/getAllRunImageLayerService', type: 'POST', data:{type:2}, xhrFields:{withCredentials:true}, async: false,success:function(result) {//取得最后一次更新所有启用影像服务根据服务类型type（0动态地图，1要素，2影像,5000 1:5000缩放隐藏）
        ARCGISCONFIG.IMAGE_LAYER_1 = result[0].serviceaddr;     ARCGISCONFIG.IMAGE_LAYER_2 = result[1].serviceaddr;     ARCGISCONFIG.IMAGE_LAYER_3 = result[2].serviceaddr;
    }, error:function() {alert("初始化影像服务失败！");}});

}

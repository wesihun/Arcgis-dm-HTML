var TB_DLTBPHYSICS = {dyPojo:null, fuPojo:null};//当前选中的地类图斑对象，对应mysql tb_dltb

function ChangeVersionClass()//选择版本类
{
    this.changeLayer = changeLayer;//切换图层
    this.getCurrentDynamycLayerByFutureLayer = getCurrentDynamycLayerByFutureLayer;//根据全局变量TB_DLTBPHYSICS中的要素服务时间取得对应的动态地图服务
}



function changeLayer(toAddLayer, toRemoveLayer){
    globalQueryClass.map.removeLayer(globalQueryClass.map.getLayer('dltb'));
    globalQueryClass.map.addLayer(new globalQueryClass.ArcGISDynamicMapServiceLayer(TB_DLTBPHYSICS.dyPojo.serviceaddr, {id:'dltb'}),0);
}

function getCurrentDynamycLayerByFutureLayer() {
    $.ajax({url:config.ip + config.port + '/getDLTBServiceByUpdatetime', type: 'POST', data:{type:0,updatetime:TB_DLTBPHYSICS.fuPojo.updatetime.slice(0,10)}, xhrFields:{withCredentials:true},async: false, success:function(result) {//最后一次更新的地类图斑动态地图服务type（0动态地图，1要素，2影像）
        TB_DLTBPHYSICS.dyPojo = result;
    }, error:function() {alert("初始化动态地图失败！");}});

    ARCGISCONFIG.DLTB_Dinamic = TB_DLTBPHYSICS.dyPojo.serviceaddr;//覆盖配置文件中的当前服务地址
    ARCGISCONFIG.DLTB_FEATURE = TB_DLTBPHYSICS.fuPojo.serviceaddr;

}
function QueryClass()//查询类
{
    this.getLayerData = getLayerData;//获取图层所有属性
    this.getLastUpdatephysicstableService = getLastUpdatephysicstableService;//获取最后一次更新的服务版本（根据类型和物理表名）(0动态地图，1要素，2影像)
    this.getAllPhysicsServiceVersion = getAllPhysicsServiceVersion;//获取所有更新版本的服务版本（根据类型和物理表名）(0动态地图，1要素，2影像)
    this.getPhysicsServiceByUpdatetime = getPhysicsServiceByUpdatetime;//根据更新时间取得某服务（根据类型和物理表名）(0动态地图，1要素，2影像)

}

function getLayerData(jsonObj)//获取图层类
{
    var value ;

    $.ajax({url:GEOSERVER.IP + GEOSERVER.PORT + '/getLayerData', type: 'POST',async:false, data:{"jsonTree":JSON.stringify(jsonObj)}, xhrFields:{withCredentials:true}, success:function(result)
    {
        value = result;
    }});

    return value;
}

function getLastUpdatephysicstableService(type, physicstable)
{
    var aResult;
    $.ajax({url:config.ip + config.port + '/getLastUpdatephysicstableService', type: 'POST', data:{type:type,physicstable:physicstable }, xhrFields:{withCredentials:true},async: false, success:function(result) {//最后一次更新的地类图斑动态地图服务type（0动态地图，1要素，2影像）
        aResult =  result;
    }, error:function() {}});
    return aResult;
}

function getAllPhysicsServiceVersion(type, physicstable)
{
    var aResult;
    $.ajax({url:config.ip + config.port + '/getAllPhysicsServiceVersion', type: 'POST', data:{type:type,physicstable:physicstable }, xhrFields:{withCredentials:true},async: false, success:function(result) {//最后一次更新的地类图斑动态地图服务type（0动态地图，1要素，2影像）
        aResult =  result;
    }, error:function() {}});
    return aResult;
}

function getPhysicsServiceByUpdatetime(type, physicstable,updatetime)
{
    var aResult;
    $.ajax({url:config.ip + config.port + '/getPhysicsServiceByUpdatetime', type: 'POST', data:{type:type,physicstable:physicstable,updatetime:updatetime }, xhrFields:{withCredentials:true},async: false, success:function(result) {//最后一次更新的地类图斑动态地图服务type（0动态地图，1要素，2影像）
        aResult =  result;
    }, error:function() {}});
    return aResult;
}
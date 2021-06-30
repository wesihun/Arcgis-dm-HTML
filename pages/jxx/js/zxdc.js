var zhanghu1;
var user;
var dep;
var depid;
var resourceid;
var num_b;
var str;
var legendData = new Array();
var seriesData1 = [];
var num;
var PHYSICSTABLE_POJO={dyResult:null,fuResult:null};//从某个物理专项表取得的对象，在时间框选择版本时候也将选中的数据赋值给次全局变量
var CURRENTSELECTMENUE = null;

$(document).ready(function(){
    dengluLocation();
    huoquName();
    $("#inf-namenow-time").html(newTime());
    $("#time1").html(newTime());
    tiaozhuan();
    tuichudenglu();
    $("#login").click(function(){
        PDclick();
      });
    $("#time1").html(newTime());
    //形成tree菜单
    $.ajax({
        url:config.ip + config.port + '/getSpecialMenue',
        type: 'POST',
        async: false,
        xhrFields:{withCredentials:true},
        success:function(data){
            tree1(data,"#browser");
            $("#browser").treeview();
        }
    });
    //形成更新tree菜单
    $.ajax({
        url:config.ip + config.port + '/getSpecialMenueUpdate',
        type: 'POST',
        async: false,
        xhrFields:{withCredentials:true},
        success:function(data){
            tree2(data,"#browserone");
            $("#browserone").treeview();
        }
    });
    
    //滑块移动事件
    huakuaiMove(".dcd1");
    //点击变色事件
    caidanChangeColor(".dcd");
    var clicktime_2 = (className,timeObj)=>{
        $('.'+className).click(function(){
            PHYSICSTABLE_POJO.fuResult = timeObj
            console.log(PHYSICSTABLE_POJO.fuResult)
            $('.'+className).css("color","blue");
            var value1 = document.getElementsByClassName("time-text");//获取值
            value1[0].innerHTML=className
            $(".cc2").css("display","none");
    
            // new ChangeVersionClass().getCurrentDynamycLayerByFutureLayer();
    
        });
    };
   //时间版本选择
    var tablephysicsdata = []
    
    $(".time-text").click(function(){
        // console.log(tablephysicsdata)
      var display = $(".cc2").css("display");
      if(display == "none"){
        $(".cc2").children().remove();
        tablephysicsdata.forEach(e => {
          a = e.title
          $(".cc2").append(`<ul><li class="${a}" type="${a}" style="padding:10px" id="sendtimeid"><img src="./img/timeicon.png"/>&nbsp;${a}</li></ul>`);
          var timeObj = e
          clicktime_2(a,timeObj)
        })
   
        $(".cc2").css("display","inline-block");
        }else{
        $(".cc2").css("display","none");
       };
     });
      //点击获取id
    $('.dcd,.dcd1').bind('click',function(){
        $(".cc2").css("display","none");
        var data = JSON.parse($(this).attr('cd'));

        if(data.physicstable != null && data.physicstable!=""){//从某个物理表中选择最后一次的版本

            if(null==CURRENTSELECTMENUE || CURRENTSELECTMENUE != data.menuename){//判断是否每次点击的是同一个菜单（只有不同菜单才会去读取所有版本）
                var tablephysicstable = new QueryClass().getAllPhysicsServiceVersion(1,data.physicstable)
                PHYSICSTABLE_POJO.fuResult = tablephysicstable[tablephysicstable.length-1]
                tablephysicsdata = tablephysicstable
                var lastValue = PHYSICSTABLE_POJO.fuResult.updatetime.slice(0,11)
                $(".time-text").html(PHYSICSTABLE_POJO.fuResult.title);

                CURRENTSELECTMENUE = data.menuename;
            }



            var aResult = new QueryClass().getPhysicsServiceByUpdatetime(0, data.physicstable,PHYSICSTABLE_POJO.fuResult.updatetime.slice(0,10));//根据选中的版本时间取得对应的动态地图服务

            PHYSICSTABLE_POJO.dyResult = aResult;

            data.serverpath = PHYSICSTABLE_POJO.dyResult.serviceaddr;
            data.tablename = PHYSICSTABLE_POJO.fuResult.tablename;

        }




        ESRIPOJO.addDynamicLayer(data);//添加图层
        GEOQUERYCLASS.setServerPath(data);//设置地理查询类
        GEOQUERYCLASS.clearGraphics(MAP);

        if(data.serverpath==null || data.subSpecialMenue.length!=0){ $('#table').css('display','none');$('.zhu321,.bing321').css('display','none'); return;}
        var number = new QueryClass().getLayerData(data);
        var xx = number.result;
        //table添加数据
        num = 0;
        legendData.splice(0);
        seriesData1.splice(0);
        num_b = 0;
        $('#tudi tbody').children().remove();
        str='';
        $('#zongtiaoshu').html(xx.length);
        $('#yixuanze').html(0);
        for(var i=0,len = xx.length;i<len;i++){
            if(data.type == 'polyline'){
                $('#tb-gb,#tb-dk,.bing321,.zhu321').css('display','none');
                if(xx[i].name == null||xx[i].name ==undefined||xx[i].name ==""){
                    xx[i].name = '无';
                };
                if(xx[i].bsm == null||xx[i].bsm ==undefined||xx[i].bsm ==""){
                    xx[i].bsm = '无';
                };
                if(xx[i].area == null||xx[i].area ==undefined||xx[i].area ==""){
                    xx[i].area = 0;
                };
                num_b = num_b + Number(xx[i].area);
                str+=`<tr>
                <td><input type="checkbox" name="tudi" class="quanxuan" area='${xx[i].area}' name_tudi='${xx[i].name}' bsm_tudi='${xx[i].bsm}'/></td>
                <td title='${xx[i].bsm}'><div class='num-width'>${xx[i].bsm}</div></td>
                <td title='${xx[i].name}'><div class='text-width'>${xx[i].name}</div></td>
                </tr>`;
                $('#table').css('display','inline-block');//打开
            }else{
                $('#tb-gb,#tb-dk').css('display','inline-block');
            if(xx[i].name == null||xx[i].name ==undefined||xx[i].name ==""){
                xx[i].name = '无';
            };
            if(xx[i].bsm == null||xx[i].bsm ==undefined||xx[i].bsm ==""){
                xx[i].bsm = '无';
            };
            if(xx[i].area == null||xx[i].area ==undefined||xx[i].area ==""){
                xx[i].area = 0;
            };
            num_b = num_b + Number(xx[i].area);
            str+=`<tr>
            <td><input type="checkbox" name="tudi" class="quanxuan" area='${xx[i].area}' name_tudi='${xx[i].name}' bsm_tudi='${xx[i].bsm}'/></td>
            <td title='${xx[i].bsm}'><div class='num-width'>${xx[i].bsm}</div></td>
            <td title='${xx[i].name}'><div class='text-width'>${xx[i].name}</div></td>
            </tr>`;
            $('#table').css('display','inline-block');//打开
            };
        };
        $('#tudi tbody').append(str);  
        //搜索
        $('#search_button').unbind('click').bind('click',function(){
          num = 0;
          legendData.splice(0);
          seriesData1.splice(0);
        //   num_b = 0;
          var sousuoleibie = $('#sousuoleibie').val();
          var search_text = $('#search_text').val();
          var n= 0;
          if(sousuoleibie == '标识码'){
           $('#tudi tbody').children().remove();
           for(var i=0,len=xx.length;i<len;i++){
               if(xx[i].bsm.indexOf(search_text)>=0){
                   n++;
                if(xx[i].name == null||xx[i].name ==undefined||xx[i].name ==""){
                    xx[i].name = '无';
                };
                if(xx[i].bsm == null||xx[i].bsm ==undefined||xx[i].bsm ==""){
                    xx[i].bsm = '无';
                };
                if(xx[i].area == null||xx[i].area ==undefined||xx[i].area ==""){
                    xx[i].area = 0;
                };
                $('#tudi tbody').append(`<tr>
                <td><input type="checkbox" name="tudi" class="quanxuan" area='${xx[i].area}' name_tudi='${xx[i].name}' bsm_tudi='${xx[i].bsm}'/></td>
                <td title='${xx[i].bsm}'><div class='num-width'>${xx[i].bsm}</div></td>
                <td title='${xx[i].name}'><div class='text-width'>${xx[i].name}</div></td>
                </tr>`); 
               }else{

               }
           };
          }else if(sousuoleibie == '名称'){
            $('#tudi tbody').children().remove();
            for(var i=0;i<xx.length;i++){
                if(xx[i].name.indexOf(search_text)>=0){
                    n++;
                 if(xx[i].name == null||xx[i].name ==undefined||xx[i].name ==""){
                     xx[i].name = '无';
                 };
                 if(xx[i].bsm == null||xx[i].bsm ==undefined||xx[i].bsm ==""){
                     xx[i].bsm = '无';
                 };
                 $('#tudi tbody').append(`<tr bsm='${xx[i].bsm}' name='${xx[i].name}'>
                 <td><input type="checkbox" name="tudi" class="quanxuan" area='${xx[i].area}' name_tudi='${xx[i].name}' bsm_tudi='${xx[i].bsm}'/></td>
                 <td title='${xx[i].bsm}'><div class='num-width'>${xx[i].bsm}</div></td>
                 <td title='${xx[i].name}'><div class='text-width'>${xx[i].name}</div></td>
                 </tr>`); 
                }else{
                   
                }
            };  
          }else{
              $('#tudi tbody').children().remove();
              alert('无结果,请选择查询项');
          };
        $('#zongtiaoshu').html(n);
        changeecharts(num_b);
        });
        //改变echarts
        changeecharts(num_b);
    });
    //查询菜单
    function queryCdo(queryInput,queryButton,tree1Id,tree2Id){
    $(`${queryButton}`).click(function(){
        $(`${tree1Id}`).children().remove();
        //形成tree1菜单
        $.ajax({
        url:config.ip + config.port + '/getSpecialMenue',
        type: 'POST',
        async: false,
        xhrFields:{withCredentials:true},
        success:function(data){
            tree1(data,"#browser");
            $("#browser").treeview();
        }
        });
        $(`${tree2Id}`).children().remove();
        //形成更新tree菜单
        $.ajax({
        url:config.ip + config.port + '/getSpecialMenueUpdate',
        type: 'POST',
        async: false,
        xhrFields:{withCredentials:true},
        success:function(data){
            tree2(data,"#browserone");
            $("#browserone").treeview();
        }
        });
        var fone = $(`${queryInput}`).val();
        var sfqx = $(".file,.folder");
        huakuaiMove(".dcd1");
        caidanChangeColor(".dcd");
        //点击获取id
        $('.dcd,.dcd1').bind('click',function(){
            var data = JSON.parse($(this).attr('cd'));
        ESRIPOJO.addDynamicLayer(data);//添加图层
        GEOQUERYCLASS.setServerPath(data);//设置地理查询类

        if(data.serverpath==null || data.subSpecialMenue.length!=0){ $('#table').css('display','none');$('.zhu321,.bing321').css('display','none'); return;}
        var number = new QueryClass().getLayerData(data);
        var xx = number.result;
        //table添加数据
        num = 0;
        legendData.splice(0);
        seriesData1.splice(0);
        num_b = 0;
        $('#tudi tbody').children().remove();
        str='';
        $('#zongtiaoshu').html(xx.length);
        $('#yixuanze').html(0);
        for(var i=0,len = xx.length;i<len;i++){
            if(data.type == 'polyline'){
                $('#tb-gb,#tb-dk,.bing321,.zhu321').css('display','none');
                if(xx[i].name == null||xx[i].name ==undefined||xx[i].name ==""){
                    xx[i].name = '无';
                };
                if(xx[i].bsm == null||xx[i].bsm ==undefined||xx[i].bsm ==""){
                    xx[i].bsm = '无';
                };
                if(xx[i].area == null||xx[i].area ==undefined||xx[i].area ==""){
                    xx[i].area = 0;
                };
                num_b = num_b + Number(xx[i].area);
                str+=`<tr>
                <td><input type="checkbox" name="tudi" class="quanxuan" area='${xx[i].area}' name_tudi='${xx[i].name}' bsm_tudi='${xx[i].bsm}'/></td>
                <td title='${xx[i].bsm}'><div class='num-width'>${xx[i].bsm}</div></td>
                <td title='${xx[i].name}'><div class='text-width'>${xx[i].name}</div></td>
                </tr>`;
                $('#table').css('display','inline-block');//打开
            }else{
                $('#tb-gb,#tb-dk').css('display','inline-block');
            if(xx[i].name == null||xx[i].name ==undefined||xx[i].name ==""){
                xx[i].name = '无';
            };
            if(xx[i].bsm == null||xx[i].bsm ==undefined||xx[i].bsm ==""){
                xx[i].bsm = '无';
            };
            if(xx[i].area == null||xx[i].area ==undefined||xx[i].area ==""){
                xx[i].area = 0;
            };
            num_b = num_b + Number(xx[i].area);
            str+=`<tr>
            <td><input type="checkbox" name="tudi" class="quanxuan" area='${xx[i].area}' name_tudi='${xx[i].name}' bsm_tudi='${xx[i].bsm}'/></td>
            <td title='${xx[i].bsm}'><div class='num-width'>${xx[i].bsm}</div></td>
            <td title='${xx[i].name}'><div class='text-width'>${xx[i].name}</div></td>
            </tr>`;
            $('#table').css('display','inline-block');//打开
            };
        };
        $('#tudi tbody').append(str);  
        //搜索
        $('#search_button').unbind('click').bind('click',function(){
          num = 0;
          legendData.splice(0);
          seriesData1.splice(0);
        //   num_b = 0;
          var sousuoleibie = $('#sousuoleibie').val();
          var search_text = $('#search_text').val();
          var n= 0;
          if(sousuoleibie == '标识码'){
           $('#tudi tbody').children().remove();
           for(var i=0,len=xx.length;i<len;i++){
               if(xx[i].bsm.indexOf(search_text)>=0){
                   n++;
                if(xx[i].name == null||xx[i].name ==undefined||xx[i].name ==""){
                    xx[i].name = '无';
                };
                if(xx[i].bsm == null||xx[i].bsm ==undefined||xx[i].bsm ==""){
                    xx[i].bsm = '无';
                };
                if(xx[i].area == null||xx[i].area ==undefined||xx[i].area ==""){
                    xx[i].area = 0;
                };
                $('#tudi tbody').append(`<tr>
                <td><input type="checkbox" name="tudi" class="quanxuan" area='${xx[i].area}' name_tudi='${xx[i].name}' bsm_tudi='${xx[i].bsm}'/></td>
                <td title='${xx[i].bsm}'><div class='num-width'>${xx[i].bsm}</div></td>
                <td title='${xx[i].name}'><div class='text-width'>${xx[i].name}</div></td>
                </tr>`); 
               }else{

               }
           };
          }else if(sousuoleibie == '名称'){
            $('#tudi tbody').children().remove();
            for(var i=0;i<xx.length;i++){
                if(xx[i].name.indexOf(search_text)>=0){
                    n++;
                 if(xx[i].name == null||xx[i].name ==undefined||xx[i].name ==""){
                     xx[i].name = '无';
                 };
                 if(xx[i].bsm == null||xx[i].bsm ==undefined||xx[i].bsm ==""){
                     xx[i].bsm = '无';
                 };
                 $('#tudi tbody').append(`<tr bsm='${xx[i].bsm}' name='${xx[i].name}'>
                 <td><input type="checkbox" name="tudi" class="quanxuan" area='${xx[i].area}' name_tudi='${xx[i].name}' bsm_tudi='${xx[i].bsm}'/></td>
                 <td title='${xx[i].bsm}'><div class='num-width'>${xx[i].bsm}</div></td>
                 <td title='${xx[i].name}'><div class='text-width'>${xx[i].name}</div></td>
                 </tr>`); 
                }else{
                   
                }
            };  
          }else{
              $('#tudi tbody').children().remove();
              alert('无结果,请选择查询项');
          };
        $('#zongtiaoshu').html(n);
        changeecharts(num_b);
        });
        //改变echarts
        changeecharts(num_b);
        });
        var glo = [];
        sfqx.css("color","black");
        if(fone == ""){
            confirm("搜索字符为空，请重新填写");
        }else{
            for(var i=0;i<sfqx.length;i++){
                glo.push(sfqx.eq(i).html());
                var Sumsfqx = sfqx.eq(i).html();
                if(Sumsfqx.indexOf(fone) >= 0){
                   sfqx.eq(i).css("color","red");
                   sfqx.eq(i).parents().siblings(".expandable-hitarea").click(); 
                };
               };
               var a = glo.toString().replace(/\,/g,"");
               if(a.indexOf(fone) < 0){
                   confirm("搜索字符不存在");    
               };
        };
     });
    };
    queryCdo('.ftwo','.stwo','#browser','#browserone');
    //小图标操作按钮
    //放大
    $(".map_12").mousedown(function(ev){
      $(".map_12").removeClass("map30");
      $(".map_12").attr("class","map01_12");
      $(".esriSimpleSliderIncrementButton").click();//地图放大按钮
    });
    $(".map_12").mouseup(function(ev){
       $(".map_12").removeClass("map30");
       $(".map01_12").attr("class","map_12");
    });
    //缩小
    $(".map_14").mousedown(function(ev){
        $(".map_14").removeClass("map30");
        $(".map_14").attr("class","map01_14");
        $(".esriSimpleSliderDecrementButton").click();//地图缩小按钮
     });
     $(".map_14").mouseup(function(ev){
        $(".map_14").removeClass("map30");
        $(".map01_14").attr("class","map_14");
     });
    //鹰眼图
    $(".map_24").click(function(){
        $(".map_24").removeClass("map30"); 
        if($(".map_24").attr("class") == "map_24"){
           $(".yingyan1").css("display","inline-block");
            $(".map_24").attr("class","map01_24");

            //TOOLSCLASS.myOverviewMap();
            IMAGECLASS.addImageLayer();
        }else{
            $(".map01_24").attr("class","map_24");
            $(".yingyan1").css("display","none");
           
        };
    });
    //指南针
    $(".map_26").click(function(){
        $(".map_26").removeClass("map30");
        if($(".map_26").attr("class") == "map_26"){
            $(".south1").css("display","inline-block");
            $(".map_26").attr("class","map01_26");
        }else{
            $(".map01_26").attr("class","map_26");
            $(".south1").css("display","none");
        };
    });
    //比例尺
    $(".map_28").click(function(){
        $(".map_28").removeClass("map30");
        if($(".map_28").attr("class") == "map_28"){
            $(".bili-ruler1").css("display","inline-block");
            $(".map_28").attr("class","map01_28");

            TOOLSCLASS.myScalebar();
        }else{
            $(".map01_28").attr("class","map_28");
            $(".bili-ruler1").css("display","none");
        };
    });
    //绘制地块
    $(".map_37").click(function(){
        $(".map_37").removeClass("map30");
        if($(".map_37").attr("class") == "map_37"){
            $('#huizhi').css('display','inline-block');
            $(".map_37").attr("class","map01_37");
 
           
        }else{
            $('#huizhi').css('display','none');
            $(".map01_37").attr("class","map_37");
            
        };
    });
    //分屏
    $(".map_39").click(function(){
        $(".map_39").removeClass("map30");
        if($(".map_39").attr("class") == "map_39"){
            $(".map_39").attr("class","map01_39");
            $('.jtwo').css('width',"50%");
            $('#fp').css('display','inline-block');
        }else{
            $(".map01_39").attr("class","map_39");
            $('.jtwo').css('width',"");
            $('#fp').css('display','none');
        };
    });
 //改变编辑地块按钮
$("#yc").mousedown(function(ev){ //移除地块
  $("#yc").removeClass("map30");
  $("#yc").attr("src","./img/移除图像1.png");
});
$("#yc").mouseup(function(ev){
  $("#yc").removeClass("map30");
  $("#yc").attr("src","./img/移除图像.png");
});
$("#bj").click(function(){  //编辑地块
  $("#bj").removeClass("map30");
  if($("#bj").attr("src") == "./img/编辑.png"){
      $("#bj").attr("src","./img/编辑1.png");
      
  }else{
      $("#bj").attr("src","./img/编辑.png");
  
  };
});
$("#sf").click(function(){  //缩放地块
  $("#sf").removeClass("map30");
  if($("#sf").attr("src") == "./img/缩放地块.png"){
      $("#sf").attr("src","./img/缩放地块1.png");
      
  }else{
      $("#sf").attr("src","./img/缩放地块.png");
     
  };
});
$("#xz123").click(function(){  //旋转地块
  $("#xz123").removeClass("map30");
  if($("#xz123").attr("src") == "./img/旋转地块.png"){
      $("#xz123").attr("src","./img/旋转地块1.png");

  }else{
      $("#xz123").attr("src","./img/旋转地块.png");
   
  };
});
$("#jlcl").click(function(){  //测量距离
  $("#jlcl").removeClass("map30");
  if($("#jlcl").attr("src") == "./img/测量.png"){
      $("#jlcl").attr("src","./img/测量1.png");
  }else{    
      $("#jlcl").attr("src","./img/测量.png");
    
  };
});
//打开搜索
$('#select').bind('click',function(){
  $('#sousuo').css('display','inline-block');
});
//关闭搜索
$('#gb-select').bind('click',function(){
  $('#sousuo').css('display','none');
});
//关闭图表
$('#tb-gb').bind('click',function(){
  $('.bing321,.zhu321').css('display','none');
});
//打开图表
$('#tb-dk').bind('click',function(){
    $('.bing321,.zhu321').css('display','inline-block');
});
//关闭表格
$('#gb-table').bind('click',function(){
    $('#table').css('display','none');
    $('.bing321').css('display','none');
    $('.zhu321').css('display','none');
});
});
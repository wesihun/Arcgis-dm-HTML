var right = {id:0, subAdministrations:null, name: "杜蒙", parentId: 0, treeCode: "000000"};
var left = "";
var zhanghu1;
var arry=0;
var brry=0;


$(document).ready(function(){
    dengluLocation();
    huoquName();
    $("#inf-namenow-time").html(newTime());
    tiaozhuan();
    tuichudenglu(); 
    $("#login").click(function(){
      PDclick();
    });
    $("#time1").html(newTime());
    // $.ajax({
    //     url:config.ip + config.port + '/getMenue',
    //     type: 'POST',
    //     async: false,
    //     xhrFields:{withCredentials:true},
    //     success:function(data){
    //            //形成树菜单
    //            tree(data,".qone");
    //            $("#browser").treeview();
    //             //滑块移动事件
    //            huakuaiMove(".dcd1");
    //             //点击变色事件
    //            caidanChangeColor(".dcd");
    //             //点击查询
    //            queryCd(".fone",".sone","#browser",data);
    //             //点击tree 获取id
    //            clicktreeById();
    //     }
    // });
    $("#gb-p1").click(function(){
      $(".theone").css("display","none");
    });
$("#gb-bing").click(function(){
  arry = 0;
  $(".bing").css("display","none");
  arry = 1
  if(brry==1){
    $(".map01_35").attr("class","map_35");
    brry = 0;
    arry = 0;
  };
});
$("#gb-zhu").click(function(){
  brry = 0;
  $(".zhu").css("display","none");
  brry = 1;
  if(arry==1){
    $(".map01_35").attr("class","map_35");
    arry=0;
    brry = 0;
  };
});
  document.getElementById("isnshow").style.display="none";
  document.getElementById("isnshow1").style.display="none";
  document.getElementById("search").style.display="none";
  document.getElementById("searchmain").style.display="none";
  document.getElementById("searchmain1").style.display="none";
$("#isshow1").click(function(){ //选中，圈地类
  document.getElementById("isshow1").style.display="none";
  document.getElementById("isnshow1").style.display="inline-block";
  // document.getElementById("searchmain1").style.display="block";
    drawPolygonToWrite(globalQueryClass.Draw,globalQueryClass.map,globalQueryClass.SimpleLineSymbol,globalQueryClass.SimpleFillSymbol,globalQueryClass.Color,globalQueryClass.Graphic,globalQueryClass.on,globalQueryClass.Point,globalQueryClass.TextSymbol,globalQueryClass.Font,globalQueryClass.graphicsLayer,globalQueryClass.Query, globalQueryClass.FeatureLayer);//圈地类,画面图形

})
$("#isnshow1").click(function(){ //反选，圈地类
  document.getElementById("isnshow1").style.display="none";
  document.getElementById("isshow1").style.display="inline-block";
  document.getElementById("searchmain1").style.display="none";
    removeGraphics(globalQueryClass.map, DRAWGRAPHICS);//移除画好的几何图形
    removeToolbarDrao();//取消画图工具
})
$("#isshow").click(function(){
  document.getElementById("isshow").style.display="none";
  document.getElementById("isnshow").style.display="inline-block";
  document.getElementById("search").style.display="block";
  // document.getElementById("searchmain").style.display="block";
})

$("#isnshow").click(function(){
  document.getElementById("isnshow").style.display="none";
  document.getElementById("isshow").style.display="inline-block";
  document.getElementById("search").style.display="none";
  document.getElementById("searchmain").style.display="none";
})
$("#instable").click(function(){
  document.getElementById("searchmain").style.display="none";
})
$("#instable1").click(function(){
  document.getElementById("searchmain1").style.display="none";
})
$("#suresearch").click(function(){
  document.getElementById("searchmain").style.display="block";
  // brry = 0;
  // $(".zhu").css("display","none");
  // brry = 1;
  // if(arry==1){
  //   $(".map01_35").attr("class","map_35");
  //   arry=0;
  //   brry = 0;
  // };
  $('#tab').empty()
  var x=  document.getElementById("inputs")
  $.ajax({
    url:GEOSERVER.IP + GEOSERVER.PORT + '/get_dltb_by_qsdwmc?qsdwmc='+x.value+'&tablename='+TB_DLTBPHYSICS.fuPojo.tablename+'',
    type: 'POST',
    async: false,
    xhrFields:{withCredentials:true},
    success:function(data){
      console.log(data.length)
      if(data.length>0){
          queryDltbByObjectID(data);//权属查询，结果在地图高亮显示，2021年4月16日需求

        var xh = 0;
        for(var i = 0; i < data.length; i++) {
          console.log('jjj')
          xh++;
          if(!data[i].czcsxm){
            data[i].czcsxm = '';
          }
          $("#tab").append("<tr> style=height: 40px;"
            +'<td style="width: 132px;height: 40px;color: #333;">'+data[i].objectid+'</td>'
            +'<td style="width: 132px;height: 40px;color: #333;">'+data[i].bsm+'</td>'
            +'<td style="width: 132px;height: 40px;color: #333;">'+data[i].ysdm+'</td>'
            +'<td style="width: 132px;height: 40px;color: #333;">'+data[i].dlbm+'</td>'
            +'<td style="width: 132px;height: 40px;color: #333;">'+data[i].qsdwdm+'</td>'
            +'<td style="width: 132px;height: 40px;color: #333;">'+data[i].qsdwmc+'</td>'
            +'<td style="width: 132px;height: 40px;color: #333;">'+data[i].tbmj+'</td>'
            +'<td style="width: 132px;height: 40px;color: #333;">'+data[i].czcsxm+'</td>'
          +"</tr>");         
      };  
      }else{
        $("#tab").innerHtml='无数据'
      }
    }
  })
  // console.log()

});



//   var xh = 0;
//   for(var i = 0; i < arrList.length; i++) {
//     console.log('jjj')
//     xh++;
//     if(!arrList[i].czcsxm){
//       arrList[i].czcsxm = '';
//     }
//     $("#tab1").append("<tr> style=height: 40px;"
//       +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].objectid+'</td>'
//       +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].bsm+'</td>'
//       +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].ysdm+'</td>'
//       +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].dlbm+'</td>'
//       +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].qsdwdm+'</td>'
//       +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].qsdwmc+'</td>'
//       +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].tbmj+'</td>'
//       +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].czcsxm+'</td>'
//     +"</tr>");         
//   };  
//   }else{
//     $("#tab").innerHtml='无数据'
//   }
  
// }
// changList(arrList)
tishi();
$.ajax({
  url:config.ip + config.port + '/getAllDLTBServiceVersion?type=1',
  type: 'POST',
  async: false,
  // xhrFields:{withCredentials:true},
  success:function(data){
    console.log(data)
    $.ajax({
      url:config.ip + config.port + '/getMenue?version='+data[data.length-1].version+'',
      type: 'POST',
      async: false,
      xhrFields:{withCredentials:true},
      success:function(data){
             //形成树菜单
             tree(data,".qone");
             $("#browser").treeview();
              //滑块移动事件
             huakuaiMove(".dcd1");
              //点击变色事件
             caidanChangeColor(".dcd");
              //点击查询
             queryCd(".fone",".sone","#browser",data);
              //点击tree 获取id
             clicktreeById(data[data.length-1].version);
      }
  });
    TB_DLTBPHYSICS.fuPojo = data[data.length-1]
    // console.log(TB_DLTBPHYSICS.fuPojo)\
    var a = '<span style="background:#fff;color:#fff;letter-spacing:3px;border-radius:2px;">'+data[data.length-1].version+'</span>'
    var b ='<span style="background:#fff;color:#fff;letter-spacing:3px;border-radius:2px;">'+data[data.length-1].version+'</span>'
        if(data[data.length-1].version=='三调'){
          var lastValue = data[data.length-1].title + b
          $(".time-text").html(lastValue);
            // value1[0].innerHTML=className + b
        } else {
          var lastValue1 = data[data.length-1].title + a
          $(".time-text").html(lastValue1);
        }
    
   
    $(".time-text").click(function(){

      var display = $(".cc2").css("display");
      if(display == "none"){
        $(".cc2").children().remove();
        var data1=[{id: 0, serviceaddr: null, databasename: null, tablename: null, type: 0,updatetime: "2020-09-09 00:00:00"},
        {id: 0, serviceaddr: null, databasename: null, tablename: null, type: 0,updatetime: "2020-11-09 00:00:00"}
          ]
        data.forEach(e => {
          a = e.title
          $(".cc2").append(`<ul><li class="${a}" type="${a}" style="padding:5px" id="sendtimeid"><img src="./img/timeicon.png"/>&nbsp;${a} <span style="background:${e.version=='三调'?'#fff':'#fff'};color:#fff;letter-spacing:3px;border-radius:2px;">${e.version}</span></li></ul>`);
          var timeObj = e
          clicktime(a,timeObj)
        })
   

        // document.getElementsByClassName("#jxx2").innerHTML = arr
        // console.log(document.getElementsByClassName(".filetree treeview-famfamfam cc2").innerHTML = arr)
        // bianlitime(data,"#jxx2");
        // $(".cc2").treeview();
        // caidanChangeColor(".cd,.cd1");
        // $(".cd1, .cd").click(function(){
        // var name = $(this).html();
        // var id = JSON.parse($(this).attr("menueid"));
        // right = id;
        // $(".xz").html("&nbsp;" + name);
        // if($(this).attr("class") == "file cd"){
        //    $(".cc2").css("display","none");
        // };

          //左侧树，行政区导航


        // });
        $(".cc2").css("display","inline-block");
        }else{
        $(".cc2").css("display","none");
       };
     });
  }
})
$.ajax({
    url:config.ip + config.port + '/getAdministration',
    type: 'POST',
    async: false,
    xhrFields:{withCredentials:true},
    success:function(data){
      $(".xz").click(function(){
        var display = $(".cc1").css("display");
        if(display == "none"){
          $(".cc1").children().remove();
          $(".cc1").append(`<ul><li class="closed" id="jxx2"><span class="folder cd1" id="jxx1" menueid='{"id":0, "subAdministrations":null, "name": "杜蒙", "parentId": 0, "treeCode": "000000"}'>杜蒙</span></li></ul>`);
          bianliDF(data,"#jxx2");
          $(".cc1").treeview();
          caidanChangeColor(".cd,.cd1");
          $(".cd1, .cd").click(function(){
          var name = $(this).html();
          var id = JSON.parse($(this).attr("menueid"));
          right = id;
          $(".xz").html("&nbsp;" + name);
          if($(this).attr("class") == "file cd"){
             $(".cc1").css("display","none");
          };

            xzqExtent(id);//左侧树，行政区导航


          });
          $(".cc1").css("display","inline-block");
          }else{
          $(".cc1").css("display","none");
         };
       });
       $(function gbright(){
        $(".xz,.cc1").click(function(event){
            event.stopPropagation();
        });
        $(document).click(function(){
            $(".cc1").css("display","none");
        });
    });
    }
});
$("#gb-quanbu-bing").click(function(){
  $(".quanbu-bing").css("display","none");
});
$("#gb-quanbu-zhu").click(function(){
  $(".quanbu-zhu").css("display","none");
});
//改变编辑地块按钮
$("#yc").mousedown(function(ev){ //移除地块
  $("#yc").removeClass("map30");
  $("#yc").attr("src","./img/移除图像1.png");
    removeGraphics(globalQueryClass.map, DRAWGRAPHICS);//移除画好的几何图形
});
$("#yc").mouseup(function(ev){
  $("#yc").removeClass("map30");
  $("#yc").attr("src","./img/移除图像.png");
});
$("#bj").click(function(){  //编辑地块
  $("#bj").removeClass("map30");
  if($("#bj").attr("src") == "./img/编辑.png"){
      $("#bj").attr("src","./img/编辑1.png");
      editPolygon(DRAWGRAPHICS,globalQueryClass.map,globalQueryClass.Edit,globalQueryClass.Point,globalQueryClass.TextSymbol,globalQueryClass.Font,globalQueryClass.Color,globalQueryClass.Graphic,globalQueryClass.graphicsLayer);//编辑地图
  }else{
      $("#bj").attr("src","./img/编辑.png");
      removeEditToolbar();//取消地图编辑
  };
});
$("#sf").click(function(){  //缩放地块
  $("#sf").removeClass("map30");
  if($("#sf").attr("src") == "./img/缩放地块.png"){
      $("#sf").attr("src","./img/缩放地块1.png");
      
      changeSizeGraphics(DRAWGRAPHICS,globalQueryClass.Edit);//缩放图形
  }else{
      $("#sf").attr("src","./img/缩放地块.png");
      removeEditToolbar();//取消地图缩放
  };
});
$("#xz123").click(function(){  //旋转地块
  $("#xz123").removeClass("map30");
  if($("#xz123").attr("src") == "./img/旋转地块.png"){
      $("#xz123").attr("src","./img/旋转地块1.png");
      rotateGraphic(DRAWGRAPHICS, globalQueryClass.Edit);//旋转图形
  }else{
      $("#xz123").attr("src","./img/旋转地块.png");
      removeEditToolbar();//取消地图缩放
  };
});
$("#jlcl").click(function(){  //测量距离
  $("#jlcl").removeClass("map30");
  if($("#jlcl").attr("src") == "./img/测量.png"){
      $("#jlcl").attr("src","./img/测量1.png");
      drawPolyline(globalQueryClass.Draw,globalQueryClass.map,globalQueryClass.SimpleLineSymbol,globalQueryClass.SimpleFillSymbol,globalQueryClass.Color,globalQueryClass.Graphic,globalQueryClass.on,globalQueryClass.Point,globalQueryClass.TextSymbol,globalQueryClass.Font,globalQueryClass.graphicsLayer);//画线图形
  }else{
      $("#jlcl").attr("src","./img/测量.png");
      removeToolbarDrao();
  };
});
});

function changList(arrList){
    $('#tab1').empty()
    // var arrList = []
    document.getElementById("searchmain1").style.display="block";
    if(arrList.length>0){
        var xh = 0;
        for(var i = 0; i < arrList.length; i++) {
            console.log('jjj')
            xh++;
            if(!arrList[i].czcsxm){
                arrList[i].czcsxm = '';
            }
            $("#tab1").append("<tr> style=height: 40px;"
                +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].objectid+'</td>'
                +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].bsm+'</td>'
                +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].ysdm+'</td>'
                +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].dlbm+'</td>'
                +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].qsdwdm+'</td>'
                +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].qsdwmc+'</td>'
                +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].tbmj+'</td>'
                +'<td style="width: 132px;height: 40px;color: #333;">'+arrList[i].czcsxm+'</td>'
                +"</tr>");
        };
    }else{
        $("#tab").innerHtml='无数据'
    }
}
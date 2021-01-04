$(function(){
  $(".mainmenu > li").mouseenter(function(){
    $(".submenuwrap").addClass("active");
    var dataNum = $(this).index();
    var indexNum = dataNum + 1;
    $("#no"+indexNum+"").css("background","#f58220");
    $(this).mouseleave(function(){
      $("#no"+indexNum+"").css("background","#f58b25");
    });
    $("#no"+indexNum+" > li, #no"+indexNum+" > li > a").mouseenter(function(){
      $("#no"+indexNum+"").css("background","#f58220");
    }).mouseleave(function(){
      $("#no"+indexNum+"").css("background","#f58b25");
    });
  })
  $(".submenu").mouseleave(function(){
    $(".submenuwrap").removeClass("active");

  });
});

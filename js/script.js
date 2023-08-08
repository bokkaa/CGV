


//header부분 높이 초과시 fixed 메뉴바 등장
$(document).ready(function(){
  var headerHeight = $(".header").height(); 

  $("#head").hide();
  $(window).scroll(function(){  
      var fixedMenuShow = $(this).scrollTop() >= headerHeight; 

  if(fixedMenuShow){ 
          $("#head").show();
      }
      else{
          $("#head").hide();
      }
  });
  
});



//메인메뉴 풀다운(Fixed메뉴)
$(function () {
  var hh = $("#head").height();
  var ih = $(".subMenu").innerHeight();
  var maxHeight = hh + ih;

  $(".subMenu").hide();

  $(".mainMenu").mouseenter(function () {
    $("#head")
      .stop()
      .animate({ height: maxHeight }, 100, "linear", function () {
        $(".subMenu").fadeIn();
      });
  });

  $("#head").mouseleave(function () {
    $("#head")
      .stop()
      .animate({ height: hh }, 300, "linear", function () {
        $(".subMenu").hide();
      });
  });

 
});

//메인메뉴 가로스크롤 기능
$(window).scroll(function () {
  $("#head").css("left", 0 - $(this).scrollLeft());
});



//메인메뉴 풀다운(absolute메뉴)
$(function () {
  var hh = $("#topHead").height();
  var ih = $(".subMenu2").innerHeight();
  var maxHeight = hh + ih;

  $(".subMenu2").hide();

  $(".mainMenu2").mouseenter(function () {
    $("#topHead")
      .stop()
      .animate({ height: maxHeight }, 200, "linear", function () {
        $(".subMenu2").fadeIn();
      });
  });

  $("#topHead").mouseleave(function () {
    $("#topHead")
      .stop()
      .animate({ height: hh }, 300, "linear", function () {
        $(".subMenu2").hide();
      });
  });

});



//무비차트/상영예정작 탭메뉴
$(".contentWrap").each(function () {
  var tabMenuDiv2 = $(this);
  var menu_a2 = tabMenuDiv2.find("a");
  var panelDiv2 = tabMenuDiv2.find("div.panel");
  panelDiv2.hide();

  var panelOne2;
  var panelShow2;

  panelOne2 = menu_a2.filter(".on");
  panelShow2 = $(panelOne2.attr("href"));
  panelShow2.show();

  menu_a2.click(function (x) {
    var currentA2 = $(this);
    var currentA2_panel = $(currentA2.attr("href"));
    x.preventDefault();

    panelOne2.removeClass("on");
    currentA2.addClass("on");

    panelShow2.hide();
    currentA2_panel.show();

    panelOne2 = currentA2;
    panelShow2 = currentA2_panel;

    currentA2.click(function () {
      currentA2_panel.children("ul").show();
    });
  });
});



//영화차트/상영예정작 마우스오버 이벤트
$(".movieInfo img").mouseenter(function () {
  $(this).css("scale", "1.05"), $(this).css("transform", "translate(0%,-5%");
});

$(".movieInfo img").mouseleave(function () {
  $(this).css("scale", "1.0"), $(this).css("transform", "translate(0,0)");
});









//이벤트 섹션 버튼 이동
$(".right2").click(function () {
  $(".eventContents>li").animate({ left: "-99.5%" }, 300);
});
$(".left2").click(function () {
  $(".eventContents>li").animate({ left: "0%" }, 300);
});







//특별관 탭메뉴
$(".theaterTapWrap").each(function () {
  var tabMenuDiv2 = $(this);
  var menu_a2 = tabMenuDiv2.find("a");
  var panelDiv2 = tabMenuDiv2.find("div.theaterPanel");
  panelDiv2.hide();

  var panelOne2;
  var panelShow2;

  panelOne2 = menu_a2.filter(".oon");
  panelShow2 = $(panelOne2.attr("href"));
  panelShow2.show();

  menu_a2.mouseenter(function (x) {
    var currentA2 = $(this);
    var currentA2_panel = $(currentA2.attr("href"));
    x.preventDefault();

    panelOne2.removeClass("oon");
    currentA2.addClass("oon");

    panelShow2.hide();
    currentA2_panel.show();

    panelOne2 = currentA2;
    panelShow2 = currentA2_panel;

    currentA2.mouseenter(function () {
      currentA2_panel.children("ul").show();
    });
  });
});


//랜덤함수 이용하여 랜덤영상 재생
var r = Math.floor(Math.random()*3 +1);
function random(){

  // console.log(r);


  if(r == 1){
    $('#first').show();
  }else if(r==2){
    $('#second').show();
  }else if(r==3){
    $('#third').show();
  }
}
random();






//배너 나왔다 들어가기
function move() {
  $(".i").each(function () {
    $(".i").animate({ width: "257" }, 200, "linear", function () {
      $(".i").delay(1000).animate({ width: "0" }, 200,)
    });

  });
}setInterval(move, 3000);


//그룹 계열사 페이지 이동
$("#goFamily").on("change", function () {
  var url = $(this).find("option:selected").attr("value");
  window.open(url);
});


//최상단 이동 버튼 
$('.top').click(function(){
  $(window).scrollTop(0,0);
})




//100을 넘어가면 상단이동 버튼 사라짐
$(document).ready(function(){
  $('.top').hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $('.top').fadeIn();
    }else{
      $('.top').fadeOut();

    }
  })
})




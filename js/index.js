        
//pbannder_img
$(document).ready(function() {
    //사용할 배너
    var $banner = $(".banner").find("ul");

    var $bannerWidth = $banner.children().outerWidth();//배너 이미지의 폭
    var $bannerHeight = $banner.children().outerHeight(); // 높이
    var $bannerLength = $banner.children().length;//배너 이미지의 갯수
    var rollingId;

    //정해진 초마다 함수 실행
    rollingId = setInterval(function() { rollingStart(); }, 2000);//다음 이미지로 롤링 애니메이션 할 시간차

    //마우스 오버시 롤링을 멈춘다.
    $banner.mouseover(function(){
        //중지
        clearInterval(rollingId);
        $(this).css("cursor", "pointer");
    });
    //마우스 아웃되면 다시 시작
    $banner.mouseout(function(){
        rollingId = setInterval(function() { rollingStart(); }, 2000);
        $(this).css("cursor", "default");
    });
    
    function rollingStart() {
        //banner.css("width", bannerWidth * bannerLength + "px");
        $banner.css("height", $bannerHeight * $bannerLength + "px");
        //alert(bannerHeight);
        //배너의 좌측 위치를 옮겨 준다.
        $banner.animate({top: - $bannerHeight + "px"}, 1500, function() { //숫자는 롤링 진행되는 시간이다.
            //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
            $(this).find("li:first").remove();
            //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
            $(this).css("top", 0);
            //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
        });
    }
}); 


//banner hide
function bannerHide() {
    document.getElementById('pbanner').style = "display:none;";
    document.getElementByClassName('banner_close').style = "display:none;";
    document.getElementById('header').style = "padding:0;"
}
        


//menu button 
function lnbShow() {
    document.getElementById('ly_pop').style = "display: block;";
    document.getElementById('logo').style = "display:none;";
    document.getElementById('menu_show').style = "display:none;";
    document.getElementById('logo_pop').style = "display:block;";
    document.getElementById('menu_pop_hide').style = "display:block;";
    videoRamChange();

}

function poplnbHide() {
    document.getElementById('ly_pop').style = "display: none;" ;
    document.getElementById('logo').style = "";
    document.getElementById('menu_show').style = "";

}



//(mobile) menu button 
function mLnbShow() {
    document.getElementById('ly_pop').style = "display:none;"
    document.getElementById('menu_show').style = "display:none;";
    document.getElementById('ly_pop_m').style = "display:block;  z-index: 999";
    document.getElementById('menu_show_m').style = " display:none;"
    videoRandomChange();

}


//pop menu close button
function poplnbHide() {
    document.getElementById('ly_pop').style = "display:none;"
    document.getElementById('logo').style = "";
    document.getElementById('menu_show').style = "";
}

//(mobile) pop menu close button
function poplnbHideM() {
    document.getElementById('ly_pop_m').style = "display:none;"
    document.getElementById('menu_show_m').style = "display:block;"
}


// pop menu bg video random
function videoRandomChange(){
    var randomNum = Math.floor(Math.random() * 3); // 랜덤 값 생성 후 자연수로 변경
    console.log(randomNum);
    document.getElementById('ran_m').src="img/index/menu0" + randomNum + ".webm";
}
function videoRamChange(){
    var randomNum = Math.floor(Math.random() * 3); // 랜덤 값 생성 후 자연수로 변경
    console.log(randomNum);
    document.getElementById('ran').src="img/index/menu0" + randomNum + ".webm";
}


// (mobile) scroll logo, pop menu
function scrollState() {
    var test = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(test);

    if (test > 100) {
        document.getElementsByClassName('logo_menu_wrap_m')[0].style = "background: rgba(255,255,255,0.8); position:fixed;z-index:998;"; 

        document.getElementsByClassName('logo_m')[0].style = "position: fixed; top:19px; background-image: url(img/index/img_logo72_b.png); width:72px; height:12px; background-size:72px 12px;" ;
        
        document.getElementById('menu_show_m').style = "position: absolute; top: 1px;  -webkit-filter: drop-shadow(0 0 0 black) invert(100%);";
        
       

    }
    else {
        document.getElementsByClassName('logo_menu_wrap_m')[0].style = "";
        document.getElementsByClassName('logo_m')[0].style="";
        document.getElementById('menu_show_m').style = "position: absolute; top: 1px;  -webkit-filter:none;";
    }
}

// scroll logo, pop menu
function scrollState() {
    var test = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(test);

    if (test > 200) {
        document.getElementById('logo').style = "position: fixed; top:100px; left:100px; z-index:999;";
        document.getElementById('menu_show').style = "position: fixed; top:88px; right:88px; z-index:997; ";
    }
    else {
        document.getElementById('logo').style="";
        document.getElementById('menu_show').style="";

    }

}









function bgvDown(){
    document.getElementById('ly_pop').style = "display:none;"
    document.getElementById('menu_show').style = " display:block;"
    document.getElementById('menu_hide').style = " display:none;"
}




//모바일 footer 아코디온
var footerMore = document.getElementsByClassName('more');
var openStateIcon = document.getElementsByClassName('more_tit_img')
var openState = [0,0]; //list 오픈 상태 저장 배열 변수


function footerOpen(clickNumber) {
  
   
   if (openState[clickNumber] == 0) 
      {
         for(i=0; i<footerMore.length; i++) {
            footerMore[i].style = "max-height:30px;";
            openStateIcon[i].style= "background-image: url(img/index/ico_plus3.png)";
            openState[i] = 0;
         } 
         footerMore[clickNumber].style = "max-height:600px;";
         openStateIcon[clickNumber].style = "background-image: url(img/index/ico_close3.png);";
         openState[clickNumber] = 1; // 클릭된 list의 오픈 상태를 저장
      }
      else {
        footerMore[clickNumber].style = "max-height:30px;";
         openStateIcon[clickNumber].style ="background-image: url(img/index/ico_plus3.png)";
         openState[clickNumber] = 0; // 클릭된 list의 닫힘 상태를 저장 
      }
   
}




















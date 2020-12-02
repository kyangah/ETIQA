var bg = document.querySelector(".div");
// 오른쪽 십자 메뉴 //
function mLnbShow() {
    document.getElementById('ly_pop').style = "display:block;"
    document.getElementById('menu_show').style = " display:none;"
    document.getElementById('menu_hide').style = " display:block;"
    videoRandomChange()
}
function mLnbHide() {
    document.getElementById('ly_pop').style = "display:none;"
    document.getElementById('menu_show').style = " display:block;"
    document.getElementById('menu_hide').style = " display:none;"
}

function scrollState() {
    var test = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(test);

// 스크롤 시 fade in
    if (test >100) {
        document.getElementsByClassName("mv_title_wrap")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("mv_title_wrap")[0].style="";
    }
    if (test >700) {
        document.getElementsByClassName("days280_title_wrap")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("days280_title_wrap")[0].style="";
    }
    if (test >800) {
        document.getElementsByClassName("days280_bg_img")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("days280_bg_img")[0].style="";
    }
    if (test >1700) {
        document.getElementsByClassName("brathing_title_wrap")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("brathing_title_wrap")[0].style="";
    }
    if (test >1900) {
        document.getElementsByClassName("brathing_bg_i5")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("brathing_bg_i5")[0].style="";
    }
    if (test >1700) {
        document.getElementsByClassName("brathing_bg_img")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("brathing_bg_img")[0].style="";
    }
    if (test >3640) {
        document.getElementsByClassName("brathing_title_wrap")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("brathing_title_wrap")[0].style="";
    }
    if (test >3700) {
        document.getElementsByClassName("brathing_bg_i5")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("brathing_bg_i5")[0].style="";
    }
    if (test > 4639) {
        document.getElementsByClassName("technology_wrap")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("technology_wrap")[0].style="";
    }
    if (test > 5644) {
        document.getElementsByClassName("baisic_img")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("baisic_img")[0].style="";
    }
    if (test > 6823) {
        document.getElementsByClassName("philosophy_img")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("philosophy_img")[0].style="";
    }
    if (test > 6830) {
        document.getElementsBy
        ClassName("philosophy_tit_wrap")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("philosophy_tit_wrap")[0].style="";
    }
    if (test > 8000) {
        document.getElementsByClassName("emotion_bg")[0].style="animation:fadeInup 2s forwards 0.3s;";
    }
    else{
        document.getElementsByClassName("emotion_bg")[0].style="";
    }
 // 모바일용 header
    if(test < 150){
    document.getElementById("gnb_m").style="display:none;";}
     else{
    document.getElementById("gnb_m").style="display:none;";
    gnbHide();
    }
}

// gnb menu open 스타일
function gnbShow() {
    document.getElementById('gnb_m').style = "display:block; height:auto;";
    document.querySelector('.nav_menu_button_show h2').style = "display:none;";
 }
function gnbHide() {
    document.getElementById('gnb_m').style = "display:block; height:52px;";
    document.querySelector('.nav_menu_button_show h2').style = "display:block;";

}



//모바일 footer 아코디온
var footerMore = document.getElementsByClassName('more');
var openStateIcon = document.getElementsByClassName('more_tit_img')
var openState = [0,0]; //list 오픈 상태 저장 배열 변수


// var faqList = document.getElementsByClassName('faq_list');
// var openStateIcon = document.getElementsByClassName('openstate_icon')
// var openState = [0,0,0,0,0,0]; //list 오픈 상태 저장 배열 변수


function footerOpen(clickNumber) {
  
   
    if (openState[clickNumber] == 0) 
       {
          for(i=0; i<footerMore.length; i++) {
             footerMore[i].style = "max-height:30px;";
             openStateIcon[i].style= "background-image: url(img/brand_story/ico_plus3.png)";
             openState[i] = 0;
          } 
          footerMore[clickNumber].style = "max-height:600px;";
          openStateIcon[clickNumber].style = "background-image: url(img/brand_story/ico_close3.png);";
          openState[clickNumber] = 1; // 클릭된 list의 오픈 상태를 저장
       }
       else {
         footerMore[clickNumber].style = "max-height:30px;";
          openStateIcon[clickNumber].style ="background-image: url(img/brand_story/ico_plus3.png)";
          openState[clickNumber] = 0; // 클릭된 list의 닫힘 상태를 저장 
       }
    
 }
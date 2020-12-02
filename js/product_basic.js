

var bg = document.querySelector(".div");

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

    // 스크롤 시 배경 흐림
    if(test >= 100 && test < 200) {
        bg.style.filter = "blur(0px)";
    } else if(test >= 200 && test < 300) {
        bg.style.filter = "blur(1px)";
    } else if(test >= 300 && test < 400) {
        bg.style.filter = "blur(2px)";
    } else if(test >= 400) {
        bg.style.filter = "blur(3px)";
    }
    else{
        bg.style.filter = "blur(0px)";
    }

    // 스크롤 시 fadeIn

    if(test > 1400) {
        document.getElementById("prd_h1").style="animation:fadeInup 2s forwards;"
    }
    else{
        document.getElementById("prd_h1").style=""
    }

    if(test > 1450) {
        document.getElementById("prd_h3").style="animation:fadeInup 2s forwards;"
    }
    else{
        document.getElementById("prd_h3").style=""
    }

    if(test > 1500) {
        document.getElementById("prd_p").style="animation:fadeInup 2s forwards;"
    }
    else{
        document.getElementById("prd_p").style=""
    }

    if(test > 2800) {
        document.getElementById("overview_title_h2").style="animation:fadeInup 2s forwards;"
    } else{
        document.getElementById("overview_title_h2").style=""
    }

    if(test > 3200) {
        document.getElementById("overview_title_p").style="animation:fadeInup 2s forwards;"
    } else{
        document.getElementById("overview_title_p").style=""
    }

    if(test > 3400) {
        document.getElementById("overview_prd_1_img").style="animation:fadeInup 2s forwards;"
    } else{
        document.getElementById("overview_prd_1_img").style=""
    }

    if(test > 3700) {
        document.getElementById("overview_prd_2_img").style="animation:fadeInup 2s forwards;"
    } else{
        document.getElementById("overview_prd_2_img").style=""
    }

    if(test > 4000) {
        document.getElementById("overview_prd_1_text").style="animation:fadeInup 2s forwards;"
    } else{
        document.getElementById("overview_prd_1_text").style=""
    }

    if(test > 4200) {
        document.getElementById("overview_prd_2_text").style="animation:fadeInup 2s forwards;"
    } else{
        document.getElementById("overview_prd_2_text").style=""
    }

    if(test > 5400) {
        document.getElementsByClassName("object_wrap")[0].style="animation:fadeInup 2s forwards;"
    } else{
        document.getElementsByClassName("object_wrap")[0].style=""
    }

    if(test > 6400) {
        document.getElementsByClassName("feature_wrap")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("feature_wrap")[0].style=""
    }

    if(test > 7800) {
        document.getElementsByClassName("feature_wrap_spec_2")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("feature_wrap_spec_2")[0].style=""
    }

    if(test > 11000) {
        document.getElementsByClassName("feature_wrap_spec_3")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("feature_wrap_spec_3")[0].style=""
    }

    if(test > 11300) {
        document.getElementsByClassName("feature_wrap_spec_3_img")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("feature_wrap_spec_3_img")[0].style=""
    }

    if(test > 12000) {
        document.getElementsByClassName("color_title")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("color_title")[0].style=""
    }

    if(test > 14000) {
        document.getElementsByClassName("lookbook_title")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("lookbook_title")[0].style=""
    }

    if(test > 14300) {
        document.getElementsByClassName("lookbook_img_wrap_1")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("lookbook_img_wrap_1")[0].style=""
    }

    if(test > 14900) {
        document.getElementsByClassName("lookbook_img_wrap_2")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("lookbook_img_wrap_2")[0].style=""
    }

    if(test > 15500) {
        document.getElementsByClassName("online_store_wrap")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("online_store_wrap")[0].style=""
    }

    if(test > 16100) {
        document.getElementsByClassName("online_store_figure")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("online_store_figure")[0].style=""
    }

    if(test > 16800) {
        document.getElementsByClassName("info_wrap_ul")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("info_wrap_ul")[0].style=""
    }

    if(test > 17400) {
        document.getElementsByClassName("info_2_wrap_ul")[0].style="animation:fadeInup 3s forwards;"
    } else{
        document.getElementsByClassName("info_2_wrap_ul")[0].style=""
    }

    


    // 스크롤시 logo 버튼 색상 변경

    var logo = document.getElementsByClassName("logo");
    var menuplus = document.getElementsByClassName("menu_show_a");

    if(test < 14500) {
        logo[0].style=" -webkit-filter: none;"

        menuplus[0].style=" -webkit-filter: none;"
    }

    if(test > 14500 && test < 17000) {
        logo[0].style=" -webkit-filter: drop-shadow(0 0 0 black) invert(100%);"

        menuplus[0].style=" -webkit-filter: drop-shadow(0 0 0 black) invert(100%);"
    }

    if(test > 17000 && test < 17600) {
        logo[0].style=" -webkit-filter: none;"

        menuplus[0].style=" -webkit-filter: none;"
    }

    if(test > 17600 && test < 19800) {
        logo[0].style=" -webkit-filter: drop-shadow(0 0 0 black) invert(100%);"

        menuplus[0].style=" -webkit-filter: drop-shadow(0 0 0 black) invert(100%);"
    }

    if(test > 19800) {
        logo[0].style=" -webkit-filter: none;"

        menuplus[0].style=" -webkit-filter: none;"
    }



    // prd mask scroll
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log(document.getElementById('prd').offsetTop);
    console.log(document.getElementById('mask').offsetTop); 

    var scrollPos = window.scrollY;
    var windowHeight = window.innerHeight;
    var prdPos = document.getElementById('prd').offsetTop;
    var maskPos = document.getElementById('mask_img').offsetTop;
    var maskImg = document.getElementById('mask_img');

    var maskOffset = scrollPos + windowHeight - maskPos; 
    var maskImgNum = Math.floor( (maskOffset - 500) / 10);
    if (maskImgNum > 31) { maskImgNum = 31; }

    if (maskOffset > 500) {
        maskImg.src = "img/product_basic/bg_etiqa_mask_" + maskImgNum + ".png";
    }

    // feature mask_1

    var feaMaskPos = document.getElementById('feature_mask_img').offsetTop;
    var feaMaskImg = document.getElementById('feature_mask_img');
    var feaMask = document.getElementById('feature_mask');

    var feaMaskOffset = scrollPos + windowHeight - feaMaskPos; 
    var feaMaskImgNum = Math.floor( (feaMaskOffset - 7600) / 20);
    if (feaMaskImgNum > 7) { feaMaskImgNum = 7; }

    if (feaMaskOffset > 7600) {
        feaMaskImg.src = "img/product_basic/bg_etiqa_mask_" + feaMaskImgNum + ".png";
    }

     // spec_2 mask

     var specMaskPos = document.getElementById('spec_2_mask_img').offsetTop;
     var specMaskImg = document.getElementById('spec_2_mask_img');
     var specMask = document.getElementById('spec_2_mask');
 
     var specMaskOffset = scrollPos + windowHeight - specMaskPos; 
     var specMaskImgNum = Math.floor( (specMaskOffset - 8800) / 30);
     if (specMaskImgNum > 22) { specMaskImgNum = 22; }
 
     if (specMaskOffset > 8800) {
        specMaskImg.src = "img/product_basic/bg_etiqa_mask_" + specMaskImgNum + ".png";
     }
    
    
    // 모바일용 header
    if(test < 150){
        document.getElementById("gnb_m").style="display:none;";
        document.getElementsByClassName("header")[0].style="display:block;";
        document.getElementById("menu_show").style="display:block;";
    }
    else{
        document.getElementById("gnb_m").style="display:none;";
        gnbHide();
        document.getElementsByClassName("header")[0].style="display:none;";
        document.getElementById("menu_show").style="display:none;";
    }



}

// gnb menu open 스타일

function gnbShow() {
    document.getElementById('gnb_m').style = "display:block; height:auto;";
    document.querySelector('.nav_menu_button_show h2').style = "display:none;";
    document.querySelector('.nav_menu_button_hide h2').style = "display:block;";
 }

function gnbHide() {
    document.getElementById('gnb_m').style = "display:block; height:52px;";
    document.querySelector('.nav_menu_button_show h2').style = "display:block;";
    document.querySelector('.nav_menu_button_hide h2').style = "display:none;";
}



//호버상태 이미지
function maskTrans(){
    var transcnt=0;
    if(transcnt==0){
        document.getElementById("top").style="transform: rotate(-5.5deg);  top:-72px; transform-origin: 10% 100%;";
        document.getElementById("bottom").style="top:-210px;";
        transcnt=1;
    }
}
function maskOut(){
    document.getElementById("top").style="transform: rotate(0); top: -72px;";
    document.getElementById("bottom").style="top:0;";
    transcnt=0;
}



// 비디오 랜덤 재생
function videoRandomChange(){
    var randomNum = Math.floor(Math.random() * 3 + 1); // 랜덤 값 생성 후 자연수로 변경
    console.log(randomNum);
    document.getElementById('ranvedio').src="img/index/menu0" + randomNum + ".webm";
}
//  var iiii = 0;
//  function imgChange() {
//      document.getElementById('img').src = "imgname_" + i + ".png";
//      iiii++
//      if (i==3) { return; } 
//      setTimeout(imgChange,100); 
//  }


//신민아 START
var currentSlideNumber = 0; // 슬라이드 번호를 0번에 시작
var slidemina = document.getElementsByClassName('ad_img_wrap');
var number = 0;
var slideminaNumber = document.getElementsByClassName('ad_number_next');
var slideLineNumber = document.getElementsByClassName('ad_line_num');

function moveNext() {
    if (currentSlideNumber != slidemina.length - 1) {

        // 현재 슬라이드를 왼쪽으로 fade out
        slidemina[currentSlideNumber].style = "animation:fade_out_rtl 0.8s forwards"
        slideminaNumber[number].style = "display:none;"

        // 다음 슬라이드를 화면으로 fade in
        slidemina[currentSlideNumber + 1].style = "animation:fade_in_rtl 0.8s forwards"
        currentSlideNumber++;
        slideminaNumber[number + 1].style = "display:block;"
        number++;

    } else {   // 마지막 슬라이드에서 클릭될 때 
        // 현재 슬라이드를 왼쪽으로 fade out
        slidemina[currentSlideNumber].style = "animation:fade_out_rtl 0.8s forwards";
        slideminaNumber[number].style = "display:none;"

        // 다음 슬라이드를 화면으로 fade in
        slidemina[0].style = "animation:fade_in_rtl 0.8s forwards";
        currentSlideNumber = 0;
        slideminaNumber[0].style = "display:block;"
        number = 0;
    }
}

function movePrev() {
    if (currentSlideNumber !=0 ) {

        // 현재 슬라이드 왼쪽에서 오른쪽으로 fade out
        slidemina[currentSlideNumber].style = " animation:fade_out_ltr 0.8s forwards"
        slideminaNumber[number].style = "display:none;"

        // 이전 슬라이드가 왼쪽에서 화면으로 fade in
        slidemina[currentSlideNumber - 1].style = " animation:fade_in_ltr 0.8s forwards"
        currentSlideNumber--;
        slideminaNumber[number - 1].style = "display:block;"
        number--;

    } else {
        // 현재 슬라이드 왼쪽에서 오른쪽으로 fade out
        slidemina[0].style = "animation:fade_out_ltr 0.8s forwards"
        slideminaNumber[number].style = "display:none;"
 
        // 이전 슬라이드가 왼쪽에서 화면으로 fade in
        slidemina[slidemina.length - 1].style = "animation:fade_in_ltr 0.8s forwards"
        currentSlideNumber = slidemina.length - 1;
        slideminaNumber[5].style = "display:block;"
        number = 5;
    }
}

//신민아 END

// 슬라이더 좌,우 스크롤 코드
var slideTop = document.getElementsByClassName('color_slide_top');
var slideInner = document.getElementsByClassName('color_slide_inner');
    //color_slide_inner의 이름을 가진 0~7까지의 배열 선언;
var slideBot = document.getElementsByClassName('color_slide_bottom');

var slideCnt = 0;
function colorNext(){
    if(slideCnt != slideInner.length - 1){
        slideInner[slideCnt].style="animation:Out_RtL 0.6s forwards";
        slideInner[slideCnt + 1].style="animation:In_RtL 0.6s forwards";
        slideTop[slideCnt].style="animation:Out_RtL 0.6s forwards";
        slideTop[slideCnt + 1].style="animation:In_RtL 0.6s forwards";
        slideBot[slideCnt].style="animation:Out_RtL 0.6s forwards";
        slideBot[slideCnt + 1].style="animation:In_RtL 0.6s forwards";
        slideCnt++;
    }
    else{
        slideInner[slideCnt].style="animation:Out_RtL 0.6s forwards";
        slideInner[0].style="animation:In_RtL 0.6s forwards";
        slideTop[slideCnt].style="animation:Out_RtL 0.6s forwards";
        slideTop[0].style="animation:In_RtL 0.6s forwards";
        slideBot[slideCnt].style="animation:Out_RtL 0.6s forwards";
        slideBot[0].style="animation:In_RtL 0.6s forwards";
        slideCnt=0;
    }

}
function colorPrev(){
    if(slideCnt != 0){                      
        slideInner[slideCnt].style="animation:Out_LtR 0.4s forwards";
        slideInner[slideCnt - 1].style="animation:In_LtR 0.4s forwards";
        slideTop[slideCnt].style="animation:Out_LtR 0.4s forwards";
        slideTop[slideCnt - 1].style="animation:In_LtR 0.4s forwards";
        slideBot[slideCnt].style="animation:Out_LtR 0.4s forwards";
        slideBot[slideCnt - 1].style="animation:In_LtR 0.4s forwards";
        slideCnt--;
    }
    else{
        slideInner[0].style="animation:Out_LtR 0.4s forwards";
        slideInner[slideInner.length - 1].style="animation:In_LtR 0.4s forwards";
        slideTop[0].style="animation:Out_LtR 0.4s forwards";
        slideTop[slideInner.length - 1].style="animation:In_LtR 0.4s forwards";
        slideBot[0].style="animation:Out_LtR 0.4s forwards";
        slideBot[slideInner.length - 1].style="animation:In_LtR 0.4s forwards";
        slideCnt = slideInner.length - 1;
    }
}
//////////////////////////////////////////////
function colorChange(indexNumber){
    var direction = indexNumber - slideCnt;
    var distance = Math.abs(direction); 

    if( direction > 0){
       for (i=0; i<distance; i++){
       slideInner[slideCnt + i].style = "animation:Out_RtL_" + i + " 0.6s forwards ease-in";
       slideInner[indexNumber].style = "animation:In_RtL 0.6s forwards ease-in;"; 
       slideTop[slideCnt + i].style = "animation:Out_RtL_" + i + " 0.6s forwards ease-in";
       slideTop[indexNumber].style = "animation:In_RtL 0.6s forwards ease-in;"; 
       slideBot[slideCnt + i].style = "animation:Out_RtL_" + i + " 0.6s forwards ease-in";
       slideBot[indexNumber].style = "animation:In_RtL 0.6s forwards ease-in;"; 
       }
       slideCnt = indexNumber;
       
    }else if ( direction < 0){
        for (i=0; i<distance; i++){
        slideInner[slideCnt - i].style = "animation:Out_LtR_" + i + " 0.6s forwards ease-in";
        slideInner[indexNumber].style = "animation:In_LtR 0.6s forwards ease-in";
        slideTop[slideCnt - i].style = "animation:Out_LtR_" + i + " 0.6s forwards ease-in";
        slideTop[indexNumber].style = "animation:In_LtR 0.6s forwards ease-in";
        slideBot[slideCnt - i].style = "animation:Out_LtR_" + i + " 0.6s forwards ease-in";
        slideBot[indexNumber].style = "animation:In_LtR 0.6s forwards ease-in";
        }
        slideCnt = indexNumber;
    }

}

function adImg1(){
    document.getElementById('smp1').style="display: block;";
}
function adImg1Close(){
    document.getElementById('smp1').style="display: none;";
}
function adImg2(){
    document.getElementById('smp2').style="display: block;";
}
function adImg2Close(){
    document.getElementById('smp2').style="display: none;";
}
function adImg3(){
    document.getElementById('smp3').style="display: block;";
}
function adImg3Close(){
    document.getElementById('smp3').style="display: none;";
}
function adImg4(){
    document.getElementById('smp4').style="display: block;";
}
function adImg4Close(){
    document.getElementById('smp4').style="display: none;";
}
function adImg5(){
    document.getElementById('smp5').style="display: block;";
}
function adImg5Close(){
    document.getElementById('smp5').style="display: none;";
}
function adImg6(){
    document.getElementById('smp6').style="display: block;";
}
function adImg6Close(){
    document.getElementById('smp6').style="display: none;";
}
function bgvDown(){
    document.getElementById('ly_pop').style = "display:none;"
    document.getElementById('menu_show').style = " display:block;"
    document.getElementById('menu_hide').style = " display:none;"
}



// 모바일용 COLOR

var slideMoColor = document.getElementsByClassName('m_color_wrap');

var slideMoColorCnt = 0;

function mColorChange(moColorNumber){
    var modirection = moColorNumber - slideMoColorCnt;
    var modistance = Math.abs(modirection); 

    if( modirection > 0){
       for (i=0; i<modistance; i++){
        slideMoColor[slideMoColorCnt + i].style = "animation:Out_RtL_" + i + " 0.6s forwards ease-in";
        slideMoColor[moColorNumber].style = "animation:In_RtL 0.6s forwards ease-in";} 
       
        slideMoColorCnt = moColorNumber;
       
    }else if ( modirection < 0){
        for (i=0; i<modistance; i++){
        slideMoColor[slideMoColorCnt - i].style = "animation:Out_LtR_" + i + " 0.6s forwards ease-in";
        slideMoColor[moColorNumber].style = "animation:In_LtR 0.6s forwards ease-in";}
        
        slideMoColorCnt = moColorNumber;
    }

}



// lookbook
var lookbookcnt = 0;
function lookBookOver(cnt) {
    for(i=0; i<4; i++){
        if(cnt == i){
            document.getElementsByClassName('lookbook_img')[i].style="animation:lookup 2s forwards ease-in";
            lookbookcnt ++;
        }
        else {
            document.getElementsByClassName('lookbook_img')[i].style="animation:none";
        }
    }
}

function lookBookOut(cnt) {
    for(i=0; i<4; i++){
        if(cnt == i){
            document.getElementsByClassName('lookbook_img')[i].style="animation:lookdown 2s forwards ease-in";
            lookbookcnt ++;
        }
        else {
            document.getElementsByClassName('lookbook_img')[i].style="animation:none";
        }
    }
}




function newColorOpen1(){
    document.getElementById('new_color_img1').style="display: block;";
}
function newColorClose1(){
    document.getElementById('new_color_img1').style="display: none;";
}
function newColorOpen2(){
    document.getElementById('new_color_img2').style="display: block;";
}
function newColorClose2(){
    document.getElementById('new_color_img2').style="display: none;";
}
function newColorOpen3(){
    document.getElementById('new_color_img3').style="display: block;";
}
function newColorClose3(){
    document.getElementById('new_color_img3').style="display: none;";
}
function newColorOpen4(){
    document.getElementById('new_color_img4').style="display: block;";
}
function newColorClose4(){
    document.getElementById('new_color_img4').style="display: none;";
}
function newColorOpen5(){
    document.getElementById('new_color_img5').style="display: block;";
}
function newColorClose5(){
    document.getElementById('new_color_img5').style="display: none;";
}
function newColorOpen6(){
    document.getElementById('new_color_img6').style="display: block;";
}
function newColorClose6(){
    document.getElementById('new_color_img6').style="display: none;";
}
function newColorOpen7(){
    document.getElementById('new_color_img7').style="display: block;";
}
function newColorClose7(){
    document.getElementById('new_color_img7').style="display: none;";
}
function newColorOpen8(){
    document.getElementById('new_color_img8').style="display: block;";
}
function newColorClose8(){
    document.getElementById('new_color_img8').style="display: none;";
}
function newLookbookOpen1(){
    document.getElementById('new_lookbook_img1').style="display: block;";
}
function newLookbookClose1(){
    document.getElementById('new_lookbook_img1').style="display: none;";
}
function newLookbookOpen2(){
    document.getElementById('new_lookbook_img2').style="display: block;";
}
function newLookbookClose2(){
    document.getElementById('new_lookbook_img2').style="display: none;";
}
function newLookbookOpen3(){
    document.getElementById('new_lookbook_img3').style="display: block;";
}
function newLookbookClose3(){
    document.getElementById('new_lookbook_img3').style="display: none;";
}
function newLookbookOpen4(){
    document.getElementById('new_lookbook_img4').style="display: block;";
}
function newLookbookClose4(){
    document.getElementById('new_lookbook_img4').style="display: none;";
}




// spec_2_detail
var spec2cnt = 0;
function specOver(speccnt) {
    for(i=0; i<4; i++){
        if(speccnt == i){
            document.getElementsByClassName('spec_2_detail_p')[i].style="display:block";
            spec2cnt ++;
        }
    }
}

function specOut(speccnt) {
    for(i=0; i<4; i++){
        if(speccnt == i){
            document.getElementsByClassName('spec_2_detail_p')[i].style="display:none";
            spec2cnt ++;
        }
    }
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
             openStateIcon[i].style= "background-image: url(img/brand_story/img_menu2.png)";
             openState[i] = 0;
          } 
          footerMore[clickNumber].style = "max-height:600px;";
          openStateIcon[clickNumber].style = "background-image: url(img/brand_story/ico_close3.png); -webkit-filter: drop-shadow(0 0 0 black) invert(100%);";
          openState[clickNumber] = 1; // 클릭된 list의 오픈 상태를 저장
       }
       else {
         footerMore[clickNumber].style = "max-height:30px;";
          openStateIcon[clickNumber].style ="background-image: url(img/brand_story/img_menu2.png)";
          openState[clickNumber] = 0; // 클릭된 list의 닫힘 상태를 저장 
       }
    
 }


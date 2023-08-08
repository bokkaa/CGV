    // $(document).ready(function () {
    //     $('.nav_menu > li > h2 > a').on({
    //         mouseenter: function (e) {
    //             var target = e.target;
    //             $(target).parents('.nav_menu').find('.nav_overMenu').slideDown(function () {
    //                 $('.nav').addClass('active');
    //             });
    //         },
    //         click: function (e) {
    //             var target = e.target;
    //             if (!$('.nav').hasClass('active')) {
    //                 $(this).trigger('mouseenter');
    //             } else {
    //                 $('.nav').trigger('mouseleave');
    //             }
    //         }
    //     });

    //     /********************************************************
    //     //서브메뉴 구글 GA Analytics 로그 처리 - 2022.01.12 myilsan
    //     ********************************************************/
    //     //cgv화이트 메뉴클릭
    //     $('.nav > .contents > h1 > a').on({
    //          click: function (e) {
    //              gaEventLog('PC_GNB', '홈', '');
    //         }
    //     });

    //     //주메뉴 클릭
    //     $('.nav_menu > li > h2 > a').on({
    //         click: function (e) {
    //             gaEventLog('PC_GNB', '주메뉴_' + this.text, '');
    //         }
    //     });

    //     //주메뉴 하위메뉴 클릭
    //     $('.nav_overMenu > dd > h3 > a').on({
    //         click: function (e) {
    //             var target = e.target;
    //             var parText = $(target).parents('.nav_overMenu').find('dt')[0].innerText;
    //             gaEventLog('PC_GNB', parText + '_' + this.text, '');
    //         }
    //     });

    //     //하위메뉴 최상위 클릭
    //     $(".nav_overMenu > dt > h2 > a").on({
    //         click: function (e) {
    //             gaEventLog('PC_GNB',this.text + '_' + this.text, '');
    //         }
    //     });

    //     //------------------end----------------------- [@,.o]>

    //     $('.nav').on({
    //         mouseleave: function (e) {
    //             $(this).find('.nav_overMenu').slideUp(200, function () {
    //                 $('.nav').removeClass('active');
    //             });
    //         }
    //     });

    //     $('.totalSearch_wrap input[type=text]').on({
    //         focusin: function () {
    //             $('.totalSearch_wrap').addClass("active");
    //         }
    //     });

    //     $('.btn_totalSearchAutocomplete_close').on({
    //         click: function () {
    //             $('.totalSearch_wrap').removeClass("active");
    //         },
    //         focusout: function (e) {
    //             //     $('.totalSearch_wrap').removeClass("active");

    //         }
    //     });

    //     $(this).on({
    //         scroll: function (e) {
    //             /* S GNB fixed */
    //             var headerOffsetT = $('.header').offset().top;
    //             var headerOuterH = $('.header').outerHeight(true);
    //             var fixedHeaderPosY = headerOffsetT + headerOuterH;
    //             var scrollT = $(this).scrollTop();
    //             var scrollL = $(this).scrollLeft();

    //             if (scrollT >= fixedHeaderPosY) {
    //                 $('.nav').addClass('fixed');
    //                 $('.fixedBtn_wrap').addClass('topBtn');
    //             } else {
    //                 $('.nav').removeClass('fixed');
    //                 $('.fixedBtn_wrap').removeClass('topBtn');
    //             }

    //             /* S > GNB fixed 좌우 스크롤
    //             Description
    //             - GNB가 fixed 되었을때 좌우 스크롤 되게 처리
    //             */
    //             if ($('.nav').hasClass('fixed')) {
    //                 $('.nav').css({ 'left': -1 * scrollL })
    //             } else {
    //                 $('.nav').css({ 'left': 0 })
    //             }
    //             /* E > GNB fixed 좌우 스크롤 */
    //             /* S GNB fixed */
    //         }
    //     });

    //     $('.btn_gotoTop').on({
    //         click: function () {
    //             $('html, body').stop().animate({
    //                 scrollTop: '0'
    //             }, 400);
    //         }
    //     });

    //     //통합검색 상단 검색 버튼
    //     $('#btn_header_search').on('click', function () {

           
    //         if ($('#header_ad_keyword').val() != "")
    //             goSearch($('#header_ad_keyword'));      //광고
    //         else
    //             goSearch($('#header_keyword'));

            
    //         return false;
    //     });

    //     //통합검색 검색어 입력창
    //     $('#header_keyword').keyup(function (e) {
    //         if (e.keyCode == 13) goSearch($('#header_keyword'));
    //     });

    //      //검색 입력창 클릭 시 광고값 reset
    //     $('#header_keyword').on('click', function () {
    //         $(this).attr('placeholder', '');
    //         $('#header_ad_keyword').val('');
    //     });

    // });

    // //통합검색
    // function goSearch($objKeyword) {

    //     if ($objKeyword.val() == "") {
    //         alert("검색어를 입력해 주세요");
    //         $objKeyword.focus();
    //         return false;
    //     }

    //     //GA 검색로그
    //     gaEventLog('PC_GNB', '검색', $objKeyword.val());
    //     location = "/search/?query=" + escape($objKeyword.val());
    // }

   

    // //상단 키워드 광고 (S)
    // function AdSearchExt(txt, SearchText) {
    //     $('#header_keyword').attr('placeholder', txt);
    //     $('#header_ad_keyword').val(SearchText);
    // }

    // function hdIcoSet(left, sh) { }
    // //상단 키워드 광고 (E)

    // //상단광고닫기
    // function hideCgvTopAd() {
    //     $(".cgv-ad-wrap").hide();
    //     $('#wrap_main_notice').parent('div').css('top', 280);
    // }

    // //비즈스프링 클릭로그
    // function setClickLog(title) {
    //     // eval("try{trk_clickTrace('EVT', '" + title + "')}catch(_e){}");
    // }


    // // =====
    // $(function () {

  

    //     var interval = 3000;
    //     $("ul#img").each(function () {
    //         var container = $(this);
    
    //         function swithImg() {
    //             var imgs = container.children("li"); //배열-이미지들을 변수에 넣음
    //             //첫번째 이미지 요소
    //             var first = imgs.eq(0);
                
                
    //             //두번째 이미지 요소
    //             var second = imgs.eq(1);
    //             first.fadeOut().appendTo(container); //첫번째 이미지 맨 뒤로 천천히 보낸다.
    //             second.fadeIn(); //두번째 이미지는 천천히 보여지게 만든다.
    
    //         }
    //         setInterval(swithImg, interval);
           
    
    
    
    //     });
    //     $(".tabMenuWrap").each(function () {
    //         var tabMenuDiv = $(this); //탭메뉴 영역
    //         var menu_a = tabMenuDiv.find("a"); //a태그
    //         var panelDiv = tabMenuDiv.find("div.panel") //텝메뉴 내용 패널들
    //         panelDiv.hide();
    
    //         var panelOne; //class가 oon인 a
    //         var panelShow; // class가 oon인 href의 연결패널
    
    //         panelOne = menu_a.filter(".oon"); //class의 값이 oon인 a
    //         panelShow = $(panelOne.attr("href")); //class가 oon이고 그 안에 href 속성을 가진 값
    //         panelShow.show(); //class값이 on인 패널만 보이게 하기
    
    //         /*현재 클릭한 메뉴에 따른 클래스 속성 부여 및 패널 변경*/
    //         menu_a.click(function (x) {
    //             var currentA = $(this);
    //             var currentA_panel = $(currentA.attr("href"));
    //             x.preventDefault(); //a태그의 최우선 동작인 href의 갓을 거짓으로 만든다.
    
    //             panelOne.removeClass("oon"); //이전 탭메뉴
    //             currentA.addClass("oon"); //현재 탭메뉴
    
    //             panelShow.hide(); //oon클래스가 부여되었던 a의 패널은 감춘다.
    //             currentA_panel.show(); //새로 클릭한 탭메뉴 a의 패널을 보여준다.
    
    //             panelOne = currentA; //a를 현재 클릭한 메뉴로 변경
    //             panelShow = currentA_panel; //패널div를 현재 클릭한 메뉴의 패널로 변경
    //             currentA.click(function () {
    //                 currentA_panel.children("ul").show();
    
    //             })
    //         })
    //     })
    
    //     /*브랜드별 인기메뉴 버튼*/
    //     $("button.left").click(function () {
    //         $("ul#slide").css("left", "0px")
    //     })
    //     $("button.right").click(function () {
    //         $("ul#slide").css("left", "-80%");
    //     })
    
    //     /*주소설정 브랜드 버튼*/
    //     $("button.left3").click(function () {
    //         $("ul#delivery_store").css("left", "0px")
    //     })
    //     $("button.right3").click(function () {
    //         $("ul#delivery_store").css("left", "-100%");
    //     })
    
    
    // })
    // //모달창이 띄워질 때 모달창 이외 공간 투명도처리
    //     var modalDiv = document.createElement("div");
    // //스타일에서 설정한 값을 적용하기위해 modal 클래스 생성
    //     modalDiv.classList.add("modal");
    
    // //모달창이 띄워질 영역설정
    //     var innerDiv = document.createElement("div");
    //     innerDiv.classList.add("inner");
    //     innerDiv.innerHTML = `
    // <div><img src="images/배너6.jpg" alt="" /></div>
    // `;
    
    // //모달창 배치
    //     modalDiv.appendChild(innerDiv);
    
    //     document.body.appendChild(modalDiv);
    //     innerDiv.addEventListener("click", function () {
    
    //         close_modalWindow(modalDiv)
    
    //     });
    
    
    // function close_modalWindow(modalDiv) {
    //     document.body.removeChild(modalDiv);
    // }
    
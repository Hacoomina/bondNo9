$(document).ready(function(){
    carouselSlider('.carouselSlider','horizontal',4,340,15);
    verticalSlider('.verticalSlider');
    customNumber();
    swapTabControl(".detailDescription > ul li");
    $(".fitvidsBox").fitVids();
    gnbControl();
    popupControl(".btn_open","data-popname");
    popupControl(".sortBar input[type='button']","data-panelname");
    starating();
    toggleControl();
});

function customNumber(){
    $("#stepDown").click(function(){
        this.parentNode.querySelector('input[type=number]').stepDown();
    });
    $("#stepUp").click(function(){
        this.parentNode.querySelector('input[type=number]').stepUp();
    });
}

function carouselSlider(target,mod,maxCount,slideW){
    $(target).bxSlider({
        mode: mod,
        maxSlides: maxCount,
        minSlides: 1,
        slideMargin: 15,
        slideWidth: slideW,
        pager: false,
    });
};

function verticalSlider(target){
    $(target).bxSlider({
        mode: 'vertical',
        speed: 500,
        slideMargin: 0,
        infiniteLoop: true,
        pager: false,
        controls: true,
        slideWidth: 720,
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        adaptiveHeight: false,
        slideSelector: '.verticalSlider li',
    });
}

function swapTabControl(target){
    $(target).click(function(){
        var currentTab = "#" + $(this).attr("data-tabname");
        $(target).removeClass("active");
        $(this).addClass("active");
        $(".panel").removeClass("active");
        $(currentTab).addClass("active");
    });
}
function gnbControl(){
    $(".muiArea").click(function(){
        var gnbName = "#" + $(this).attr("data-popname");
        $(this).toggleClass("gnb_open");
        $(gnbName).toggleClass("active");
    });
}
function popupControl(btn,attrName){
    var popupName  = null;
    $(btn).click(function(){
        popupName = $(this).attr(attrName);
        console.log(popupName);
        if(attrName == "data-popname"){ //? attrName이라는 매개변수로 attr을 입력 받은것이 popname -> addclass
            $("#" + popupName).addClass("active");
        }
        if(attrName == "data-panelname"){ //? panelname 이라면 list panel id 모두 active제거했다가 클릭한것으로부터 받은 이름의 panelid는 addclass
            $("[id$='Condition']").removeClass("active");
            $("#" + popupName).addClass("active");
        }
    });
    $(".btn_close").click(function(){
        $("#" + popupName).removeClass("active");
    });
}

function starating(){
    $(".starCount input[type='button']").click(function(){
        $(".starCount input[type='button']").removeClass("on");
        $(this).addClass("on");
        $(this).prevAll().addClass("on");
    });
}

function toggleControl(){
    $(".favorite").click(function(){
        $(this).toggleClass("active");
    });
}

function checkStar(){
    $('.stars span').on('click', function(){
        const arrNum = Array($(this).data().value).fill().map((v,i)=> i+1); // 클릭한 star까지 채워질 index array
        if( $(this).attr('check') === 'true' ){ // 만약 같은 위치의 별을 클릭하면 모두 비움.
            for(let num of arrNum){
                $('.star_'+num).children('img').attr('src', 'img/test/star.png');
            }
            $('.stars span').attr('check', ''); // 같은 위치가 아니므로 기존 check가 true된 별은 모두 check 해제함.
        }else{  // 같은 위치가 아니라면 해당 클릭 위치까지 별을 채움.
            $('.stars span').attr('check', '')
                            .children('img').attr('src', 'img/test/star.png' );
            for(let num of arrNum){
                $('.star_'+num).children('img').attr('src', 'img/test/star_active.png' );
            }
            $(this).attr('check', 'true');
        }
    });
}

function starCount(){
    $('starCount a').click(function(){ 
        $(this).parent().children("a").removeClass("on");    
        $(this).addClass("on").prevAll("a").addClass("on");
        console.log($(this).attr("value"));
    });
}
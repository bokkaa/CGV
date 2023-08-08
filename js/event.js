let count = 0;
function moreBtn(){
    var imgHeight = $('.eventMainSection').height();
    imgHeight+=605;
            $('.eventMainSection').css('height', imgHeight)
            $('#section').css('height', imgHeight)
            if(count==0){
                $('.eventImgSection ul').append(`
                <li>
                <a href="">
                    <img src="img/eventPageimg7.jpg" alt="이벤트1"/>
                    <h4>해리포터 생일기념 굿즈 7days</h4>
                    <p>2023.07.28-2023.08.11</p>
                </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/eventPageimg8.jpg" alt="이벤트1"/>
                        <h4>[더 문] 4DX 포스터</h4>
                        <p>2023.07.28-2023.08.08</p>
                    </a>
                </li>
        
                <li>
                    <a href="">
                        <img src="img/eventPageimg9.jpg" alt="이벤트1"/>
                        <h4>[더 문] IMAX 포스터</h4>
                        <p>2023.07.27-2023.08.08</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/eventPageimg10.jpg" alt="이벤트1"/>
                        <h4>&lt;스즈메의 문단속&gt;뱃지 추가 출시!</h4>
                        <p>2023.07.25-2023.08.20</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/eventPageimg11.jpg" alt="이벤트1"/>
                        <h4>[스즈메의 문단속] 엽서 세트 출시</h4>
                        <p>2023.07.19-2023.08.10</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/eventPageimg12.jpg" alt="이벤트1"/>
                        <h4>[비공식작전 필름마크]</h4>
                        <p>2023.07.28-2023.08.10</p>
                    </a>
                </li>`);

                count=1;

            }else if(count==1){
            $('.eventImgSection ul').append(`
            <li>
            <a href="">
                <img src="img/eventPageimg13.jpg" alt="이벤트1"/>
                <h4>[스즈메의 문단속] 엽서 세트 출시</h4>
                <p>2023.07.28-2023.08.10</p>
            </a>
            </li>
            <li>
                <a href="">
                    <img src="img/eventPageimg14.jpg" alt="이벤트1"/>
                    <h4>[비공식작전 필름마크]</h4>
                    <p>2023.07.28-2023.08.10</p>
                </a>
            </li>
    
            <li>
                <a href="">
                    <img src="img/eventPageimg15.jpg" alt="이벤트1"/>
                    <h4>[비공식작전 필름마크]</h4>
                    <p>2023.07.28-2023.08.10</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="img/eventPageimg16.jpg" alt="이벤트1"/>
                    <h4>[비공식작전 필름마크]</h4>
                    <p>2023.07.28-2023.08.10</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="img/eventPageimg17.jpg" alt="이벤트1"/>
                    <h4>[비공식작전 필름마크]</h4>
                    <p>2023.07.28-2023.08.10</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="img/eventPageimg18.jpg" alt="이벤트1"/>
                    <h4>[비공식작전 필름마크]</h4>
                    <p>2023.07.28-2023.08.10</p>
                </a>
            </li>`);
            $('.moreEventBtn').hide();

        } 
        
}

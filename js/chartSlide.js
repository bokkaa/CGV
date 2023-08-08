let $slideBox = $('.movieInfo');
let $slideImgs = $('.movieInfo >img');
let slideWidth = 1150;
let currentIdx = 0;
let slideCnt = $slideImgs.length;
let inverval = 10000;
  // console.log('slideCnt : ' + slideCnt);
  
  checkEnd();

  $('.right').stop().on('click', function () {
    currentIdx++;
    $slideBox.css('left', -(currentIdx * slideWidth));
    $slideBox.css('transition', '1s all');
    checkEnd();
    });




$('.left').on('click', function () {
  currentIdx--;
  $slideBox.css('left', -(currentIdx * slideWidth));
  $slideBox.css('transition', '1s all');
  
  checkEnd();
});

function checkEnd() {
  if (currentIdx <= 0) {
    $('.left').css('display', 'none');
  } else {
    $('.left').css('display', 'block');
  }

  if (currentIdx >= slideCnt +1) {
    $('.right').css('display', 'none');
  } else {
    $('.right').css('display', 'block');
  }
}


  function next(){
      
      if(true){
        currentIdx++;
        // console.log('currentIdx : ' + currentIdx);
        $slideBox.css('left', -(currentIdx * slideWidth));
        $slideBox.css('transition', '10s all');
          if(currentIdx>1 || currentIdx<0){
            currentIdx=0;
            $slideBox.css('left', -(currentIdx * slideWidth));
          }
      }
      checkEnd();
  }
  


  function startTimer() {
      timer = setInterval(next, inverval);
    
    }
    
    function endTimer() {
      clearInterval(timer);
    
    }
    
  $slideBox.hover(endTimer, startTimer);
  startTimer();



  // let seconds=6000;
//   startTimeInterval(5000, next);
//   function startTimeInterval(seconds, callback){
//     callback();
//     return setInterval(callback, seconds)
    
//   }
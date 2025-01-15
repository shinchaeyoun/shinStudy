function musicPlayerFn (){
    const $player = $('.music_wrap');
    const $playerTrack = $player.find('.player_track');
    const $albumCover = $player.find('.left_container .album_cover img');
    const $trackName = $player.find('.left_container .track_name');
    const $artistName = $player.find('.left_container .artist_name');
    const $sArea = $player.find('.slider');
    const $insTime = $player.find('#ins-time');
    const $sHover = $player.find('#s-hover');
    const $seekBar = $player.find('#seek-bar');
    const $dot = $player.find('.dot');
    const $trackTime = $player.find('.track_time');
    const $tProgress = $player.find('.current_time');
    const $trackLength = $player.find('.track_length');
    const $prevBtn = $player.find('.control_bar .prev');
    const $playBtn = $player.find('.control_bar .play');
    const $nextBtn = $player.find('.next');
    const $list = $player.find('.list .content');
    const trackNames = ['shine your light', 'sunshine', '너의 바다', 'love is all', '백년해로', 'Day 1', 'Outrunning Karma', 'Gooey', 'Morning Coffee', 'On hold'];
    const artistNames = ['박효신', '짙은', '호피폴라', '검정치마', '선우정아', 'HONNE', 'Alec Benjamin', 'Glass Animals', 'Jesper Munk', 'The xx'];
  
    const audio = new Audio(
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/1.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/2.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/3.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/4.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/5.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/6.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/7.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/8.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/9.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/10.mp3'
    );
  
    let playIdx = 1;
    audio.src = '../audio/' + playIdx + '.mp3';
    const buffInterval = null;
  
    // 플레이
    function play() {
      audio.volume = 0.1;
      audio.loop = false;
      audio.src = '../audio/' + playIdx + '.mp3';
      audio.play();
    };
  
    // 리스트 활성화
    function listActive() {
      $list.removeClass('active');
      $list.eq(playIdx - 1).addClass('active');
    };
  
    // 왼쪽 정보 변경
    function lifeInfo() {
      $albumCover.attr('src', './img/like/music/' + playIdx + '.jpeg');
      $trackName.text(trackNames[playIdx - 1]);
      $artistName.text(artistNames[playIdx - 1]);
    };
  
    function btnAdd() {
      $playBtn.addClass('active');
      $dot.addClass('active');
    };
  
    function btnToggle() {
      $playBtn.toggleClass('active');
      $dot.toggleClass('active');
    };
  
    // 자동 넘김
    function autoNext() {
      audio.onended = function () {
        if (playIdx < 10) { playIdx++; } else { playIdx = 1; }
  
        audio.src = '../audio/' + playIdx + '.mp3';
        audio.play();
  
        // 왼쪽 정보 변경
        lifeInfo();
        // 리스트 활성화
        listActive();
      };
    };
  
    function list (){
      playIdx = $list.index(this)+1;
        
      console.log('listIdx is', playIdx);
  
      // 음악 바로 재생
      play();
  
      // 재생버튼, 플레이 바 활성화
      btnAdd ()
  
      // 왼쪽 정보 변경
      lifeInfo ()
  
      // 리스트 활성화
      listActive ()
  
      // 자동 넘김
      audio.onended = function(){
        if(playIdx<10) {
          playIdx++;
        } else {
          playIdx=1;
        }
        console.log('넘어감',playIdx);
  
        audio.src = '../audio/'+playIdx+'.mp3';
        audio.play();
  
        // 왼쪽 정보 변경
        lifeInfo ()
  
        // 리스트 활성화
        listActive ()
      }
    };
  
    // 재생
    function playBtn() {
      // 재생버튼, 플레이 바  활성화
      btnToggle();
  
      if (audio.paused) {
        audio.volume = 0.3;
        audio.loop = false;
        audio.play();
      } else {
        audio.pause();
      }
  
      // 리스트 활성화
      listActive();
      // 자동 넘김
      autoNext();
    };
  
    // 다음
    function nextBtn() {
      if (playIdx < 10) {
        playIdx++;
      } else {
        playIdx = 1;
      }
  
      playFn();
    };
  
    // 이전
    function prevBtn() {
      if (playIdx > 1) {
        playIdx--;
      } else {
        playIdx = 10;
      }
  
      playFn();
    };
  
    function playFn(){
      play();
      btnAdd();
      lifeInfo();
      listActive();
      autoNext();
    };
  
    // 재생 바
  
    // 재생시간
    function time() {
      curMin = Math.floor(audio.currentTime / 60);
      curSec = Math.floor(audio.currentTime - curMin * 60);
  
      durMin = Math.floor(audio.duration / 60);
      durSec = Math.floor(audio.duration - durMin * 60);
  
      playProgress = (audio.currentTime / audio.duration) * 100;
  
      if (curMin < 10) { curMin = '0' + curMin; };
      if (curSec < 10) { curSec = '0' + curSec; };
  
      if (durMin < 10) { durMin = '0' + durMin; };
      if (durSec < 10) { durSec = '0' + durSec; };
  
      if (isNaN(curMin) || isNaN(curSec)) {
        $tProgress.text('00:00');
      } else {
        $tProgress.text(curMin + ':' + curSec);
      };
  
      if (isNaN(durMin) || isNaN(durSec)) {
        $trackLength.text('00:00');
      } else {
        $trackLength.text(durMin + ':' + durSec);
      }
  
      $seekBar.width(playProgress + '%');
      $dot.css({ left: playProgress + '%' });
  
      if (playProgress == 100) {
        $seekBar.width(0);
        $dot.css({ left: playProgress + '%' });
        $tProgress.text('00:00');
      };
    }
  
  
    // 재생 바 마우스 오버
    $sArea.mouseover(function (e) {
      seekBarPos = $sArea.offset();
      seekT = event.clientX - seekBarPos.left;
      seekLoc = audio.duration * (seekT / $sArea.outerWidth());
  
      $sHover.width(seekT);
  
      cM = seekLoc / 60;
  
      ctMin = Math.floor(cM);
      ctSec = Math.floor(seekLoc - ctMin * 60);
  
      if ((ctMin < 0) || (ctSec < 0))
        return;
  
      if ((ctMin < 0) || (ctSec < 0))
        return;
  
      if (ctMin < 10)
        ctMin = '0' + ctMin;
      if (ctSec < 10)
        ctSec = '0' + ctSec;
  
      if (isNaN(ctMin) || isNaN(ctSec))
        $insTime.text('--:--');
      else
        $insTime.text(ctMin + ':' + ctSec);
  
      $insTime.css({ 'left': seekT, 'margin-left': '-21px' }).fadeIn(0);
    });
  
    // 재생 바 마우스 리브
    function hideHover() {
      $insTime.text('00:00').css({ 'left': '0px', 'margin-left': '0px' }).fadeOut(0);
    };

    $sArea.mouseleave(function () {
      hideHover();
    });
  
    // 재생 바 클릭
    $sArea.on('click', function () {
      audio.currentTime = seekLoc
      $seekBar.width(seekT);
      $dot.css({
          left: seekT
      });
      hideHover();
    });
  
  
    function initPlayer() {
      time();
      $list.on('click', list);
      $playBtn.on('click', playBtn);
      $nextBtn.on('click', nextBtn);
      $prevBtn.on('click', prevBtn);
      $(audio).on('timeupdate', time);
    };
  
    initPlayer();
  };
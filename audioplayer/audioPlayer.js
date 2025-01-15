$(function () {
    playerFn();
});

function playerFn() {
    const playBtn = $('.play'),
        nextBtn = $('.next'),
        prevBtn = $('.prev'),
        muteBtn = $('.mute'),
        shuffleBtn = $('.shuffle'),
        track = $('.track'),
        name = $('.name'),
        list = $('li'),
        slider = $('.slider'),
        tProgress = $('.current_time'),
        trackLength = $('.track_length'),
        seekBar = $('#seek-bar'),
        dot = $('.dot');
    let playIdx = 0,
        isShuffle = false,
        curMin,
        curSec,
        durMin,
        durSec,
        playProgress;

    let aud = {
        init: function () {
            track.text(audioInfo[playIdx][1]);
            name.text(audioInfo[playIdx][2]);
            for (let i = 0; i < list.length; i++) {
                list.eq(i).find('p').text(audioInfo[i][1]);
            };
        },
        info: function () {
            track.text(audioInfo[playIdx][1]);
            name.text(audioInfo[playIdx][2]);

            // for (let i = 0; i < list.length; i++) {
            //     list.eq(i).find('p').text(audioInfo[i][1]);
            // }
        },
        play: function () {
            let getText = playBtn.text();

            $('li').removeClass('active').eq(playIdx).addClass('active');
            

            playBtn.addClass('paused');
            playBtn.text('pause');


            audio.src = audioInfo[playIdx][0];
            audio.play();
            console.log(audio.volume);
            
            aud.info();
            aud.audioEnd();
            isShuffle = false;

            // switch (getText) {
            //     case 'play':
            //         console.log('switch play');
            //         playBtn.text('pause');
            //         audio.play();
            //         break;
            //     case 'pause':
            //         console.log('switch pause');
            //         playBtn.text('play');
            //         audio.pause();
            //         break;
            //     default:
            //         console.log('?????');
            //         break;
            // }
        },
        pause: function () {
            playBtn.removeClass('paused');
            playBtn.text('play');
            audio.pause();
        },
        next: function () {
            playIdx < 9 ? playIdx++ : playIdx = 0;
            aud.play();
            // $('p').text(playIdx);
        },
        prev: function () {
            playIdx >= 1 ? playIdx-- : playIdx = 9;
            aud.play();
            // $('p').text(playIdx);
        },
        shuffle: function () {
            isShuffle = true;
            let shuIdx = Math.floor(Math.random() * audioInfo.length);
            let shuffleArr = [...audioInfo].sort(() => Math.random() - 0.5);
            audioInfo.sort(() => Math.random() - 0.5);
            // array shuffle

            console.log('shuffleArr', shuffleArr);
            console.log('shuIdx', shuIdx);

            for (let i = 0; i < list.length; i++) {
                list.eq(i).find('p').text(audioInfo[i][1]);
            }

            playIdx = 0;
            aud.play();
        },
        time: function () {
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
                tProgress.text('00:00');
            } else {
                tProgress.text(curMin + ':' + curSec);
            };

            if (isNaN(durMin) || isNaN(durSec)) {
                trackLength.text('00:00');
            } else {
                trackLength.text(durMin + ':' + durSec);
            }

            seekBar.width(playProgress + '%');
            dot.css({ left: playProgress + '%' });

            if (playProgress == 100) {
                seekBar.width(0);
                dot.css({ left: playProgress + '%' });
                tProgress.text('00:00');
            };
        },
        mute: function(){
            muteBtn.toggleClass('on');
            if(muteBtn.hasClass('on')){
                muteBtn.text('on');
                audio.volume = 0;
            } else {
                muteBtn.text('off')
                audio.volume = 1;
            };
        },
        audioEnd: function () {
            audio.onended = function () {
                playIdx < 9 ? playIdx++ : playIdx = 0;
                aud.play();

                // track info change

                // list setting

            }
        }
    };

    const sliderEvent = function (e) {
        console.log('slider function', e.type);

        let slider = {
            over: function () {
                console.log('slider over');
            },
            leave: function () {
                console.log('slider leave');
            },
            click: function () {
                console.log('slider click');
            }
        };

        switch (e.type) {
            case 'click':
                console.log('click');
                break;
            case 'mouseover':
                slider.over();
                break;
            case 'mouseleave':
                break;
        };
    }

    aud.init();

    playBtn.on('click', function(){
        playBtn.hasClass('paused') ? aud.pause() : aud.play();
    });
    nextBtn.on('click', aud.next);
    prevBtn.on('click', aud.prev);
    muteBtn.on('click', aud.mute);
    shuffleBtn.on('click', aud.shuffle);
    $(audio).on('timeupdate', aud.time);

    slider.on('click mouseleave mouseover', sliderEvent);

};
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
        list = $('#track_list'),
        listItem = list.find('li'),
        sArea = $('.progress'),
        dot = $('.dot'),
        sHover = $('#s-hover'),
        seekBar = $('#seek-bar'),
        tProgress = $('.current_time'),
        trackLength = $('.track_length');

    let playIdx = 0,
        curMin,
        curSec,
        durMin,
        durSec,
        playProgress,
        item = '';

    let aud = {
        init: function () {
            for (let i = 0; i < audioInfo.length; i++) {
                item += `<li><p>${audioInfo[i][1]}</p> <span>${audioInfo[i][2]}</span></li>`
            };
            list.append(item);

            aud.info();
        },
        info: function () {
            track.text(audioInfo[playIdx][1]);
            name.text(audioInfo[playIdx][2]);

            for (let i = 0; i < audioInfo.length; i++) {
                list.find('li').eq(i).find('p').text(audioInfo[i][1]);
                list.find('li').eq(i).find('span').text(audioInfo[i][2]);
            }
        },
        play: function () {
            $('li').removeClass('active').eq(playIdx).addClass('active');

            playBtn.addClass('paused');
            playBtn.text('pause');

            audio.src = audioInfo[playIdx][0];
            audio.play();
            aud.info();
            aud.audioEnd();
        },
        pause: function () {
            playBtn.removeClass('paused');
            playBtn.text('play');
            audio.pause();
        },
        next: function () {
            playIdx < 9 ? playIdx++ : playIdx = 0;
            aud.play();
        },
        prev: function () {
            playIdx >= 1 ? playIdx-- : playIdx = 9;
            aud.play();
        },
        shuffle: function () {
            audioInfo.sort(() => Math.random() - 0.5);
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
        mute: function () {
            muteBtn.toggleClass('on');
            if (muteBtn.hasClass('on')) {
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

    const progressEvent = function (e) {
        console.log('progress function', e.type);

        let progress = {
            over: function () {
                console.log('progress over');
                seekBarPos = sArea.offset();
                seekT = event.clientX - seekBarPos.left;
                seekLoc = audio.duration * (seekT / sArea.outerWidth());

                sHover.width(seekT);

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
                    $('#insTime').text('--:--');
                else
                    $('#insTime').text(ctMin + ':' + ctSec);

                $('#insTime').css({ 'left': seekT, 'margin-left': '-21px' }).fadeIn(0);
            },
            leave: function () {
                console.log('progress leave');
                $('#insTime').text('00:00').css({ 'left': '0px', 'margin-left': '0px' }).fadeOut(0);
            },
            click: function () {
                console.log('progress click');
                audio.currentTime = seekLoc
                seekBar.width(seekT);
                dot.css({
                    left: seekT
                });
                progress.leave();
            }
        };

        switch (e.type) {
            case 'click':
                console.log('click');
                break;
            case 'mouseover':
                progress.over();
                break;
            case 'mouseleave':
                break;
        };
    };

    const viewType = function () {
        let type = {
            vertical: function () {

            },
            horizontal: function () {

            },

        }
    }

    aud.init();

    playBtn.on('click', function () {
        playBtn.hasClass('paused') ? aud.pause() : aud.play();
    });
    nextBtn.on('click', aud.next);
    prevBtn.on('click', aud.prev);
    muteBtn.on('click', aud.mute);
    shuffleBtn.on('click', aud.shuffle);
    $(audio).on('timeupdate', aud.time);
    sArea.on('click mouseleave mouseover', progressEvent);

    list.find('li').on('click', function () {
        playIdx = $(this).index();
        aud.play();
    });
};
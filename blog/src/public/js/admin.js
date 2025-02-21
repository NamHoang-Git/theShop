
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

    const recentlySong = $('.row .recently')
    const latest = $('.latest')
    const singleSong = $('.row .single')
    const latestSong = $('.latest__song')

    const navLists = $$('.nav__list-item')

    const menu = $('.bar i')
    const nav = $('.nav')
    const bar = $('.bar')
    const container = $('.container')

    const imgSongBar = $('.song__bar-img') 
    const nameSongBar = $('.song__bar-name') 
    const singerSongBar = $('.song__bar-singer') 
    const audio = $('#audio')

    const volumeControl = $('.volume__control')
    const volumeSlider = $('.volume__slider')
    const volumeLine = $('.volume__line')
    const progressVolume = $('.progress')
    const maxVolume = $('.max-volume')
    const lowVolume = $('.low-volume')
    const veryLowVolume = $('.very-low-volume')
    const muteVolume = $('.mute-volume')

    const timeNow = $('.time__now')
    const timeEnd = $('.time__end')

    const playBtn = $('.toggle-play__btn');
    const player = $('.display__control.player')
    const timeLine = $('#time__line')
    const timeProgress = $('.time_progress')
    const nextBtn = $('.next__btn')
    const prevBtn = $('.prev__btn')
    const repeatBtn = $('.repeat__btn')
    const randomBtn = $('.random__btn')
    const volumeBtn = $('.volume__btn')

    const musicBar = $('.music__bar.player')

    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
        recently__songs: [
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
        ],
        latest__songs:[
            {
                number: '01',
                image: './assets/image/image_song/latest/eine_kleine.jpg',
                name: 'Eine Kleine',
                singer: 'Kenshi Yonezu',
                minute: '04:55',
                path: './assets/song/Latest/KenshiYonezuEine Kleine.mp3',
            },
            {
                number: '02',
                image: './assets/image/image_song/latest/dramaturgy.jfif',
                name: 'Dramaturgy',
                singer: 'Eve',
                minute: '04:05',
                path: './assets/song/Latest/DramaturgyEve.mp3',
            },
            {
                number: '03',
                image: './assets/image/image_song/latest/harehare_ya.jpg',
                name: 'harehare ya',
                singer: 'Sou',
                minute: '03:28',
                path: './assets/song/Latest/harehare yaver_Sou.mp3',
            },
            {
                number: '04',
                image: './assets/image/image_song/latest/KegarenoUta.jpg',
                name: 'Kegare no Uta',
                singer: 'Sou',
                minute: '04:04',
                path: './assets/song/Latest/KegarenoUta_MagoHanyu.mp3',
            },
            {
                number: '05',
                image: './assets/image/image_song/latest/kokoronashi.jpg',
                name: 'Kokoronashi',
                singer: 'Sou',
                minute: '04:32',
                path: './assets/song/Latest/KokoronashiオリジナルPV.mp3',
            },
            {
                number: '06',
                image: './assets/image/image_song/latest/lemon.jpg',
                name: 'Lemon',
                singer: 'Sou',
                minute: '04:15',
                path: './assets/song/Latest/LemonSou.mp3',
            },
            {
                number: '07',
                image: './assets/image/image_song/latest/rain_thegardenofwords.jpg',
                name: 'Rain',
                singer: 'Sou',
                minute: '05:00',
                path: './assets/song/Latest/Rain大江千里verSou.mp3',
            },
            {
                number: '08',
                image: './assets/image/image_song/latest/as_a_proof.jpg',
                name: 'As a Proof',
                singer: 'Sou',
                minute: '03:26',
                path: './assets/song/Latest/SouAs a Proof.mp3',
            },
            {
                number: '09',
                image: './assets/image/image_song/latest/fleetingdream.jpg',
                name: 'Fleeting Dream (Was It True)',
                singer: 'PARIS The Prince',
                minute: '03:08',
                path: './assets/song/Latest/Fleeting Dream.mp3',
            },
            {
                number: '10',
                image: './assets/image/image_song/latest/sharks(left me stranded).jpg',
                name: 'Sharks (Left Me Stranded)',
                singer: 'PARIS The Prince',
                minute: '03:20',
                path: './assets/song/Latest/Sharks(Left Me Stranded).mp3',
            },
            {
                number: '11',
                image: './assets/image/image_song/latest/PANO.jpg',
                name: 'PANO',
                singer: 'Zack Tabudlo',
                minute: '04:23',
                path: './assets/song/Latest/ZackTabudloPano.mp3',
            },
            {
                number: '12',
                image: './assets/image/image_song/latest/stitches.jpg',
                name: 'Stitches',
                singer: 'Conor Maynard',
                minute: '02:39',
                path: './assets/song/Latest/StitchesShawn Mendes(CoveredbyConorMaynard).mp3',
            },
            {
                number: '13',
                image: './assets/image/image_song/latest/GONE.jpg',
                name: 'GONE',
                singer: 'Rosé',
                minute: '03:26',
                path: './assets/song/Latest/ROSEGoneLyrics.mp3',
            },
            {
                number: '14',
                image: './assets/image/image_song/latest/happier.jfif',
                name: 'happier',
                singer: 'Olivia Rodrigo',
                minute: '02:56',
                path: './assets/song/Latest/OliviaRodrigohappier (Lyric Video).mp3',
            },
            {
                number: '15',
                image: './assets/image/image_song/latest/that_hilarious.jpg',
                name: 'That\'s Hilarious',
                singer: 'Charlie Puth',
                minute: '02:55',
                path: './assets/song/Latest/CharliePuth-ThatHilarious.mp3',
            },
            {
                number: '16',
                image: './assets/image/image_song/latest/badhabits.jpg',
                name: 'Bad Habits',
                singer: 'Ed Sheeran',
                minute: '03:51',
                path: './assets/song/Latest/EdSheeranBadHabits.mp3',
            },
            {
                number: '17',
                image: './assets/image/image_song/latest/blindinglights.png',
                name: 'Blinding Lights',
                singer: 'The Weeknd',
                minute: '03:23',
                path: './assets/song/Latest/TheWeekndBlindingLights(OfficialAudio).mp3',
            },
        ],
        single__songs: [
            {
                name: 'Bật Nhạc Lên',
                singer: 'HIEUTHUHAI ft. Harmonie',
                path: './assets/song/Single/HIEUTHUHAI - Bật Nhạc Lên ft. Harmonie (prod. by NEMYA).mp3',
                image: './assets/image/image_song/single/bacnhaclen.jpg'
            },
            {
                name: 'Để Dành Khi Thức Giấc',
                singer: 'SIVAN',
                path: './assets/song/Single/Để Dành Khi Thức Giấc - SIVAN (Lyrics Audio).mp3',
                image: './assets/image/image_song/single/dedanhkhithucgiac.jpg'
            },
            {
                name: 'Muốn Bên Anh Thật Không',
                singer: 'SOUTHALID',
                path: './assets/song/Single/SOUTHALID - \'Muốn Bên Anh Thật Không\' (Official Audio).mp3',
                image: './assets/image/image_song/single/muonbenanhthatkhong.jpg'
            },
            {
                name: 'ĐẠI DIỆN CHO TRÁI TIM',
                singer: 'SOUTHALID ft. MAL',
                path: './assets/song/Single/SOUTHALID - \'ĐẠI DIỆN CHO TRÁI TIM\' FEAT. MAL (AUDIO).mp3',
                image: './assets/image/image_song/single/daidienchotraitim.webp'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'negav',
                path: './assets/song/Single/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/single/saotronngemlainhuthenay.jpg'
            },
        ],
        renderRecently: function() {
            const recently = this.recently__songs.map((song, index) => {
                return `
                    <div class="col l-2-10">
                        <div class="recently__song" data-index="${index}">
                            <img class="re__song-img" src="${song.image}" alt="">
                            <div class="re__song-info">
                                <h4 class="re__song-name">${song.name}</h4>
                                <p class="re__song-singer">${song.singer}</p>
                            </div>
                        </div>
                    </div>
                `
            });
            recentlySong.innerHTML = recently.join('');
        },
        renderLatest: function() {
            const _latest = this.latest__songs.map((song, index) => {
                return `
                    <div class="latest__song" data-index="${index}">
                        <div class="latest__song-info">
                            <p class="song__number">${song.number}</p>
                            <img src="${song.image}" alt="" class="latest__img">
                            <p class="song__text">${song.name}</p>
                        </div>
                        <div class="latest__song_time">
                            <p class="song__minute">${song.minute}</p>
                        </div>
                        <i class="fa-solid fa-music"></i>
                    </div>
                `
            });
            latest.innerHTML = _latest.join('');
        },
        renderSingle: function() {
            const single = this.single__songs.map((song, index) => {
                return `
                    <div class="col l-2-10">
                        <div class="single__song" data-index="${index}">
                            <img class="si__song-img" src="${song.image}" alt="">
                        </div>
                    </div>
                `
            });
            singleSong.innerHTML = single.join('');
        },
        defineProperties: function() {
            Object.defineProperty(this, 'currentSongRecently', {
                get: function() {
                    return this.recently__songs[this.currentIndex];
                }
            });

            Object.defineProperty(this, 'currentSongLatest', {
                get: function() {
                    return this.latest__songs[this.currentIndex];
                }
            });

            Object.defineProperty(this, 'currentSongSingle', {
                get: function() {
                    return this.single__songs[this.currentIndex];
                }
            });
        },
        loadRecentlyCurrentSong: function() {
            nameSongBar.textContent = this.currentSongRecently.name;
            singerSongBar.textContent = this.currentSongRecently.singer;
            imgSongBar.src = `${this.currentSongRecently.image}`;
            audio.src = this.currentSongRecently.path; 
        },
        loadLatestCurrentSong: function() {
            nameSongBar.textContent = this.currentSongLatest.name;
            singerSongBar.textContent = this.currentSongLatest.singer;
            imgSongBar.src = `${this.currentSongLatest.image}`;
            audio.src = this.currentSongLatest.path; 
            timeEnd.textContent = this.currentSongLatest.minute;
        },
        loadSingleCurrentSong: function() {
            nameSongBar.textContent = this.currentSongSingle.name;
            singerSongBar.textContent = this.currentSongSingle.singer;
            imgSongBar.src = `${this.currentSongSingle.image}`;
            audio.src = this.currentSongSingle.path; 
        },
        scrollToActiveSong: function() {
            setTimeout(() => {
                $('.latest__song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }, 200);
        },
        scrollBorderBar: function() {
            window.onscroll = function(e) {
                if (window.scrollY > 0) {
                    bar.classList.add('bar__border');
                } else {
                    bar.classList.remove('bar__border');
                };
            };
        },
        navListClick: function() {
            // NavList 
            navLists.forEach((item) => {
                item.onclick = function() {
                    $('.nav__list-item.active').classList.remove('active')
                    this.classList.add('active');
                };
            });
        },
        activeToMenu: function() {
            menu.onclick = function() {
                nav.classList.toggle('active')
                bar.classList.toggle('active')
                container.classList.toggle('active')
                musicBar.classList.toggle('active')
            }
        },
        handleEvents: function() {
            const _this = this;
            duration = 10000;

            // Xu ly khi Click Play
            playBtn.onclick = function() {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                };
            };

            // Khi bai hat play
            audio.onplay = function() {
                _this.isPlaying = true;
                player.classList.add('playing');
            };

            // Khi bai hat pause
            audio.onpause = function() {
                _this.isPlaying = false;
                player.classList.remove('playing');
            };

            // Khi tien do bai hat thay doi
            audio.ontimeupdate = function() {;
                // Current Time
                var currentHours = Math.floor(audio.currentTime / 3600);
                var currentMinutes = Math.floor(audio.currentTime / 60 % 60);
                var currentSeconds = Math.floor(audio.currentTime % 60);

                timeNow.textContent = `${currentHours ? currentHours + ':' : ''}${currentMinutes >= 10 ? currentMinutes : '0' + currentMinutes}:${currentSeconds >= 10 ? currentSeconds : '0' + currentSeconds}`;

                // Time Line
                if (audio.duration) {
                    const timeLinePercent = Math.floor(audio.currentTime / audio.duration * 100);
                    timeProgress.value = timeLine.value;
                    timeLine.value = timeLinePercent;
                };
            };

            // Xy ly khi tua
            timeLine.oninput = function(e) {
                const seekTime = audio.duration * e.target.value / 100;
                audio.currentTime = seekTime;
            };

            // Khi next
            nextBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong(); 
                } else {
                    _this.nextSong();
                };
                audio.play();
                _this.scrollToActiveSong();
            };

            // Khi prev
            prevBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong(); 
                } else {
                    _this.prevSong();
                };
                audio.play();
                _this.scrollToActiveSong();
            };

            // Random Button Bat / Tat 
            randomBtn.onclick = function(e) {
                _this.isRandom = !_this.isRandom;
                randomBtn.classList.toggle('active', _this.isRandom);
            };

            // Repeat Button Bat / Tat
            repeatBtn.onclick = function(e) {
                _this.isRepeat = !_this.isRepeat;
                repeatBtn.classList.toggle('active', _this.isRepeat);
            };

            // Xu ly next song khi audio ended or repeat
            audio.onended = function() {
                if (_this.isRepeat) {
                    audio.play();
                } else {
                    nextBtn.click();
                };
            };

            // Xu ly Volume
            volumeLine.oninput = function() {
                progressVolume.value = volumeLine.value;
                audio.volume = volumeLine.value / 100
                if (volumeLine.value <= 0) {
                    maxVolume.style.display = 'none';
                    lowVolume.style.display = 'none';
                    veryLowVolume.style.display = 'none';
                    muteVolume.style.display = 'inline-block';
                } else if (volumeLine.value <= 25) {
                    audio.muted = false;
                    maxVolume.style.display = 'none';
                    lowVolume.style.display = 'none';
                    veryLowVolume.style.display = 'inline-block';
                    muteVolume.style.display = 'none';
                } else if (volumeLine.value <= 60) {
                    audio.muted = false;
                    maxVolume.style.display = 'none';
                    lowVolume.style.display = 'inline-block';
                    veryLowVolume.style.display = 'none';
                    muteVolume.style.display = 'none';
                } else {
                    audio.muted = false;
                    maxVolume.style.display = 'inline-block';
                    lowVolume.style.display = 'none';
                    veryLowVolume.style.display = 'none';
                    muteVolume.style.display = 'none';
                }
            };

                // Value
            setInterval(function() {
                progressVolume.value = volumeLine.value;
            });
            
                // Xu ly icon / volume
            volumeBtn.onclick = function() {
                audio.muted = !audio.muted;
                if (audio.muted) {
                    maxVolume.style.display = 'none';
                    lowVolume.style.display = 'none';
                    veryLowVolume.style.display = 'none';
                    muteVolume.style.display = 'inline-block';
                    volumeLine.value = '0';
                } else {
                    volumeLine.value = audio.volume * 100;
                    if (audio.volume > 0 && audio.volume <= 0.25) {
                        maxVolume.style.display = 'none';
                        lowVolume.style.display = 'none';
                        veryLowVolume.style.display = 'inline-block';
                        muteVolume.style.display = 'none';
                    } else if (audio.volume > 0.25 && audio.volume <= 0.6) {
                        maxVolume.style.display = 'none';
                        lowVolume.style.display = 'inline-block';
                        veryLowVolume.style.display = 'none';
                        muteVolume.style.display = 'none';
                    } else if (audio.volume > 0.6 && audio.volume <= 1) {
                        maxVolume.style.display = 'inline-block';
                        lowVolume.style.display = 'none';
                        veryLowVolume.style.display = 'none';
                        muteVolume.style.display = 'none';
                    }; 
                };
            };

            // Lang nghe hanh vi click vao playlist
                // Recently Song
            recentlySong.onclick = function(e) {
                const recentlyNotPlaying = e.target.closest('.recently__song:not(.playing)');
                const recentlyPlaying = e.target.closest('.recently__song.playing');
                var recentlySongs = $$('.recently__song')
                recentlySongs[_this.currentIndex].classList.remove('playing');
                if (recentlyNotPlaying || recentlyPlaying) {
                    if (recentlyNotPlaying) {
                        _this.currentIndex = Number(recentlyNotPlaying.dataset.index);
                        recentlySongs[_this.currentIndex].classList.add('playing');
                        _this.loadRecentlyCurrentSong();
                        audio.play();
                        musicBar.classList.add('playing');
                    };
                    if (recentlyPlaying) {
                        audio.pause();
                        recentlySongs[_this.currentIndex].classList.remove('playing');
                        musicBar.classList.remove('playing');
                    };
                }
                if (recentlyNode) {
                    _this.currentIndex = Number(recentlyNode.dataset.index);
                    _this.loadRecentlyCurrentSong();
                    _this.renderRecently();
                    audio.play();
                    musicBar.classList.add('playing');
                };
            };
                // Latest Song
            latest.onclick = function(e) {
                const latestNotActive = e.target.closest('.latest__song:not(.active)');
                const latestActive = e.target.closest('.latest__song.active');
                var latestSongs = $$('.latest__song')
                latestSongs[_this.currentIndex].classList.remove('active');
                if (latestNotActive || latestActive) {
                    // Doi voi the khong co class active (Bat active)
                    if (latestNotActive) {
                        _this.currentIndex = Number(latestNotActive.dataset.index);
                        latestSongs[_this.currentIndex].classList.add('active');
                        _this.loadLatestCurrentSong();
                        audio.play();
                        musicBar.classList.add('playing');
                    };
                    // Doi voi the co class active (Tat active)
                    if (latestActive) {
                        audio.pause();
                        musicBar.classList.remove('playing');
                    };
                };

                }
                // Single Song
            singleSong.onclick = function(e) {
                const singleNotPlaying = e.target.closest('.single__song:not(.playing)');
                const singlePlaying = e.target.closest('.single__song.playing');
                var singleSongs = $$('.single__song')
                singleSongs[_this.currentIndex].classList.remove('playing');

                if (singleNotPlaying || singlePlaying) {
                    if (singleNotPlaying) {
                        _this.currentIndex = Number(singleNotPlaying.dataset.index);
                        singleSongs[_this.currentIndex].classList.add('playing');
                        _this.loadSingleCurrentSong();
                        audio.play();
                        musicBar.classList.add('playing');
                    };
                    if (singlePlaying) {
                        audio.pause();
                        singleSongs[_this.currentIndex].classList.remove('playing');
                        musicBar.classList.remove('playing');
                    };
                }
            };
        },

        start: function() {
            this.navListClick();
            this.scrollBorderBar();
            this.activeToMenu();

            this.renderRecently();
            this.renderLatest();
            this.renderSingle();

            this.defineProperties();

            this.loadRecentlyCurrentSong();
            this.loadLatestCurrentSong();
            this.loadSingleCurrentSong();

            this.handleEvents();
        },
        nextSong: function() {
            let latestSongs = $$('.latest__song')
            latestSongs[this.currentIndex].classList.remove('active');

            this.currentIndex++;
            if (this.currentIndex >= this.latest__songs.length) {
                this.currentIndex = 0;
            };

            latestSongs[this.currentIndex].classList.add('active');
            this.loadLatestCurrentSong();
        },
        prevSong: function() {
            let latestSongs = $$('.latest__song')
            latestSongs[this.currentIndex].classList.remove('active');

            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.latest__songs.length - 1;
            };

            latestSongs[this.currentIndex].classList.add('active');
            this.loadLatestCurrentSong();
        },
        playRandomSong: function() {
            let latestSongs = $$('.latest__song')
            latestSongs[this.currentIndex].classList.remove('active');

            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * this.latest__songs.length);
            } while (newIndex === this.currentIndex);

            this.currentIndex = newIndex;
            latestSongs[this.currentIndex].classList.add('active');
            this.loadLatestCurrentSong();
        },
    }
    // Start
    app.start();
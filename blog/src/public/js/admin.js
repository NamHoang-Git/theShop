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
    const containerCartFooter = $('.container__cart-footer')
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
        // scrollBorderCartFooter: function() {
        //     window.addEventListener("scroll", function () {
        //         if (containerCartFooter.getBoundingClientRect().top >= window.innerHeight) {
        //             containerCartFooter.classList.add("active");
        //         } else {
        //             containerCartFooter.classList.remove("active");
        //         }
        //     });
        // },
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
        },

        start: function() {
            this.navListClick();
            this.scrollBorderBar();
            this.activeToMenu();

            this.defineProperties();

            this.handleEvents();
        },
    }
    // Start
    app.start();
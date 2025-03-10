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
    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
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
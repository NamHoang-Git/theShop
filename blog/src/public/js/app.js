"use strict";
document.addEventListener("DOMContentLoaded", function() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const navLists = $$('.account__nav-item .account__nav-item-acc ul > a')

    const app = {
        navListClick: function() {
            navLists.forEach((item) => {
                item.onclick = function() {
                    $('.account__nav-item .account__nav-item-acc ul > a.active').classList.remove('active')
                    this.classList.add('active');
                };
            });
        },
    
        start: function() {
            this.navListClick();
        }
    }
    app.start();

    // Loai san pham
    if (jQuery("#page-create").length) { 
        console.log("Running script for create.hbs...");
        jQuery('#productType').select2({
            tags: true,
            tokenSeparators: [','], // Loại bỏ dấu cách, chỉ tách khi nhấn dấu phẩy
            placeholder: "Nhập loại sản phẩm"
        });

        // Chặn sự kiện khi nhấn Space (dấu cách)
        jQuery('#productType').on('keypress', function(e) {
            if (e.which === 32) { // 32 là mã ASCII của phím Space
                e.preventDefault(); // Ngăn chặn việc tạo tag khi nhấn Space
            }
        });
    }
});

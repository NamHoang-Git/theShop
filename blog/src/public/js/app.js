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

    // Hàm định dạng tiền tệ
    function formatCurrency(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
    }

    // Hàm cập nhật số tiền cho từng sản phẩm
    function updateTotalPerItem(productId, quantity) {
        const row = document.querySelector(`.quantity-input[data-product-id="${productId}"]`).closest('tr');
        if (!row) return; // Kiểm tra nếu row không tồn tại
        const checkbox = row.querySelector('.cart__check-input');
        const price = parseInt(checkbox.getAttribute('data-price')) || 0;
        const totalElement = row.querySelector('.total-per-item');
        if (totalElement) {
            const newTotal = price * quantity;
            totalElement.textContent = formatCurrency(newTotal) + '₫';
            checkbox.setAttribute('data-quantity', quantity); // Cập nhật data-quantity
        }
    }

    // Hàm tính tổng và số lượng sản phẩm được chọn
    function updateSummary() {
        const checkedItems = document.querySelectorAll('.cart__check-input:checked');
        let totalCount = checkedItems.length; // Số sản phẩm được check
        let totalAmount = 0;

        checkedItems.forEach(checkbox => {
            const row = checkbox.closest('tr');
            const price = parseInt(checkbox.getAttribute('data-price')) || 0;
            const quantity = parseInt(checkbox.getAttribute('data-quantity')) || 1;
            totalAmount += price * quantity;
        });

        document.getElementById('selected-count').textContent = totalCount;
        document.getElementById('total-amount').textContent = formatCurrency(totalAmount);
    }

    // Lắng nghe sự kiện thay đổi checkbox
    document.querySelectorAll('.cart__check-input').forEach(checkbox => {
        checkbox.addEventListener('change', updateSummary);
    });

    // Xử lý tăng/giảm số lượng
    document.querySelectorAll('.increase-btn, .decrease-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            const quantityInput = document.querySelector(`.quantity-input[data-product-id="${productId}"]`);
            let quantity = parseInt(quantityInput.value) || 1;

            if (this.classList.contains('increase-btn')) {
                quantity += 1;
            } else if (this.classList.contains('decrease-btn') && quantity > 1) {
                quantity -= 1;
            }

            // Gửi yêu cầu cập nhật số lượng lên server
            fetch(`/me/cart/update-quantity/${productId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    quantityInput.value = quantity;
                    updateTotalPerItem(productId, quantity); // Cập nhật số tiền cho sản phẩm
                    updateSummary(); // Cập nhật tổng
                } else {
                    console.error('Cập nhật số lượng thất bại:', data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    });

    // Xử lý nhập số lượng trực tiếp
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function () {
            const productId = this.getAttribute('data-product-id');
            let quantity = parseInt(this.value) || 1;
            if (quantity < 1) quantity = 1;
            this.value = quantity;

            // Gửi yêu cầu cập nhật số lượng lên server
            fetch(`/me/cart/update-quantity/${productId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    updateTotalPerItem(productId, quantity); // Cập nhật số tiền
                    updateSummary(); // Cập nhật tổng
                } else {
                    console.error('Cập nhật số lượng thất bại:', data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    });

    // Xử lý xóa sản phẩm
    document.querySelectorAll('.operation__close-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            const row = this.closest('tr');
            fetch(`/me/cart/remove/${productId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    row.remove(); // Xóa hàng khỏi DOM
                    updateSummary(); // Cập nhật tổng
                } else {
                    console.error('Xóa sản phẩm thất bại:', data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    });

    // Khởi tạo lần đầu
    updateSummary();
});

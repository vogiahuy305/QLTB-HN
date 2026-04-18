document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const overlay = document.getElementById('overlay');
    const navItems = document.querySelectorAll('.sidebar-nav li');

    // 1. Xử lý đóng/mở menu trên Mobile
    const toggleMenu = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    mobileToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // 2. Xử lý chuyển đổi trạng thái Active khi click
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa class active ở tất cả các mục
            navItems.forEach(el => el.classList.remove('active'));
            
            // Thêm class active vào mục vừa chọn
            this.classList.add('active');

            // Nếu đang ở mobile, click xong thì đóng menu luôn
            if (window.innerWidth <= 768) {
                toggleMenu();
            }

            // (Tùy chọn) In ra trang đang chọn để kiểm tra logic
            console.log("Đang chuyển sang trang:", this.dataset.page);
        });
    });
});
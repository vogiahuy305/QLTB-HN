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

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('addDeviceModal');
    const openBtn = document.querySelector('.btn-primary'); // Nút "Thêm thiết bị" ở main-content
    const closeBtn = document.querySelector('.close-modal');
    const cancelBtn = document.getElementById('btnCancel');
    const form = document.getElementById('addDeviceForm');

    // Hàm mở Modal
    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    // Hàm đóng Modal
    const closeModal = () => {
        modal.classList.remove('active');
        form.reset(); // Xóa dữ liệu cũ trong form
    };

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    // Đóng khi click ra ngoài hộp thoại
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Xử lý gửi form (Submit)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Lấy dữ liệu từ các ô input
        const newDevice = {
            name: document.getElementById('deviceName').value,
            sku: document.getElementById('deviceSku').value,
            category: document.getElementById('deviceCategory').value,
            stock: document.getElementById('deviceStock').value
        };

        console.log("Dữ liệu thiết bị mới:", newDevice);
        
        // Ở đây bạn sẽ gọi API gửi dữ liệu lên server (đã học ở bước trước)
        
        alert("Đã thêm thiết bị thành công!");
        closeModal();
    });
});
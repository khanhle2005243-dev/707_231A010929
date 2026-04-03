// Logic xử lý chung cho toàn bộ trang web
console.log("Website của Lê Khanh đã sẵn sàng!");

// Hàm hỗ trợ hiển thị Modal Alert (có thể dùng cho BT3)
function showModal(message) {
    alert(message); // Đề bài yêu cầu modal alert đơn giản
}

// Logic bảo mật dữ liệu cục bộ (BT2)
function saveToLocal(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error("Lỗi lưu LocalStorage:", e);
        return false;
    }
}
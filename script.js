// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {

    // جلب كل أزرار واتساب
    const buttons = document.querySelectorAll("a[href*='wa.me']");

    buttons.forEach(button => {
        button.addEventListener("click", function (e) {

            // منع الفتح الافتراضي
            e.preventDefault();

            // جلب اسم المنتج والسعر
            const productBox = this.closest("div");
            const productName = productBox.querySelector("h3").innerText;
            const productPrice = productBox.querySelector("p").innerText;

            // نص الرسالة
            const message = `مرحبا، أريد طلب المنتج التالي:%0A${productName}%0A${productPrice}`;

            // رقم واتساب
            const phone = "212780894284";

            // فتح واتساب مع الرسالة
            const whatsappURL = `https://wa.me/${phone}?text=${message}`;
            window.open(whatsappURL, "_blank");
        });
    });

});
const overlay = document.getElementById("overlay");
const iframe = document.getElementById("iframe");
const popup = document.querySelector(".popup");

const openPopup = (page) => {
    overlay.style.display = "block";
    iframe.src = page;
    iframe.classList.add("popup-info");
    
    popup.style.opacity = 0;
    popup.style.transition = "opacity 0.5s";
    setTimeout(() => {
        popup.style.opacity = 1;
    }, 10); // используем небольшую задержку для запуска анимации
};

document.querySelectorAll(".marker").forEach((marker, index) => {
    marker.addEventListener("click", () => {
        openPopup(`info${index + 1}.html`);
    });
});

document.getElementById("close").addEventListener("click", () => {
    popup.style.opacity = 0;
    setTimeout(() => {
        overlay.style.display = "none";
        iframe.src = "";
        popup.style.transition = "none";
    }, 500); // ожидаем завершения анимации перед скрытием попапа
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
}); // для плавного появления всей страницы
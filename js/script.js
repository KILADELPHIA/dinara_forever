// Функция для перенаправления на основную страницу
function redirectToMainPage() {
    window.location.href = "secondPage.html"; // Путь к вашей основной странице
}

// Обработчики событий для кнопок
document.getElementById('agree-btn').addEventListener('click', function() {
    alert('Спасибо, что доверилась мне');
    redirectToMainPage();
});

document.getElementById('decline-btn').addEventListener('click', function() {
    alert('Неправильный выбор, злюка)');
});

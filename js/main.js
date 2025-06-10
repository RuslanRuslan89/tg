// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Активация табов
    const tabLinks = document.querySelectorAll('.tab-nav li a');
    if (tabLinks) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Убираем активный класс у всех ссылок и контента
                tabLinks.forEach(l => l.parentElement.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');

                // Добавляем активный класс выбранному элементу
                this.parentElement.classList.add('active');
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).style.display = 'block';
            });
        });
    }

    // Мобильное меню (если нужно)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    // Прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Слайдер с отзывами (пример)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.review-card');
    const totalSlides = slides.length;

    if (slides.length > 1) {
        const nextBtn = document.getElementById('next-review');
        const prevBtn = document.getElementById('prev-review');

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateReviewSlider();
            });

            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateReviewSlider();
            });

            function updateReviewSlider() {
                slides.forEach((slide, index) => {
                    slide.style.display = index === currentSlide ? 'block' : 'none';
                });
            }

            updateReviewSlider();
        }
    }

    // Плавная прокрутка при наведении на кнопки вверх/вниз
    const scrollButtons = document.querySelectorAll('.scroll-button');
    scrollButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Форма обратной связи
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Здесь можно добавить отправку формы через AJAX
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            contactForm.reset();
        });
    }

    // Адаптивность карточек ботов
    const botCards = document.querySelectorAll('.bot-card');
    botCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Скрытие мобильного меню при клике вне его
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Пример работы с фильтрами
    const filterButtons = document.querySelectorAll('.filter-tag i');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            this.parentElement.style.display = 'none';
        });
    });
});

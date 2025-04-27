document.addEventListener('DOMContentLoaded', function() {
    // Меню бургер
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav');
    const body = document.body;
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // Эффект при скролле для шапки
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Анимация появления элементов
        animateOnScroll();
    });

    // Анимация печатающегося текста
    const typingText = document.getElementById('typing-text');
    const words = ['космоса', 'галактик', 'планет', 'звезд', 'Вселенной'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            const speed = isDeleting ? 100 : 200;
            setTimeout(type, speed);
        }
    }

    // Запуск анимации печати
    setTimeout(type, 1000);

    // Слайдер новостей
    const newsSlider = document.getElementById('news-slider');
    let newsItems = Array.from(document.querySelectorAll('.news-item'));
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function updateSlider() {
        newsItems = shuffleArray(newsItems);
        newsSlider.innerHTML = '';
        newsItems.forEach(item => newsSlider.appendChild(item));
    }
    
    // Обновление слайдера каждые 10 секунд
    setInterval(updateSlider, 10000);

    // Анимация при загрузке страницы
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Анимация при скролле
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    }

    // Инициализация анимации при загрузке
    animateOnScroll();
});
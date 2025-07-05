// تنظیمات Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // اضافه کردن پشتیبانی از لمس برای موبایل
    touchEventsTarget: 'container',
    // بهینه‌سازی عملکرد
    observer: true,
    observeParents: true
});

// استفاده از DOMContentLoaded به جای $(document).ready
document.addEventListener('DOMContentLoaded', function() {
    // استفاده از تابع throttle برای بهینه‌سازی عملکرد در موبایل
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // اضافه کردن کلاس‌های انیمیشن با استفاده از throttle
    const addPulseAnimation = throttle(function(event) {
        event.target.classList.add('animate__animated', 'animate__pulse');
    }, 200);

    const removePulseAnimation = throttle(function(event) {
        event.target.classList.remove('animate__animated', 'animate__pulse');
    }, 200);

    const addJelloAnimation = throttle(function(event) {
        event.target.classList.add('animate__animated', 'animate__jello');
    }, 200);

    const removeJelloAnimation = throttle(function(event) {
        event.target.classList.remove('animate__animated', 'animate__jello');
    }, 200);

    // اضافه کردن event listener برای موبایل و دسکتاپ
    document.querySelectorAll('.nav-item a').forEach(item => {
        item.addEventListener('mouseenter', addPulseAnimation);
        item.addEventListener('mouseleave', removePulseAnimation);
        item.addEventListener('touchstart', addPulseAnimation);
        item.addEventListener('touchend', removePulseAnimation);
    });

    document.querySelectorAll('.services a').forEach(item => {
        item.addEventListener('mouseenter', addJelloAnimation);
        item.addEventListener('mouseleave', removeJelloAnimation);
        item.addEventListener('touchstart', addJelloAnimation);
        item.addEventListener('touchend', removeJelloAnimation);
    });

    // بهبود عملکرد منوی موبایل
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
        // اضافه کردن انیمیشن نرم برای نمایش/مخفی کردن منو
        if (navbarNav.classList.contains('show')) {
            navbarNav.style.maxHeight = navbarNav.scrollHeight + 'px';
        } else {
            navbarNav.style.maxHeight = '0';
        }
    });
});

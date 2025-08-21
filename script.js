// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Инициализация иконок Lucide (если используете)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Мобильное меню (логика из предыдущих файлов)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const sidebar = document.getElementById('sidebar');

    if (mobileMenuBtn && mobileOverlay && sidebar) {
        mobileMenuBtn.addEventListener('click', function () {
            sidebar.classList.add('open');
            mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        mobileOverlay.addEventListener('click', function () {
            sidebar.classList.remove('open');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function () {
                sidebar.classList.remove('open');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 1024) {
                sidebar.classList.remove('open');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Форматирование времени
    window.formatTimeAgo = function (timestamp) {
        if (!timestamp) return 'только что';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffSec = Math.floor(diffMs / 1000);
        const diffMin = Math.floor(diffSec / 60);
        const diffHour = Math.floor(diffMin / 60);
        const diffDay = Math.floor(diffHour / 24);

        if (diffSec < 60) return 'только что';
        if (diffMin < 60) return `${diffMin} мин назад`;
        if (diffHour < 24) return `${diffHour} ч назад`;
        if (diffDay < 7) return `${diffDay} д назад`;
        return date.toLocaleDateString('ru-RU');
    };

    // Форматирование размера файла
    window.formatFileSize = function (bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
});

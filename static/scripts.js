document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    function toggleMenu() {
        const isSidebarVisible = sidebar.style.width === '250px';
        sidebar.style.width = isSidebarVisible ? '0' : '250px';
        content.style.marginLeft = isSidebarVisible ? '0' : (window.innerWidth > 768 ? '250px' : '0');
    }

    function handleResize() {
        if (window.innerWidth > 768) {
            sidebar.style.width = '250px';
            content.style.marginLeft = '250px';
        } else {
            sidebar.style.width = '0';
            content.style.marginLeft = '0';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);
});

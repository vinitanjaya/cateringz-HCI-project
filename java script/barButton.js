document.addEventListener('DOMContentLoaded', function(){
    const toggleBtn = document.querySelector('.barMenu');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
    };
});
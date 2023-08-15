import store from "./store";

// Initialize menu item events and styles

export default function initMenuEvents(){

    const menus = document.querySelectorAll('.menu');
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => store.setPage('Responsive'));

    menus.forEach(menu => {
        const subMenu = menu.querySelector('ul');
    
        // show sub menu when mouse enters 
        menu.addEventListener('mouseenter', () => subMenu.style.display = 'flex');
        subMenu.addEventListener('mouseenter', () => subMenu.style.display = 'flex');
    
        // set delay to hide sub menu (as there is a gap between menu and sub menu)
        menu.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!subMenu.matches(':hover')) {
                    subMenu.style.display = 'none';
                }
            }, 200);
        });
    
        // hide sub menu when mouse leaves
        subMenu.addEventListener('mouseleave', () => subMenu.style.display = 'none');
    
        // set styles for sub menu items
        subMenu.addEventListener('mouseover', event => {
            if (event.target.tagName === 'LI') {
                event.target.style.backgroundColor = 'rgb(223, 52, 52)';
                event.target.style.color = '#fafafa';
                event.target.style.transform = 'scale(1.04)';
            }
        });
    
        // reset styles for sub menu items
        subMenu.addEventListener('mouseout', event => {
            if (event.target.tagName === 'LI') {
                event.target.style.backgroundColor = '';
                event.target.style.color = '';
                event.target.style.transform = '';
            }
        });
    
        // toggle sub menu when menu is clicked and get the text of the clicked item
        menu.addEventListener('click', (e) => {
            subMenu.style.display = subMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        subMenu.addEventListener('click', (e) => {
            store.setPage(e.target.innerText);
        });
    });
}


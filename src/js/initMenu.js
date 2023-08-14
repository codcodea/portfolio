
export default function initMenuItems(items, subMenu) {
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        subMenu.appendChild(li);
    });
}


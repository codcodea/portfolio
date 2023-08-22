// DOM references
const pageName = document.querySelector("#page-name");
const textContent = document.querySelector("#text-content");
const links = document.querySelector("#links");
const imageAsset = document.querySelector("#asset");

// Helper functions
import initMenuItems from "./initMenu";
import initMenuEvents from "./menu";

// Databse
import db from "../db/data";

/**
 * Store class to manage the state of the application
 */

class Store {

    init = false;
    menuMap = new Map();
    page = db[1].name;

    initApp() {
        if (!this.init) {
            db.forEach(item => this.menuMap.set(item.id, item.name));   // create menu map 
            this.initMenu();                                            // init menu items
            initMenuEvents();                                           // init menu events
            this.init = true;
            this.setPage(this.page);
        }
    }

    setPage(page) {
        this.page = page;
        this.clearPage();
        pageName.innerText = page;
        textContent.innerText = db.find(item => item.name === page).description;
        links.innerHTML = this.getLinks(page);
        this.setAsset(page);
    }

    clearPage() {
        pageName.innerText = "";
        textContent.innerText = "";
        links.innerHTML = "";
        imageAsset.innerHTML = "";
    }

    getLinks(page) {
        const links = db.find(item => item.name === page).links;
        const numberOfKeys = Object.keys(links).length;
    
        let html = '';
        let counter = 0;
    
        for (const key in links) {
            html += `<a href="${links[key]}" target="_blank">${key}</a>`;
            if (counter < numberOfKeys - 1) {
                html += " | ";
            }
            counter++;
        }
        return html;
    }

    setAsset(page) {
        const {asset, links} = db.find(item => item.name === page);
     
        if (asset.includes(".mp4")) {
            const video = document.createElement("video");
            video.src = asset;
            video.autoplay = true;
            video.playsInline = true;
            video.controls = true;
            imageAsset.appendChild(video);
    
        } else {
            const img = document.createElement("img");
            img.src = asset;
            img.alt = page;
            img.onclick = () => window.open(links.website, '_blank');
            imageAsset.appendChild(img);
        }
    }

    initMenu() {
        // set menu items
        const webMenuItems = db.filter(item => item.category === 'web').map(item => item.name);
        const desktopMenuItems = db.filter(item => item.category === 'desktop').map(item => item.name);

        const webSubMenu = document.querySelector('#webSubMenu');
        const desktopSubMenu = document.querySelector('#desktopSubMenu');

        initMenuItems(webMenuItems, webSubMenu);
        initMenuItems(desktopMenuItems, desktopSubMenu);
    }
}

const store = new Store();

export default store;
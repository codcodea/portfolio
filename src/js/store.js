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
	menu = new Map();
	page = null;

	initApp() {
		db.forEach((item) => this.menu.set(item.id, item.name));
		this.initMenu();
		initMenuEvents();
		this.init = true;
		this.setPage(db[0].name);
	}

	setPage(page) {

        if (page == this.page) {
            return
        }

		const transform = () => {
            this.clearPage();
			pageName.innerText = page;
			textContent.innerText = db.find((item) => item.name === page).description;
			links.appendChild(this.getLinks(page));
			this.setAsset(page);
		};
        
		if (!document.startViewTransition) return transform();
	    document.startViewTransition(() => transform())
	}

	clearPage() {
		pageName.innerText = "";
		textContent.innerText = "";
		links.innerHTML = "";
		imageAsset.innerHTML = "";
	}

	getLinks(page) {
		const links = db.find((item) => item.name === page).links;
		const div = document.createElement("div");

		for (const key in links) {
			const button = document.createElement("button");
			button.innerText = key;
			button.onclick = () => window.open(links[key], "_self");
			div.appendChild(button);
		}
		return div;
	}

	setAsset(page) {
		const { asset, links, width, height } = db.find((item) => item.name === page);

		if (asset.includes(".mp4")) {
			const video = document.createElement("video");
			video.src = asset;
			video.autoplay = true;
			video.playsInline = true;
			video.controls = true;
			video.volume = 0;
			imageAsset.appendChild(video);
		} else {
			const img = document.createElement("img");
			img.src = asset;
			img.alt = page;
			img.onclick = () => window.open(links.website, "_self");
			imageAsset.appendChild(img);
		}

        this.page = page;
	}

	initMenu() {
		const webMenuItems = db.filter((item) => item.category === "web").map((item) => item.name);
		const desktopMenuItems = db.filter((item) => item.category === "desktop").map((item) => item.name);

		const webSubMenu = document.querySelector("#webSubMenu");
		const desktopSubMenu = document.querySelector("#desktopSubMenu");

		initMenuItems(webMenuItems, webSubMenu);
		initMenuItems(desktopMenuItems, desktopSubMenu);
	}
}

const store = new Store();

export default store;

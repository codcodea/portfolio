
const db = [
    {
        id: 1,
        category: 'web',
        name: 'Responsive web',
        description: 'This is a responsive web component library built using the Web Components API. The purpose is to utilize and compare native web technologies with popular frameworks like React, Angular, and Vue.',
        links: {
            github: 'https://github.com/codcodea/responsive',
            mozilla: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
            web: 'web.webben.dev',
        },
        asset: 'responsive.png',
    },
    {
        id: 2,
        category: 'web',
        name: 'Audiophile',
        description: 'Audiophile is an e-commerce website built with React and Redux. It is a fully responsive website that allows users to browse through a collection of headphones and speakers. Users can add items to their cart and checkout using Stripe.',
        links: {
            github: 'https://github.com/codcodea/audiophile',
            web: 'https://audiophile-6z8v.vercel.app/',
        },
        asset: 'audiophile.png',
    },
    {
        id: 3,
        category: 'web',
        name: 'Huepicker.com',
        description: 'Huepicker.com is a color picker tool built with React and Redux. It allows users to pick a color and get the corresponding hue, saturation, and lightness values. Users can also copy the color code to their clipboard.',
        links: {
            github: '',
            web: 'https://huepicker.com/',
        },
        asset: 'huepicker.mp4',
    },
    {
        id: 4,
        category: 'web',
        name: 'iReggae Chat',
        description: 'iReggae Chat is a chat application built with React and Redux. It is a fully responsive website that allows users to create a chat room and chat with other users in real-time. Users can also send images and emojis.',
        links: {
            github: '',
            web: 'https://ireggae-chat.vercel.app/',
        },
        asset: 'reggae.mp4',
    },
    {
        id: 5,
        category: 'web',
        name: 'Sneaker store',
        description: 'Sneaker store is an e-commerce website built with React and Redux. It is a fully responsive website that allows users to browse through a collection of sneakers. Users can add items to their cart and checkout using Stripe.',
        links: {
            web: 'https://store.fiveby7.com/',
        },
        asset: 'sneaker.png',
    },
    {
        id: 6,
        category: 'desktop',
        name: 'Table JavaFX',
        description: 'Table JavaFX is a desktop application built with JavaFX. It is a fully responsive application that allows users to browse through a collection of sneakers. Users can add items to their cart and checkout using Stripe.',
        links: {},
        asset: 'table.mp4',
    },
    {
        id: 7,
        category: 'desktop',
        name: 'Today Electron.js',
        description: 'Today Electron.js is a desktop application built with Electron.js. It is a fully responsive application that allows users to browse through a collection of sneakers. Users can add items to their cart and checkout using Stripe.',
        links: {},
        asset: 'today.mp4',
    },
];

export default db;
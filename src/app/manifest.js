export default function manifest() {
    return {
        "name": "Ayush's Blog",
        "short_name": "BlogSite",
        "icons": [
            {
                "src": "/favicon-32x32.png",
                "sizes": "32x32",
                "type": "image/png"
            },
            {
                "src": "/favicon-16x16.png",
                "sizes": "16x16",
                "type": "image/png"
            },
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/android-chrome-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
        ],
        "display": "standalone"
    }
}

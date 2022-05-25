module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "IranYecan-thin": ["IranYecan-thin"],
                "IranYecan-medium": ["IranYecan-medium"],
                "IranYekan-regular": ["IranYecan-regular"],
                "IranYecan-bold": ["IranYecan-bold"],
                "IranYecan-extraBold": ["IranYecan-extraBold"],
            },
            animation: {
                'spin-slow': 'spin 1.5s ease-in-out infinite',

            }
        },

    },
    plugins: [],
}
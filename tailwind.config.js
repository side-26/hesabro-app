module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "IranYekan-regular": ["IranYecan-regular"],
                "IranYecan-bold": ["IranYecan-bold"],
                "IranYecan-extraBold": ["IranYecan-extraBold"],
                "IranYecan-thin": ["IranYecan-thin"]
            }
        },

    },
    plugins: [],
}
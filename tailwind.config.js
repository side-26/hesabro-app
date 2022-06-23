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

            },
            fontSize:{
                'xs':'0.8125rem',
                // 'sm':''
                'C-base':"1.0625rem"
            },
            borderWidth:{
                '3':'3px'
            },
            width:{
                '5.5':'1.4rem',
                '97':'30rem',
                '100':'34rem',
            }
            ,
            height:{
                '1.5':'.45rem',
                '5.5':'1.4rem',
                '100':'28rem',
                '105':'35rem'
            },
            rotate:{
                '47':'47deg'
            },
            backgroundImage:{
                'main-bg':'url("./src/assets/img/main_bg.jpg")',
            }
        },

    },
    plugins: [],
}
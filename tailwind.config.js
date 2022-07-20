module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 1.5s ease-in-out infinite',

            },
            fontSize:{
                'xs':'0.8125rem',
                // 'sm':''
                'base2':"1.0625rem",
                '4.5xl':'40px'
            },
            borderWidth:{
                '3':'3px'
            },
            width:{
                '5.5':'1.4rem',
                '97':'30rem',
                '100':'32rem',
                '105':'34rem',
            },
            minWidth:{
                '2.3':'23%',
                '2.7':'55%',
                '80%':'80%',
                '33':'32vw'
            }
            ,
            height:{
                '1.5':'.45rem',
                '5.5':'1.4rem',
                '97':'28rem',
                '98':'30rem',
                '100':'32rem',
                '103':'34rem',
                '105':'35rem',
                '57vh':'62vh'
            },
            rotate:{
                '47':'47deg'
            },
            spacing:{
                '40.5':'40%'
            }
        },

    },
  }
module.exports = {
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
   },
   purge: [
      './components/**/*.{js,ts,jsx,tsx}',
      './widgets/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}'
   ],
   theme: {
      extend: {
         colors: {
            'accent-1': '#333'
         },
         fontFamily: {
            comvortaa: ['Comvortaa', 'sans-serif'],
            comvortaaBold: ['Comvortaa Bold', 'serif'],
            lotaSemiBold: ['Lota Grotesque Semi Bold', 'sans-serif'],
            lotaBold: ['Lota Grotesque Bold', 'sans-serif'],
            lotaBlack: ['Lota Grotesque Black', 'sans-serif']
         }
      }
   },
   variants: {},
   plugins: []
}

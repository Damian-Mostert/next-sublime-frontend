import colors from './web/styles/colors.json'
import screens from './web/styles/screens.json'
import sizes from './web/styles/sizes.json'
import fonts from './web/styles/fonts.json'

export default {
    content: [
        './web/**/*.{js,ts,jsx,tsx,mdx,json}',
        './vendor/**/*.{js,ts,jsx,tsx,mdx,json}',
    ],
    theme: {
        extend: {
            colors,
            screens,
            sizes,
            fontFamily: fonts,
        },
    },
    plugins: [],
}
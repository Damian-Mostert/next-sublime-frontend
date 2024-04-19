import colors from './candy/styles/colors.json'
import screens from './candy/styles/screens.json'
import sizes from './candy/styles/sizes.json'
import fonts from './candy/styles/fonts.json'

export default {
    content: [
        './candy/**/*.{js,ts,jsx,tsx,mdx,json}',
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
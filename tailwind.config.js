import colors from './application/styles/colors.json'
import screens from './application/styles/screens.json'
import sizes from './application/styles/sizes.json'
import fonts from './application/styles/fonts.json'

export default {
    content: [
        './application/**/*.{js,ts,jsx,tsx,mdx,json}',
        './src/**/*.{js,ts,jsx,tsx,mdx,json}',
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
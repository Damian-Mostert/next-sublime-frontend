import colors from './src/lib/config/styles/colors.json'
import screens from './src/lib/config/styles/screens.json'
import sizes from './src/lib/config/styles/sizes.json'
import fonts from './src/lib/config/styles/fonts.json'

export default {
    content: [
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

if (process.env.NEXT_PUBLIC_SERVER_TYPE == 'Development') {
    require('./development')
}
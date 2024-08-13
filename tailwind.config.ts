import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                pixelify: ['var(--font-pixeilfy)'],
                inter: ['--font-inter'],
            },
            borderWidth: {
                DEFAULT: '1px',
                '0': '0',
                '1': '0.5px',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '6': '6px',
                '8': '8px',
            },
        },
        animation: {
            'spin-slow': 'spin 3s linear infinite',
        },
    },
    plugins: [],
}
export default config

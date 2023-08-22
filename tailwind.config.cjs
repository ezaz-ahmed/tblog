import defaultTheme from 'tailwindcss/defaultTheme.js'

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}

module.exports = {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			md: '670px',
			lg: '1024px',
			xl: '1500px',
		},
		extend: {
			spacing: {
				'5vw': '5vw', // pull featured sections and navbar in the margin
				'8vw': '8vw', // positions hero img inside the margin
				'10vw': '10vw', // page margin
			},
			height: {
				hero: 'min(60rem, calc(100vh - 10rem))', // screen - navbar height (lg: only)
			},
			maxWidth: {
				'8xl': '96rem',
			},
			maxHeight: {
				'50vh': '50vh', // max height for medium size hero images
				'75vh': '75vh', // max height for giant size hero images
			},
			textColor: {
				skin: {
					base: withOpacity("--color-text-base"),
					accent: withOpacity("--color-accent"),
					inverted: withOpacity("--color-fill"),
				},
			},
			backgroundColor: {
				skin: {
					fill: withOpacity("--color-fill"),
					accent: withOpacity("--color-accent"),
					inverted: withOpacity("--color-text-base"),
					card: withOpacity("--color-card"),
					"card-muted": withOpacity("--color-card-muted"),
				},
			},
			outlineColor: {
				skin: {
					fill: withOpacity("--color-accent"),
				},
			},
			borderColor: {
				skin: {
					line: withOpacity("--color-border"),
					fill: withOpacity("--color-text-base"),
					accent: withOpacity("--color-accent"),
				},
			},
			fill: {
				skin: {
					base: withOpacity("--color-text-base"),
					accent: withOpacity("--color-accent"),
				},
				transparent: "transparent",
			},
			fontFamily: {
				sans: ['Matter', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				xl: '1.375rem', // 22px
				'2xl': '1.5625rem', // 25px
				'3xl': '1.875rem', // 30px
				'4xl': '2.5rem', // 40px
				'5xl': '3.125rem', // 50px
				'6xl': '3.75rem', // 60px
				'7xl': '4.375rem', // 70px
			},
		}
	},
	plugins: [],
}

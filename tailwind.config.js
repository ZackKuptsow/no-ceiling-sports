/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./public/**/*.html',
		'./src/**/*.{html, js, jsx, ts, tsx}',
		'./build/**'
	],
	theme: {
		backgroundImage: {
			court: './public/images/court.avif',
			ball: "url('./public/images/bw_ball.avif')"
		},
		colors: {
			dark: '#161A1D',
			light: '#F5F3F4',
			'grey-light': '#D3D3D3',
			'grey-dark': '#B1A7A6',
			'red-dark': '#660708',
			'red-dark-medium': '#A4161A',
			'red-light-medium': '#BA181B',
			'red-light': '#E5383B'
		},
		extend: {
			animation: {
				fadeInUp: 'fadeInUp 1s ease-in 0s 1'
			},
			fontFamily: {
				glook: ['Glook', 'sans-serif']
			},
			keyframes: {
				fadeInUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(10%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			}
		}
	},
	plugins: []
};

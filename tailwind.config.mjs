/** @type {import('tailwindcss').Config} */
export default {
content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
theme: {
extend: {
colors: {
brand: { bg: '#141414', red: '#E50914' }
}
}
},
plugins: []
};
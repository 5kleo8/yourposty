/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                bluePrimary: '#00aae3',
                grayPrimary: '#656565',
                graySecondary: '#e9e9e9',
                blackPrimary: '#232323'
            },
        },
    },
  plugins: [],
}


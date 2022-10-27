const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./**/*.html"],
    theme: {
        screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1170px"
		},
        container:{
            center: true,
            padding: '15px'
        },
        extend: {
            colors:{
                'primary': "#2581C4",
                'secondary': "#FF9900",
                'heading': "#1C2747",
                'text': "#404E63",
                'info': "#f0f9ff",
                'peraghaph': "#555555",
                'accordion': "#2B384D",
                'border': "#e9ecf0",
                'before': "#0694c0",
                'item': "#ebf3fa",
                
                

                
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}

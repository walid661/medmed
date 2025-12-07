import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        med: {
          bg: '#F7F5F0',
          surface: '#FFFFFF',
          primary: '#58CC02',      // Green Success
          primaryDark: '#46A302',  // For 3D border
          purple: '#CE82FF',
          purpleDark: '#A661D1',
          blue: '#4ACDF8',
          blueDark: '#2CABDB',
          orange: '#FF9600',
          orangeDark: '#CC7800',
          text: '#4B5563',
          border: '#E5E7EB',
          gold: '#FFD700',
          goldDark: '#D4B200',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
export default config;

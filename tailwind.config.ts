import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'footer-bg':"url('/footer.png')",
        'hero-bg':"url('/heroBg.png')",
        'hero-bg1':"url('/heroBg1.png')",
        'sched-bg':"url('/scheduleBg.png')",
        'aboutUs-bg':"url('/aboutUs.png')",
        'aboutUs1-bg':"url('/aboutUs1.png')",

      },
    },
  },
  plugins: [],
}
export default config

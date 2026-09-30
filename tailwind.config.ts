import type {Config} from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{obsidian:'#080808',charcoal:'#151515',phoenix:'#FF5A1F',burnt:'#C94716',gold:'#C89B3C',warm:'#F5F1E8',muted:'#8A8A8A'},
fontFamily:{display:['var(--font-display)','Georgia','serif'],body:['var(--font-body)','system-ui','sans-serif']}}},plugins:[]} satisfies Config;

import type { Config } from "tailwindcss";
const config: Config = { darkMode:["class"], content:["./src/**/*.{ts,tsx}"], theme:{ extend:{ colors:{ parchment:{50:"#fffaf0",100:"#f7f0df",200:"#ead9b9",400:"#c49d4f",500:"#a7802e"}, ink:"#121212", fairway:"#1f7a3f", danger:"#b42318"}, boxShadow:{soft:"0 16px 48px rgba(17,17,17,.12)",card:"0 8px 24px rgba(17,17,17,.08)"}, borderRadius:{app:"24px"}}}, plugins:[] };
export default config;

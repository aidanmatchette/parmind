import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"ParMind", description:"Decision-first golf scoring for smarter rounds.", manifest:"/manifest.webmanifest", appleWebApp:{capable:true,title:"ParMind",statusBarStyle:"black-translucent"}, icons:{icon:"/icons/icon.svg",apple:"/icons/icon.svg"} };
export const viewport: Viewport = { width:"device-width", initialScale:1, maximumScale:1, viewportFit:"cover", themeColor:"#121212" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

import type {Metadata,Viewport} from 'next';import {Cinzel,Manrope} from 'next/font/google';import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';import Navbar from '@/components/layout/Navbar';import Footer from '@/components/layout/Footer';import {site} from '@/lib/data';
const display=Cinzel({subsets:['latin'],weight:['600','800'],variable:'--font-display',display:'swap'});
const body=Manrope({subsets:['latin'],variable:'--font-body',display:'swap'});
export const viewport:Viewport={themeColor:'#080808',viewportFit:'cover'};
export const metadata:Metadata={metadataBase:new URL(site.url),
title:{default:"Phoenix Blad Men's Wear | Premium Men's Fashion in Coimbatore",template:"%s | Phoenix Blad Men's Wear"},
description:"Phoenix Blad Men's Wear in Coimbatore, Tamil Nadu. Premium T-shirts, shirts, jeans, trousers and accessories for modern men. Wear your force.",
keywords:["men's fashion in Coimbatore","men's wear in Coimbatore","premium men's clothing Coimbatore","Phoenix Blad"],
openGraph:{type:'website',siteName:'Phoenix Blad',locale:'en_IN',images:['/images/phoenix-art.jpg']},twitter:{card:'summary_large_image'},alternates:{canonical:'/'}};
export default function RootLayout({children}:{children:React.ReactNode}){
const ld={'@context':'https://schema.org','@type':'ClothingStore',name:site.full,url:site.url,telephone:site.phoneLabel,sameAs:[site.ig],
address:{'@type':'PostalAddress',addressLocality:site.city,addressRegion:site.region,addressCountry:'IN'}};
return(<html lang="en-IN" className={`${display.variable} ${body.variable}`}><body>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
<AnnouncementBar/><Navbar/><main>{children}</main><Footer/></body></html>)}

'use client';
import Image from 'next/image';import {motion,useReducedMotion} from 'framer-motion';import Button from '@/components/ui/Button';
export default function Hero(){const r=useReducedMotion();
const a=(d:number)=>r?{}:{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.9,delay:d,ease:'easeOut' as const}};
return(<section className="relative overflow-hidden -mt-16">
<Image src="/images/phoenix-art.jpg" alt="" fill priority sizes="(min-width:768px) 60vw, 100vw" className="object-cover object-left opacity-50 md:opacity-100 md:left-[40%] [mask-image:linear-gradient(to_left,black_55%,transparent)]"/>
<div className="relative mx-auto max-w-7xl px-4 pt-32 pb-24 md:pt-40 md:pb-32 min-h-[36rem] flex flex-col justify-center">
<motion.div {...a(0)}><Image src="/images/logo.jpg" alt="Phoenix Blad Men's Wear logo" width={288} height={214} priority className="w-56 sm:w-72 -ml-4 mix-blend-lighten"/></motion.div>
<motion.h1 {...a(.2)} className="font-display font-extrabold text-6xl sm:text-8xl leading-[.95]">RISE<br/>WITH<br/><span className="gold-text">STYLE.</span></motion.h1>
<motion.p {...a(.4)} className="mt-6 max-w-md text-warm/75">Premium men’s fashion designed for modern men who move with confidence and character.</motion.p>
<motion.div {...a(.6)} className="mt-8 flex flex-wrap gap-3"><Button href="/new-arrivals">SHOP NEW ARRIVALS</Button><Button href="/men" variant="gold">EXPLORE COLLECTION</Button></motion.div></div></section>)}

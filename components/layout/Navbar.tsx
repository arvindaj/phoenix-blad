'use client';
import Link from 'next/link';import {useEffect,useState} from 'react';import {categories} from '@/lib/data';
export default function Navbar(){
const [open,setOpen]=useState(false);const [solid,setSolid]=useState(false);
useEffect(()=>{const f=()=>setSolid(window.scrollY>20);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
return(<header className={`sticky top-0 z-50 border-b transition-colors ${solid||open?'bg-obsidian/85 backdrop-blur border-white/10':'bg-transparent border-transparent'}`}>
<nav className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between" aria-label="Main">
<button className="md:hidden w-10 h-10 -ml-2" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button>
<Link href="/" className="font-display font-extrabold text-xl tracking-wide gold-text">PHOENIX BLAD</Link>
<ul className="hidden md:flex gap-6 text-xs tracking-widest text-warm/80">{categories.map(c=><li key={c.slug}><Link className="hover:text-phoenix" href={`/${c.slug}`}>{c.title.toUpperCase()}</Link></li>)}</ul>
<Link href="/contact" className="text-sm font-semibold border border-gold/60 text-gold px-4 h-9 leading-9 hover:bg-gold hover:text-obsidian transition-colors">BAG</Link></nav>
{open&&<ul id="mobile-menu" className="md:hidden px-4 pb-6 grid gap-1">{categories.map(c=><li key={c.slug}><Link onClick={()=>setOpen(false)} className="block py-3 border-b border-white/10 tracking-widest text-sm" href={`/${c.slug}`}>{c.title.toUpperCase()}</Link></li>)}</ul>}</header>)}

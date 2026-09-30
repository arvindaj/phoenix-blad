'use client';
import {useState} from 'react';import {Product,inr,wa} from '@/lib/data';
export default function ProductInfo({p}:{p:Product}){const [size,setSize]=useState('M');
return(<div><h1 className="font-display font-extrabold text-3xl sm:text-4xl">{p.name}</h1>
<p className="mt-3 text-2xl"><b className="text-gold">{inr(p.price)}</b> <s className="text-muted text-lg ml-2">{inr(p.mrp)}</s></p>
<p className="mt-4 text-warm/75">{p.description}</p><p className="mt-4 text-sm text-muted">Colour: {p.color}</p>
<fieldset className="mt-6"><legend className="font-semibold mb-2">Size</legend><div className="flex gap-2 flex-wrap">{['S','M','L','XL','XXL'].map(s=>(
<button key={s} type="button" aria-pressed={size===s} onClick={()=>setSize(s)} className={`w-12 h-12 border font-semibold ${size===s?'bg-gold text-obsidian border-gold':'border-white/30'}`}>{s}</button>))}</div></fieldset>
<a target="_blank" rel="noopener noreferrer" href={wa(`Hi Phoenix Blad, I want to order ${p.name} (size ${size}).`)} className="mt-8 flex items-center justify-center bg-phoenix hover:bg-burnt text-obsidian font-bold h-14 transition-colors">ORDER ON WHATSAPP</a></div>)}

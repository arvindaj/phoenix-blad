import Link from 'next/link';import Image from 'next/image';import {Product,inr} from '@/lib/data';
export default function ProductCard({p,priority=false}:{p:Product;priority?:boolean}){return(
<Link href={`/products/${p.slug}`} className="group block"><div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
<Image src={p.image} alt={`${p.name} in ${p.color}`} fill priority={priority} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105"/>
<span className="absolute left-3 top-3 bg-phoenix text-obsidian text-xs font-bold px-2 py-1">NEW</span></div>
<h3 className="mt-3 font-semibold leading-tight">{p.name}</h3><p className="text-sm text-muted">{p.color}</p>
<p className="mt-1"><b className="text-gold">{inr(p.price)}</b> <s className="text-muted text-sm ml-1">{inr(p.mrp)}</s></p></Link>)}

import Link from 'next/link';import {site,wa,categories} from '@/lib/data';
export default function Footer(){return(<footer className="border-t border-white/10 mt-24"><div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 sm:grid-cols-4 text-sm">
<div><p className="font-display font-extrabold text-2xl gold-text">PHOENIX BLAD</p><p className="tracking-[.3em] text-muted text-xs mt-1">MEN’S WEAR</p><p className="mt-3 text-muted">Coimbatore, Tamil Nadu, India<br/>{site.phoneLabel}</p></div>
<div><p className="font-semibold mb-2">Shop</p><ul className="text-muted leading-7">{categories.slice(1).map(c=><li key={c.slug}><Link href={`/${c.slug}`}>{c.title}</Link></li>)}</ul></div>
<div><p className="font-semibold mb-2">Explore</p><ul className="text-muted leading-7"><li><Link href="/about">About</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
<div><p className="font-semibold mb-2">Connect</p><ul className="text-muted leading-7"><li><a href={site.ig} target="_blank" rel="noopener noreferrer">Instagram {site.handle}</a></li><li><a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li></ul></div></div>
<p className="text-center text-xs text-muted pb-6">© 2026 Phoenix Blad. All rights reserved.</p></footer>)}

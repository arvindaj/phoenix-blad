import {notFound} from 'next/navigation';import type {Metadata} from 'next';import Container from '@/components/ui/Container';import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/products/ProductCard';import {categories,inCategory} from '@/lib/data';
export const dynamicParams=false;
export const generateStaticParams=()=>categories.map(c=>({category:c.slug}));
export function generateMetadata({params}:{params:{category:string}}):Metadata{const c=categories.find(x=>x.slug===params.category);if(!c)return{};
return{title:`${c.title} – Men's Fashion in Coimbatore`,description:`Shop ${c.title.toLowerCase()} at Phoenix Blad Men's Wear, Coimbatore. Premium men's clothing designed for modern style and confidence.`,alternates:{canonical:`/${c.slug}`}}}
export default function Category({params}:{params:{category:string}}){const c=categories.find(x=>x.slug===params.category);if(!c)notFound();const list=inCategory(c.slug);
return(<Container className="py-16"><SectionHeading as="h1" title={c.title.toUpperCase()} sub="Premium men’s wear from Phoenix Blad, Coimbatore."/>
{list.length?<div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">{list.map(p=><ProductCard key={p.slug} p={p}/>)}</div>:<p className="mt-10 text-muted">This collection is coming soon. Message us on WhatsApp to ask what’s next.</p>}</Container>)}

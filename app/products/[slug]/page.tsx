import {notFound} from 'next/navigation';import type {Metadata} from 'next';import Image from 'next/image';import Container from '@/components/ui/Container';
import ProductInfo from '@/components/products/ProductInfo';import ProductCard from '@/components/products/ProductCard';import {products,bySlug,site} from '@/lib/data';
export const dynamicParams=false;
export const generateStaticParams=()=>products.map(p=>({slug:p.slug}));
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const p=bySlug(params.slug);if(!p)return{};
const title=`${p.name} | Phoenix Blad Men's Wear`;const description=`Discover the ${p.name} from Phoenix Blad, premium men's wear designed for modern style and confidence.`;
return{title:{absolute:title},description,alternates:{canonical:`/products/${p.slug}`},openGraph:{title,description,type:'website',images:[p.image]},twitter:{card:'summary_large_image',title,description,images:[p.image]}}}
export default function ProductPage({params}:{params:{slug:string}}){const p=bySlug(params.slug);if(!p)notFound();
const ld=[{'@context':'https://schema.org','@type':'Product',name:p.name,description:p.description,color:p.color,image:[`${site.url}${p.image}`],brand:{'@type':'Brand',name:'Phoenix Blad'},
offers:{'@type':'Offer',priceCurrency:'INR',price:p.price,availability:'https://schema.org/InStock',url:`${site.url}/products/${p.slug}`}},
{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:site.url},{'@type':'ListItem',position:2,name:'T-Shirts',item:`${site.url}/t-shirts`},{'@type':'ListItem',position:3,name:p.name}]}];
return(<Container className="py-10"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
<div className="grid md:grid-cols-2 gap-10"><div className="relative aspect-[4/5] bg-charcoal"><Image src={p.image} alt={`${p.name} in ${p.color}`} fill priority sizes="(min-width:768px) 50vw, 100vw" className="object-cover"/></div><ProductInfo p={p}/></div>
<h2 className="font-display font-extrabold text-2xl mt-16 mb-6">YOU MAY ALSO LIKE</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{products.filter(x=>x.slug!==p.slug).slice(0,4).map(x=><ProductCard key={x.slug} p={x}/>)}</div></Container>)}

import {MetadataRoute} from 'next';import {products,categories,site} from '@/lib/data';
export default function sitemap():MetadataRoute.Sitemap{const now=new Date();return[{url:site.url,lastModified:now},...['about','contact'].map(s=>({url:`${site.url}/${s}`,lastModified:now})),
...categories.map(c=>({url:`${site.url}/${c.slug}`,lastModified:now})),...products.map(p=>({url:`${site.url}/products/${p.slug}`,lastModified:now}))]}

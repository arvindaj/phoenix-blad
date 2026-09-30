export const site={name:'Phoenix Blad',full:"Phoenix Blad Men's Wear",url:'https://phoenixblad.com',phone:'+916383368953',phoneLabel:'+91 63833 68953',
ig:'https://www.instagram.com/phoe_nixbald',dm:'https://ig.me/m/phoe_nixbald',handle:'@phoe_nixbald',city:'Coimbatore',region:'Tamil Nadu',
tagline:'Wear your force'};
export const wa=(text='Hi Phoenix Blad, I want to know more about your collection.')=>`https://wa.me/${site.phone.replace('+','')}?text=${encodeURIComponent(text)}`;
export const directions=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Phoenix Blad Men's Wear Coimbatore")}`;
export type Product={slug:string;name:string;price:number;mrp:number;color:string;category:string;image:string;description:string};
export const categories=[
{slug:'men',title:'Men',image:'/products/copper.jpg'},{slug:'new-arrivals',title:'New Arrivals',image:'/products/crane.jpg'},
{slug:'shirts',title:'Shirts',image:'/products/embossed.jpg'},{slug:'t-shirts',title:'T-Shirts',image:'/products/dark-rose.jpg'},
{slug:'trousers',title:'Trousers',image:'/products/nomad.jpg'},{slug:'jackets',title:'Jackets',image:'/products/katana.jpg'},
{slug:'accessories',title:'Accessories',image:'/products/los-angeles.jpg'}];
const d='Premium heavyweight cotton with a relaxed oversized fit. Placeholder copy: replace with real fabric and care details.';
const mk=(slug:string,name:string,price:number,mrp:number,color:string,image:string):Product=>({slug,name,price,mrp,color,category:'t-shirts',image:`/products/${image}.jpg`,description:d});
export const products:Product[]=[
mk('phoenix-crane-oversized-tee','Phoenix Crane Oversized Tee',899,1699,'Forest Green','crane'),
mk('phoenix-dark-rose-oversized-tee','Phoenix Dark Rose Oversized Tee',849,1599,'Bone','dark-rose'),
mk('phoenix-los-angeles-script-tee','Phoenix Los Angeles Script Tee',799,1499,'Black','los-angeles'),
mk('phoenix-bull-back-print-tee','Phoenix Bull Back Print Tee',799,1499,'Black','bull'),
mk('phoenix-katana-back-print-tee','Phoenix Katana Back Print Tee',799,1499,'Black','katana'),
mk('phoenix-embossed-signature-tee','Phoenix Embossed Signature Tee',849,1599,'Black','embossed'),
mk('phoenix-nomad-compass-tee','Phoenix Nomad Compass Heavy Tee',899,1699,'Washed Black','nomad'),
mk('phoenix-copper-ornate-tee','Phoenix Copper Ornate Tee',899,1699,'Copper Brown','copper'),
mk('phoenix-statement-oversized-tee','Phoenix Statement Oversized Tee',799,1499,'Forest Green','statement')];
export const bySlug=(s:string)=>products.find(p=>p.slug===s);
export const inCategory=(c:string)=>c==='men'||c==='new-arrivals'?products:products.filter(p=>p.category===c);
export const inr=(n:number)=>`₹${n.toLocaleString('en-IN')}`;

import Image from 'next/image';import Container from '@/components/ui/Container';
export default function PhoenixStory(){return(<section className="bg-charcoal"><Container className="py-20 grid md:grid-cols-2 gap-10 items-center">
<div className="relative aspect-[4/5] max-h-[32rem] w-full"><Image src="/images/phoenix-eye.jpg" alt="Phoenix eye detail from Phoenix Blad brand artwork" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover"/></div>
<div><h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">BORN FROM FIRE.<br/><span className="gold-text">BUILT TO RISE.</span></h2>
<p className="mt-5 text-warm/75 max-w-lg">Phoenix Blad represents confidence, individuality and modern men’s style. Every piece is made for men who don’t follow trends — they create their own presence. Proudly based in Coimbatore, Tamil Nadu.</p></div></Container></section>)}

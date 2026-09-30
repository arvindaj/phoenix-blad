import Container from '@/components/ui/Container';import Button from '@/components/ui/Button';import {site,wa,directions} from '@/lib/data';
export default function ContactCTA(){return(<section id="contact" className="bg-charcoal border-t border-white/10"><Container className="py-20 text-center">
<h2 className="font-display font-extrabold text-3xl sm:text-5xl">READY TO FIND YOUR STYLE?</h2><p className="mt-4 text-xl">Talk to Phoenix Blad.</p>
<p className="mt-2 text-gold font-semibold text-2xl">{site.phoneLabel}</p><p className="text-muted">Men’s wear in Coimbatore, Tamil Nadu</p>
<div className="mt-8 flex flex-wrap gap-3 justify-center"><Button href={`tel:${site.phone}`}>CALL NOW</Button><Button href={wa()} variant="gold" external>WHATSAPP US</Button><Button href={directions} variant="ghost" external>GET DIRECTIONS</Button></div></Container></section>)}

import Container from '@/components/ui/Container';import Button from '@/components/ui/Button';import {site} from '@/lib/data';
export default function ModelCampaign(){return(<section className="py-20"><Container className="text-center"><h2 className="font-display font-extrabold text-3xl sm:text-5xl">WANT TO BE PART OF THE PHOENIX?</h2>
<p className="mt-4 text-warm/75 max-w-2xl mx-auto">Fashion model, creator or photographer? DM us on Instagram for collaborations, shoots, campaigns and Phoenix Blad fashion features.</p>
<div className="mt-8 flex flex-wrap gap-3 justify-center"><Button href={site.dm} external>DM {site.handle}</Button><Button href={site.ig} variant="gold" external>FOLLOW {site.handle}</Button></div></Container></section>)}

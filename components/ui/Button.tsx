import Link from 'next/link';
const v={primary:'bg-phoenix text-obsidian hover:bg-burnt',gold:'border border-gold/60 text-gold hover:bg-gold hover:text-obsidian',ghost:'border border-white/30 hover:border-gold'};
export default function Button({href,children,variant='primary',external=false,className=''}:{href:string;children:React.ReactNode;variant?:keyof typeof v;external?:boolean;className?:string}){
const c=`inline-flex items-center justify-center px-7 py-4 font-semibold tracking-wide transition-colors ${v[variant]} ${className}`;
return external||href.startsWith('tel:')?<a href={href} className={c} {...(href.startsWith('http')?{target:'_blank',rel:'noopener noreferrer'}:{})}>{children}</a>:<Link href={href} className={c}>{children}</Link>}

export default function SectionHeading({title,sub,as:T='h2',center=false}:{title:string;sub?:string;as?:'h1'|'h2';center?:boolean}){
return <div className={center?'text-center':''}><T className="font-display font-extrabold text-3xl sm:text-5xl leading-tight">{title}</T>{sub&&<p className="mt-2 text-muted max-w-xl mx-auto">{sub}</p>}</div>}

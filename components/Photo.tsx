import Image from "next/image";
export default function Photo({ src, alt, className = "", priority = false, fit = "cover" }: { fit?: "cover" | "contain"; src: string | null; alt: string; className?: string; priority?: boolean }) {
  if (src) return <div className={`relative overflow-hidden ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes={fit === "contain" ? "90vw" : "(min-width:768px) 50vw, 100vw"} quality={90} className={fit === "contain" ? "object-contain" : "object-cover"} /></div>;
  return (
    <div role="img" aria-label={`${alt} (placeholder image)`} className={`relative overflow-hidden bg-concrete ${className}`}>
      <div className="light-shaft absolute -inset-y-10 left-1/4 w-1/3 -skew-x-12 bg-plaster/50 blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate/40 to-transparent" />
      <span className="absolute bottom-3 left-4 text-xs text-shadow/70">Photo needed: {alt}</span>
    </div>
  );
}

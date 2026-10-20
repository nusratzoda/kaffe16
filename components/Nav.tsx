"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links = [["Home","#home"],["Our Story","#story"],["Menu","#menu"],["Gallery","#gallery"],["Find Us","#find"]];
export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  const btn = "bg-moss px-5 py-2.5 text-sm text-plaster transition hover:bg-shadow active:scale-[.98]";
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-concrete/70 bg-plaster/95 backdrop-blur-sm">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-2xl tracking-tight">Kaffe <span className="text-leaf">16</span></a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="hover:text-leaf">{l}</a></li>)}
          <li><a href="#find" className={btn}>Visit Us</a></li>
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-concrete bg-plaster px-5 pb-6 pt-2 md:hidden">
          {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block border-b border-concrete/60 py-3 font-display text-2xl">{l}</a></li>)}
          <li className="pt-5"><a href="#find" onClick={() => setOpen(false)} className={`${btn} inline-block`}>Visit Us</a></li>
        </ul>
      )}
    </header>
  );
}

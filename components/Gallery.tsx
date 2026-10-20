"use client";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import { gallery } from "@/lib/content";
export default function Gallery() {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setI(null); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  return (
    <>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-2 md:auto-rows-[220px] md:grid-cols-4">
        {gallery.map((g, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={`Enlarge: ${g.alt}`} className={`group relative overflow-hidden ${g.span ?? ""}`}>
            <Photo src={g.src} alt={g.alt} className="h-full w-full transition duration-500 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-shadow/90 p-5" onClick={() => setI(null)}>
          <button className="absolute right-5 top-5 text-plaster" aria-label="Close" autoFocus>Close</button>
          <Photo src={gallery[i].src} alt={gallery[i].alt} className="h-[85vh] w-full max-w-4xl" fit="contain" />
        </div>
      )}
    </>
  );
}

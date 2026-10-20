import { Instagram, MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import { business, images, menu, mapsLink, mapsEmbed } from "@/lib/content";

const primary = "inline-block bg-moss px-6 py-3 text-sm text-plaster transition hover:bg-shadow active:scale-[.98]";
const secondary = "inline-block border border-shadow px-6 py-3 text-sm transition hover:bg-shadow hover:text-plaster active:scale-[.98]";
const tbc = <span className="italic text-slate">To be confirmed by the café</span>;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="home" className="relative flex min-h-[100svh] items-end pt-16">
          <Photo src={images.hero.src} alt={images.hero.alt} priority className="absolute inset-0" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 md:pb-24">
            <div className="max-w-2xl bg-plaster/90 p-8 md:p-12">
              <h1 className="font-display text-6xl leading-none md:text-8xl">Kaffe 16</h1>
              <p className="mt-5 font-display text-2xl md:text-3xl">Coffee in the quiet light of Jalan Panggong.</p>
              <p className="mt-3 max-w-md text-shadow/80">A specialty coffee café tucked inside the city centre, with concrete walls, natural light and greenery.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#menu" className={primary}>Explore Our Menu</a>
                <a href="#find" className={secondary}>Find Our Café</a>
              </div>
            </div>
          </div>
          <a href="#story" aria-label="Scroll to Our Story" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block"><ChevronDown className="h-6 w-6" /></a>
        </section>

        <section id="story" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
          <div className="self-center">
            <h2 className="font-display text-5xl md:text-6xl">Hidden in plain sight</h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed">Kaffe 16 sits on Jalan Panggong, in the middle of old Kuala Lumpur. From the street it is easy to miss. Inside, the space opens up into minimal modern architecture, with daylight moving across thick concrete walls.</p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed">The café serves specialty coffee from local roasters, alongside comfort food with local flavours.</p>
            <p className="mt-6 text-sm text-slate">Draft copy based on public listings. Owner approval needed. {business.openedNote}.</p>
          </div>
          <Photo src={images.story.src} alt={images.story.alt} className="aspect-[4/5] w-full" />
        </section>

        <section id="menu" className="bg-moss py-24 text-plaster md:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-5xl md:text-6xl">Menu</h2>
            <p className="mt-4 max-w-xl text-plaster/75">Sample items and prices for this design proposal. The café's real menu will replace them (edit <code>lib/content.ts</code>).</p>
            <div className="mt-14 grid gap-14 md:grid-cols-3">
              {menu.map((c) => (
                <div key={c.category}>
                  <h3 className="border-b border-plaster/30 pb-3 font-display text-3xl">{c.category}</h3>
                  {c.note && <p className="mt-3 text-sm text-plaster/70">{c.note}</p>}
                  <ul className="mt-5 space-y-5">
                    {c.items.map((m, n) => (
                      <li key={n} className="flex justify-between gap-4">
                        <div><p>{m.name}</p><p className="text-sm text-plaster/60">{m.desc}</p></div>
                        <p className="shrink-0 text-plaster/60">{m.price ?? "RM –"}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-5 md:py-32">
          <Photo src={images.signature.src} alt={images.signature.alt} className="aspect-[3/2] w-full md:col-span-3" />
          <div className="md:col-span-2">
            <h2 className="font-display text-4xl md:text-5xl">Light, concrete and green</h2>
            <p className="mt-5 leading-relaxed">The room is the main attraction: pale walls, soft shadows, plants and a calm that feels far from the street outside. Choose a seat by the window for the best light.</p>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-5 pb-24 md:pb-32">
          <h2 className="mb-8 font-display text-5xl md:text-6xl">Gallery</h2>
          <Gallery />
          
        </section>

        <section id="find" className="bg-concrete/50 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-display text-5xl md:text-6xl">Find us</h2>
              <ul className="mt-8 space-y-5">
                <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-leaf" /><span>{business.address}</span></li>
                <li className="flex gap-3"><Clock className="mt-1 h-5 w-5 shrink-0 text-leaf" /><span>{business.hours ?? tbc}</span></li>
                <li className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-leaf" /><span>{business.phone ?? tbc}</span></li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={primary}>Get Directions</a>
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" className={secondary}>Instagram</a>
              </div>
            </div>
            <iframe title="Map to Kaffe 16" src={mapsEmbed} loading="lazy" className="h-80 w-full border-0 md:h-full md:min-h-[360px]" />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24 text-center md:py-32">
          <h2 className="font-display text-4xl md:text-5xl">See what is on today</h2>
          <p className="mx-auto mt-4 max-w-md">New drinks, bakes and the light at its best are on Instagram.</p>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer" className={`${primary} mt-8`}><Instagram className="mr-2 inline h-4 w-4" />Follow @kaffe.16</a>
        </section>
      </main>

      <footer className="bg-shadow py-14 text-plaster">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:justify-between">
          <div><p className="font-display text-3xl">Kaffe 16</p><p className="mt-2 max-w-xs text-sm text-plaster/70">{business.address}</p></div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[["Home","#home"],["Our Story","#story"],["Menu","#menu"],["Gallery","#gallery"],["Find Us","#find"]].map(([l,h]) => <a key={h} href={h} className="hover:text-leaf">{l}</a>)}
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-leaf">Instagram</a>
          </nav>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-plaster/50">© {new Date().getFullYear()} Kaffe 16. Website proposal draft.</p>
      </footer>
    </>
  );
}

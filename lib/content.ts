// EDIT HERE: all copy, menu, images and business details live in this file.
// null = not verified yet. The site shows a visible "to be confirmed" note instead of inventing details.
export const business = {
  name: "Kaffe 16",
  instagram: "https://www.instagram.com/kaffe.16/",
  address: "Lot 16, Jalan Panggong, City Centre, 50000 Kuala Lumpur", // verified: multiple public listings
  openedNote: "Opened October 2020 (per public listing; owner to confirm)",
  hours: null as string | null,   // TODO owner
  phone: null as string | null,   // TODO owner
  mapsQuery: "Kaffe 16 Lot 16 Jalan Panggong Kuala Lumpur",
};
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapsQuery)}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`;

// Drop real, owner-approved photos in /public/images and set src, e.g. "/images/hero.jpg"
export const images = {
  hero:   { src: "/images/cake-and-drink.jpg" as string | null, alt: "Chestnut cake and iced drink in window light at Kaffe 16" },
  story:  { src: "/images/barista.jpg" as string | null, alt: "Barista pouring a filter coffee among plants" },
  signature: { src: "/images/croissant-tray.jpg" as string | null, alt: "Coffee and pistachio croissant in afternoon light" },
};
export const gallery: { src: string | null; alt: string; span?: string }[] = [
  { src: "/images/coffee-and-book.jpg", alt: "Black coffee beside an open book", span: "md:row-span-2" },
  { src: "/images/walnut-buns.jpg", alt: "Walnut cream buns in a basket" },
  { src: "/images/filter-brewing.jpg", alt: "Two filter coffees brewing" },
  { src: "/images/cups-pour.jpg", alt: "Coffee poured into ceramic cups", span: "md:col-span-2" },
  { src: "/images/pistachio-pastries.jpg", alt: "Pistachio pastries in the display" },
  { src: "/images/shadow-cake-drink.jpg", alt: "Cake and iced drink on a wooden table" },
];

// SAMPLE MENU: names and prices below are made up for the design proposal (not the café's real menu).
// Replace with the owner's real items and prices before going live.
export const menu = [
  { category: "Coffee", note: "Specialty coffee with beans from local roasters (per public listing).", items: [
    { name: "Filter coffee", desc: "Hand-brewed, single origin", price: "RM 18" },
    { name: "Cappuccino", desc: "Espresso, steamed milk", price: "RM 13" },
    { name: "Rose latte", desc: "Espresso, milk, rose", price: "RM 15" },
    { name: "Black coffee", desc: "Served hot", price: "RM 11" },
  ] },
  { category: "Non-coffee", note: "", items: [
    { name: "Floral cream cold drink", desc: "Layered, topped with dried flowers", price: "RM 18" },
    { name: "Iced chocolate", desc: "Rich and cold", price: "RM 14" },
  ] },
  { category: "Food and pastries", note: "Comfort food with local flavours (per public listing).", items: [
    { name: "Pistachio croissant", desc: "Baked daily", price: "RM 14" },
    { name: "Chestnut cake", desc: "Chestnut cream, chocolate", price: "RM 19" },
    { name: "Walnut cream bun", desc: "Cream, toasted walnut", price: "RM 12" },
    { name: "Salmon pesto pasta", desc: "Served warm", price: "RM 28" },
    { name: "Nasi lemak", desc: "Local classic", price: "RM 22" },
  ] },
];

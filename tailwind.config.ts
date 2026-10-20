import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { plaster: "#ECEAE5", concrete: "#C9C5BD", slate: "#8A857C", shadow: "#2E2A26", moss: "#2F3D2E", leaf: "#6B8A5A" },
    fontFamily: { display: ["var(--font-display)", "serif"], body: ["var(--font-body)", "system-ui", "sans-serif"] },
  } },
} satisfies Config;

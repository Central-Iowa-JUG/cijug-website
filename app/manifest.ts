import type { MetadataRoute } from "next"
import { SITE_DESCRIPTION, SITE_NAME } from "../lib/site"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "CIJUG",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/logos/cijug-256.png", sizes: "256x256", type: "image/png" },
      { src: "/logos/cijug-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}

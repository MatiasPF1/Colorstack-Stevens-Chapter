import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl("/mainPhotos/Colorstack-Eboard.jpg")],
    },
    {
      url: absoluteUrl("/Components_Resources"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [absoluteUrl("/resources/ScheduleHelpDay.png")],
    },
    {
      url: absoluteUrl("/Components_Fellowships"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/officers"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [absoluteUrl("/mainPhotos/Colorstack-Eboard.jpg")],
    },
    {
      url: absoluteUrl("/sponsorship"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteUrl("/mainPhotos/2024colorstsack.png")],
    },
  ];
}

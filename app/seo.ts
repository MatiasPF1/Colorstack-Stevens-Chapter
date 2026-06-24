export const siteConfig = {
  name: "Stevens ColorStack",
  title: "Stevens ColorStack - Black and Latinx CS Community at Stevens",
  description:
    "ColorStack at Stevens Institute of Technology supports Black and Latinx computer science students with mentorship, career resources, community, and technical career programming.",
  email: "colorstackstevens@gmail.com",
  instagram: "https://www.instagram.com/colorstackstevens/",
  discord: "https://discord.gg/fFA2hn75SB",
  address: {
    streetAddress: "1 Castle Point Terrace",
    addressLocality: "Hoboken",
    addressRegion: "NJ",
    postalCode: "07030",
    addressCountry: "US",
  },
};

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = rawSiteUrl
  ? new URL(/^https?:\/\//.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`)
  : undefined;

export function absoluteUrl(path = "/") {
  if (!siteUrl) return path;

  return new URL(path, siteUrl).toString();
}

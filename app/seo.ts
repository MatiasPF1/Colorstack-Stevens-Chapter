export const siteConfig = {
  name: "Stevens ColorStack",
  title: "Stevens ColorStack - Black and Latinx CS Community at Stevens",
  url: "https://stevenscolorstack.org",
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

export const siteUrl = new URL(siteConfig.url);

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

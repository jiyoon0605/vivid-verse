import { MetadataRoute } from 'next'

const domain = process.env.NEXT_PUBLIC_DOMAIN as string;
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${domain}/en`,
          ko: `${domain}/ko`,
          ja: `${domain}/ja`,
          zh: `${domain}/zh`,
        },
      },
    },
    {
      url: `${domain}/text/sentence`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${domain}/en/text/sentence`,
          ko: `${domain}/ko/text/sentence`,
          ja: `${domain}/ja/text/sentence`,
          zh: `${domain}/zh/text/sentence`,
        },
      },
    },
    {
      url: `${domain}/text/paragraph`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${domain}/en/text/paragraph`,
          ko: `${domain}/ko/text/paragraph`,
          ja: `${domain}/ja/text/paragraph`,
          zh: `${domain}/zh/text/paragraph`,
        },
      },
    },
  ]
}
function getHeroImageUrl(hero: string, imageSize: string): string {
  return hero.replace("{imageVariant}", imageSize);
}

export default getHeroImageUrl;

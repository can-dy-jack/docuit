import { usePageData } from '@runtime';
import { HomeHero } from '../HomeHero/index';
import { HomeFeature } from '../HomeFeature/index';

export function HomeLayout() {
  const { frontmatter } = usePageData();
  return (
    <div>
      <HomeHero hero={frontmatter.hero} />
      <HomeFeature features={frontmatter.features} />
    </div>
  );
}

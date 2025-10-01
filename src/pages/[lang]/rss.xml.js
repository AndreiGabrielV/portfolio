import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../../consts";
import { getProjectPosts } from "../../content/config";
import { ui } from "../../i18n/ui";
import { LANGUAGES_KEYS } from "../../i18n/utils";

export function getStaticPaths() {
  const paths = LANGUAGES_KEYS.map((lang) => ({
    params: { lang },
  }));
  return paths;
}

export async function GET(context) {
  const { lang } = context.params;

  const projects = await (
    await getProjectPosts()
  )
    ?.filter((project) => {
      return project?.data?.lang === lang;
    })
    .sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());
  const experiences = await getCollection("experience");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [
      ...projects.map((project) => ({
        ...project.data,
        link: `/${lang}/projects/${project.id}/`,
      })),
      ...experiences.map((experience) => ({
        ...experience.data,
        link: `/${lang}/experience/${experience.id}/`,
      })),
    ],
  });
}

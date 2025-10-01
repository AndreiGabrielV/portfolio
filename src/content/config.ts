import { defineCollection, getCollection, z } from 'astro:content'

const projects = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			tech: z.array(z.string()),
			github: z.string().url().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			lang: z.string().optional()
		})
})

const experience = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			company: z.string(),
			location: z.string(),
			description: z.string(),
			// Transform string to Date object
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			lang: z.string().optional()
		})
})

export const collections = { projects, experience }

export async function getProjectPosts() {
	const projects = await getCollection('projects')

	return projects.map((project) => {
		const project_slug = project.slug.split('/')[0]
		return {
			...project,
			slug: project_slug
		}
	})
}

export async function getExperiencePosts() {
	const experience = await getCollection('experience')

	return experience.map((exp) => {
		const experience_slug = exp.slug.split('/')[0]
		return {
			...exp,
			slug: experience_slug
		}
	})
}

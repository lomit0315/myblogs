import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/**
 * A frontmatter date with no time (`2026-06-21`) is parsed as UTC midnight, which
 * renders as the previous day in any negative-offset timezone. Anchor those to local
 * noon so the displayed date matches what was written. Dates that carry a time are
 * left alone.
 */
function normalizeDate(value: unknown) {
  if (value instanceof Date) {
    if (value.getUTCHours() === 0 && value.getUTCMinutes() === 0 && value.getUTCSeconds() === 0) {
      return new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), 12)
    }
    return value
  }
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value.trim())) {
    return `${value.trim()}T12:00:00`
  }
  return value
}

const dateField = () => z.preprocess(normalizeDate, z.coerce.date())

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array
  const lowercaseItems = array.map((str) => str.toLowerCase())
  const distinctItems = new Set(lowercaseItems)
  return Array.from(distinctItems)
}

// Shared schema for both collections
const blogSchema = ({ image }: { image: () => any }) =>
  z.object({
    // Required
    title: z.string().max(60),
    description: z.string().max(160),
    publishDate: dateField(),
    // Optional
    updatedDate: dateField().optional(),
    heroImage: z
      .object({
        src: image(),
        alt: z.string().optional(),
        inferSize: z.boolean().optional(),
        width: z.number().optional(),
        height: z.number().optional(),

        color: z.string().optional()
      })
      .optional(),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    category: z.string().optional(),
    language: z.string().optional(),
    draft: z.boolean().default(false),
    // Integrations
    comment: z.boolean().default(true),
    pixivLink: z.string().optional()
  })

const blog = defineCollection({
  // Load Chinese version: index.md or index.mdx
  loader: glob({ base: './src/content/blogs', pattern: '**/index.{md,mdx}' }),
  schema: blogSchema
})

const blogEn = defineCollection({
  // Load English version: index-en.md or index-en.mdx
  loader: glob({ base: './src/content/blogs', pattern: '**/index-en.{md,mdx}' }),
  schema: blogSchema
})

const collectionSchema = ({ image }: { image: () => any }) =>
  z.object({
    title: z.string(),
    /** Optional English title used on /en routes */
    title_en: z.string().optional(),
    description: z.string().optional(),
    /** Optional English description used on /en routes */
    description_en: z.string().optional(),
    heroImage: z
      .object({
        src: image(),
        alt: z.string().optional(),
        inferSize: z.boolean().optional(),
        width: z.number().optional(),
        height: z.number().optional()
      })
      .optional(),
    bloglist: z.array(z.string()).default([])
  })

const postCollections = defineCollection({
  loader: glob({ base: './src/content/collection', pattern: '**/*.{md,mdx}' }),
  schema: collectionSchema
})

export const collections = { blog, blogEn, postCollections }

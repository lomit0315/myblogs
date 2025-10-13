import { z } from 'astro/zod'

export const FriendLinksSchema = () =>
  z
    .object({
      logbook: z.array(
        z.object({
          date: z.string(),
          content: z.string()
        })
      ),
      applyTip: z.array(
        z.object({
          name: z.string(),
          val: z.string()
        })
      )
    })
    .default({
      logbook: [],
      applyTip: [
        { name: 'Name', val: 'Astro Pure' },
        { name: 'Desc', val: 'Null' },
        { name: 'Link', val: 'https://astro-pure.js.org/' },
        { name: 'Avatar', val: 'https://avatars.githubusercontent.com/u/186526148?s=400&u=3bda91ba2a04d10b1df57fd5733a0998f4351848&v=4' }
      ]
    })
    .describe('Friend links for your website.')
